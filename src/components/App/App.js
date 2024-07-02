import React, { useState } from "react";

//components
import { Homes } from "../Homes";
import { FormSearch } from "../FormSearch";
import { dataHomes } from "../Homes/const";

import "./App.css";

export const App = () => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const res = [];

  const formChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const getResultSearch = () => {
    dataHomes.map((item) => {
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

  return (
    <>
      <FormSearch onSubmit={formSubmit} onChange={formChange} />
      <Homes title="Available hotels" dataHomes={searchResults} />
      <Homes title="Homes guests loves" dataHomes={dataHomes} />
    </>
  );
};
