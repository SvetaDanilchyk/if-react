import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./FormSearch.css";

import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { Conntainer } from "../Container";
import { PopupWindow } from "../PopupWindow";
import { SelectYears } from "../SelectYears";
import { Homes } from "../Homes";

export const FormSearch = ({ onSubmit, onChange, searchResults }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
  const sectionRef = useRef(null);

  const selectYearsComponents = useMemo(() => {
    return [...Array(children)].map((_, index) => <SelectYears key={index} />);
  }, [children]);

  const onChangeParamMinus = useCallback(
    (e) => {
      if (e.target.name === "adults") {
        setAdults(adults > 0 ? adults - 1 : 0);
      } else if (e.target.name === "children") {
        setChildren(children > 0 ? children - 1 : 0);
      } else if (e.target.name === "room") {
        setRoom(room > 0 ? room - 1 : 0);
      }
    },
    [adults, children, room],
  );

  const onChangeParamPlus = useCallback(
    (e) => {
      if (e.target.name === "adults") {
        setAdults(adults < 30 ? adults + 1 : 30);
      } else if (e.target.name === "children") {
        setChildren(children < 10 ? children + 1 : 10);
      } else if (e.target.name === "room") {
        setRoom(room < 30 ? room + 1 : 30);
      }
    },
    [adults, children, room],
  );

  useEffect(() => {
    if (searchResults.length > 0) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchResults]);

  return (
    <>
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

            <div className="search__input search__input--width serch--height border a-react">
              <div className="search-descr">
                Adults - {adults} Children - {children} Room - {room}
              </div>

              <PopupWindow
                onChangeParamMinus={onChangeParamMinus}
                onChangeParamPlus={onChangeParamPlus}
                adults={adults}
                children={children}
                room={room}
                selectYearsComponents={selectYearsComponents}
              />
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

      <div ref={sectionRef}>
        {searchResults.length > 0 ? (
          <Homes title="Available hotels" dataHomes={searchResults} />
        ) : null}
      </div>
    </>
  );
};

FormSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
