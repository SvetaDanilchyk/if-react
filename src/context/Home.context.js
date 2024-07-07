import React, { createContext } from "react";
import { useCards } from "../hook/useCards";

export const CardsContext = createContext({
  cards: [],
  setCards: () => {},
});

export const CardsProvider = ({ children }) => {
  const { cards } = useCards();

  return (
    <CardsContext.Provider value={{ cards }}>{children}</CardsContext.Provider>
  );
};
