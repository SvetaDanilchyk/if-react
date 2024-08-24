import React, { useEffect, Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

// components
import { Loader } from "../Loader/Loader";
import { FormSearch } from "../FormSearch";
import { Sprite } from "../Sprite";
import { Homes } from "../Homes";

// constans
import { PATH } from "../../constans/paths";

// store
import { fetchHomeHotels } from "../../store/slices/search.slice";

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { homeHotels, searchResults, error } = useSelector(
    (state) => state.search,
  );
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status !== "loggedIn") {
      navigate(PATH.login);
    } else {
      dispatch(fetchHomeHotels());
    }
  }, [status, navigate, dispatch]);

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
