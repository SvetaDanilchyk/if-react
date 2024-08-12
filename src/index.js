import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CardsProvider } from "./context/Home.context";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";

//components
import { Loader } from "./components/Loader/Loader";

//routerS
import { router } from "./routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CardsProvider>
  <RouterProvider
    router={router}
    fallbackElement={<Loader />} 
  />
</CardsProvider>,
  
);

reportWebVitals();
