import React, { useEffect, Suspense, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "react-jss";

// components
import { Loader } from "../Loader/Loader";
import { FormSearch } from "../FormSearch";
import { Sprite } from "../Sprite";
import { Homes } from "../Homes";
import { Footer } from "../Footer/Footer";

// theme
import { darkTheme, lightTheme } from "../../styles.js/theme";

// constans
import { PATH } from "../../constans/paths";

// store
import { fetchHomeHotels } from "../../store/slices/search.slice";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Sprite />
      <Suspense fallback={<Loader />}>
        {location.pathname === PATH.index ? (
          <>
            <FormSearch
              searchResults={searchResults}
              toggleTheme={toggleTheme}
              isDarkMode={isDarkMode}
            />
            {error && <div>Error: {error}</div>}
            {!error && homeHotels.length > 0 && (
              <Homes title="Homes guests love" dataHomes={homeHotels} />
            )}
            <Footer />
          </>
        ) : (
          <Outlet />
        )}
      </Suspense>
    </ThemeProvider>
  );
};
