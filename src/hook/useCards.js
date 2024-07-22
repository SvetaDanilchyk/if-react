import { useEffect, useState } from "react";
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

/*
import { useEffect, useState } from "react";
import { getHotels } from "../services/hotels";

export const useCards = () => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getHotels("")
        .then((data) => {
          setLoading(false);
          setCards(data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error.message);
        });
    }, 1000);
  }, []);

  return { cards, loading };
}; 
 */
