import React, { useState, useContext, Suspense } from "react";

import "./App.css";

import { Loader } from "../Loader";
import { Homes } from "../Homes";
import { FormSearch } from "../FormSearch";
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
      <Suspense fallback={<Loader />}>
        {isLoading ? (
          <Loader /> 
        ) : (         
          <FormSearch onSubmit={formSubmit} onChange={formChange} searchResults={searchResults}/>
        )}
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <HomesWithSuspense />
      </Suspense>
    </>
  );
};
