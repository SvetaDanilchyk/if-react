import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

//components
import { Loader } from "./components/Loader/Loader";

//routers
import { router } from "./routers";

//store
import { persistor, store } from "./store";
//ErrorBoundary
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </PersistGate>
    </Provider>
</ErrorBoundary>

);
//reportWebVitals();
