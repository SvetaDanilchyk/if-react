import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

//components
import { Loader } from "./components/Loader/Loader";

//routers
import { router } from "./routers";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement={<Loader />} />
  </Provider>,
);
reportWebVitals();
