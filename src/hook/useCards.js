import { useEffect, useState } from "react";

//services
import { getHotels } from "../services/hotels";

export const useCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getHotels("")
        .then((data) => {
          setCards(data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, 1000);
  }, []);

  return cards;
};
