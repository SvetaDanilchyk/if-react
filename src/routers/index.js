import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// components
import { App } from "../components/App";

// context
import { AuthProvider } from "../context/Auth.context";
import { CardsProvider } from "../context/Home.context";

// pages
import { AvailableHotels } from "../pages/AvailableHotels";
import { Login } from "../pages/Login/Login";

// constans
import { PAGE, PATH } from "../constans/paths";

const AppWrapper = () => (
  <AuthProvider>
    <CardsProvider>
      <App />
    </CardsProvider>
  </AuthProvider>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATH.index} element={<AppWrapper />}>
      <Route path={PAGE.availableHotels} element={<AvailableHotels />} />
      <Route path={PAGE.login} element={<Login />} />
    </Route>,
  ),
);
