import React, { useState, useContext, useEffect, Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "./App.css";

//hook
import { useAuth } from "../../context/Auth.context"; 

//components
import { Loader } from "../Loader";
import { Homes } from "../Homes";
import { FormSearch } from "../FormSearch";
import { Sprite } from "../Sprite";

//const
import { PATH } from "../../constans/paths";

//context
import { CardsContext } from "../../context/Home.context";

const HomesWithSuspense = () => {
  const { cardsPromise } = useContext(CardsContext);
  const dataHomes = cardsPromise.read();
  return <Homes title="Homes guests love" dataHomes={dataHomes} />;
};

export const App = () => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { cardsPromise } = useContext(CardsContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(PATH.authPage); 
    }
  }, [isAuthenticated, navigate]);

  const formChange = (event) => {
    setValue(event.target.value);
  };

  const getResultSearch = () => {
    setIsLoading(true);

    setTimeout(() => {
      const cards = cardsPromise.read();
      const res = cards.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.city.toLowerCase().includes(value.toLowerCase()) ||
        item.country.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(res);
      setIsLoading(false);
    }, 1000);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    getResultSearch();
  };

  return (
    <>
      <Sprite />
      {location.pathname === PATH.index ? (
        <>
          <Suspense fallback={<Loader />}>
            {isLoading ? (
              <Loader />
            ) : (
              <FormSearch onSubmit={formSubmit} onChange={formChange} searchResults={searchResults} />
            )}
          </Suspense>

          <Suspense fallback={<Loader />}>
            <HomesWithSuspense />
          </Suspense>
        </>
      ) : (
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      )}
    </>
  );
};
