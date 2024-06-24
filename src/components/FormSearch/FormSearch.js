import React from "react";

//components
import "./FormSearch.css";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { Conntainer } from "../Container/Container";

export const FormSearch = ({ onSubmit, onChange }) => {
  return (
    <section className="top-section">
      <Conntainer>
        <form className="search" onSubmit={onSubmit}>
          <SearchInput
            classNameDiv="search__input search__input--width-hotel"
            label="Your destination or hotel name"
            id="hotel-name"
            type="text"
            className="serch--height"
            onChange={onChange}
          />

          <SearchInput
            label="Check-in — Check-out"
            className="serch--height --yellow"
            type="date"
            id="check-name"
          />

          <div class="search__input search__input--width serch--height border">
            Adults - 1 Children - 0 Room - 1
          </div>

          <Button
            id="btn-search"
            type="submit"
            className="serch__btn serch--height gr-xs-4"
          >
            Search
          </Button>
        </form>
      </Conntainer>
    </section>
  );
};
