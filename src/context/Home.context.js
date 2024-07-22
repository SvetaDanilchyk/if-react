import React, { createContext } from "react";
//import { useCards } from "../hook/useCards";
import { wrapPromise } from "../lib/wrapPromise";
import { fetchData } from "../lib/wrapPromise";
import { hotelsUrl } from "../services/const";

export const CardsContext = createContext({
  cards: [],
  setCards: () => {},
});

export const CardsProvider = ({ children }) => {
  const cards = wrapPromise(fetchData(hotelsUrl));

  console.log("cards - ", cards);
  //  const { cards } = useCards();

  return (
    <CardsContext.Provider value={{ cards }}>{children}</CardsContext.Provider>
  );
};
