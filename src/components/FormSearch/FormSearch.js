import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import "./FormSearch.css";

// components
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { Conntainer } from "../Container";
import { PopupWindow } from "../PopupWindow";
import { SelectYears } from "../SelectYears";
import { Homes } from "../Homes";
import { Header } from "../Header";
import { Loader } from "../Loader";

// store
import { fetchHotels } from "../../store/slices/search.slice";

export const FormSearch = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
  const sectionRef = useRef(null);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const selectYearsComponents = useMemo(() => {
    return [...Array(children)].map((_, index) => <SelectYears key={index} />);
  }, [children]);

  const { searchResults = [], isLoading } = useSelector(
    (state) => state.search,
  );

  useEffect(() => {
    if (searchResults.length > 0) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchResults]);

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

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchHotels(search));
  };

  return (
    <>
      <section className="top-section">
        <Conntainer>
          <Header />
          <h1 className="header__title">
            Discover stays to live, work or just relax
          </h1>
          <form className="search" onSubmit={formSubmit}>
            <SearchInput
              classNameDiv="search__input search__input--width-hotel"
              label="Your destination or hotel name"
              id="hotel-name"
              type="text"
              className="serch--height"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <SearchInput
              label="Check-in"
              className="serch--height --yellow"
              type="date"
              id="check-in-date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />

            <SearchInput
              label="Check-out"
              className="serch--height --yellow"
              type="date"
              id="check-out-date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
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
              disabled={isLoading}
            >
              Search
            </Button>
          </form>
        </Conntainer>
      </section>

      <div ref={sectionRef}>
        {isLoading && <Loader />}
        {searchResults.length > 0 && (
          <Homes title="Available hotels" dataHomes={searchResults} />
        )}
      </div>
    </>
  );
};
