import React, { Component } from "react";

//components
import { Homes } from "../Homes";
import { FormSearch } from "../FormSearch";

import { getHotels } from "../../services/hotels";

import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      searchResults: [],
      cards: [],
    };

    this.formChange = this.formChange.bind(this);
    this.getResultSearch = this.getResultSearch.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  async componentDidMount() {
    const cards = await getHotels(this.state.value);
    this.setState({ cards });
  }

  formChange(event) {
    this.setState({ value: event.target.value });
  }

  async getResultSearch() {
    const searchResults = await getHotels(this.state.value);
    this.setState({ searchResults });
  }

  formSubmit(event) {
    this.getResultSearch();
    event.preventDefault();
  }

  render() {
    const { cards } = this.state;

    return (
      <>
        <FormSearch onSubmit={this.formSubmit} onChange={this.formChange} />
        <Homes title="Available hotels" dataHomes={this.state.searchResults} />
        <Homes title="Homes guests loves" dataHomes={cards} />
      </>
    );
  }
}
