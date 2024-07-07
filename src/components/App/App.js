import React, { useState, useDebugValue } from "react";
import { useContext } from "react";

//components
import { Homes } from "../Homes";
import { FormSearch } from "../FormSearch";
import { CardsContext } from "../../context/Home.context";
import { useCards } from "../../hook/useCards";

import { Loader } from "../Loader/Loader";
import "./App.css";

export const App = () => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { cards, setCards } = useContext(CardsContext);
  const { loading } = useCards();
  const res = [];

  const formChange = (event) => {
    setValue(event.target.value);
  };

  const getResultSearch = () => {
    cards.map((item) => {
      if (
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.city.toLowerCase().includes(value.toLowerCase()) ||
        item.country.toLowerCase().includes(value.toLowerCase())
      ) {
        res.push(item);
      }
    });
    return setSearchResults(res);
  };

  const formSubmit = (event) => {
    getResultSearch();
    event.preventDefault();
  };

  useDebugValue({ cards, setCards });

  return (
    <>
      <FormSearch onSubmit={formSubmit} onChange={formChange} />
      <Homes title="Available hotels" dataHomes={searchResults} />
      <Loader loadar={loading}>
        <Homes title="Homes guests loves" dataHomes={cards} />
      </Loader>
    </>
  );
};
