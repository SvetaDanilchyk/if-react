import React, { createContext } from "react";
import { wrapPromise, fetchData } from "../lib/wrapPromise";

//const
import { hotelsUrl } from "../services/const";

export const CardsContext = createContext({
  cardsPromise: null,
});

export const CardsProvider = ({ children }) => {
  const cardsPromise = wrapPromise(fetchData(hotelsUrl));
  return (
    <CardsContext.Provider value={{ cardsPromise }}>
      {children}
    </CardsContext.Provider>
  );
};
