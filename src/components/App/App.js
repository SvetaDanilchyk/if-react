import React, { useEffect, Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

// context
import { useAuth } from "../../context/Auth.context";

// components
import { Loader } from "../Loader";
import { FormSearch } from "../FormSearch";
import { Sprite } from "../Sprite";
import { Homes } from "../Homes";

// constans
import { PATH } from "../../constans/paths";

// store
import { searchHotels } from "../../store/actions/search.actions";

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();
  const { homeHotels, searchResults, error } = useSelector(
    (state) => state.search,
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(PATH.login);
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    dispatch(searchHotels(""));
  }, [dispatch]);

  return (
    <>
      <Sprite />
      {location.pathname === PATH.index ? (
        <>
          <Suspense fallback={<Loader />}>
            <FormSearch searchResults={searchResults} />
            {error && <div>Error: {error}</div>}
            {!error && homeHotels.length > 0 && (
              <Homes title="Homes guests love" dataHomes={homeHotels} />
            )}
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
