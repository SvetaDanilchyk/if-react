import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

// styles
import { useFormaSearchStyles } from "./FormaSearch.styles";

// components
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { Conntainer } from "../Container";
import { PopupWindow } from "../PopupWindow";
import { SelectYears } from "../SelectYears";
import { Homes } from "../Homes";
import { Header } from "../Header";
import { Loader } from "../Loader";

//store
import { fetchHotels } from "../../store/slices/search.slice";

import darkBackgroundImage from "../../img/castelmezzano.jpg";
import lightBackgroundImage from "../../img/house.jpg";

export const FormSearch = ({ toggleTheme, isDarkMode }) => {
  const classes = useFormaSearchStyles();

  const backgroundImage = isDarkMode
    ? darkBackgroundImage
    : lightBackgroundImage;

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <section
        className={classes.topSection}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Conntainer>
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <h1 className={classes.headerTitle}>
            Discover stays to live, work or just relax
          </h1>
          <form className={classes.search} onSubmit={formSubmit}>
            <SearchInput
              classNameDiv={classes.searchDefault}
              label="Your destination or hotel name"
              id="hotel-name"
              type="text"
              className={classes.searchTall}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <SearchInput
              label="Check-in"
              className={classNames(
                classes.searchLarge,
                classes.searchTall,
                classes.borderYellow,
              )}
              type="date"
              id="check-in-date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />

            <SearchInput
              label="Check-out"
              className={classNames(
                classes.searchLarge,
                classes.searchTall,
                classes.borderYellow,
              )}
              type="date"
              id="check-out-date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />

            <div
              className={classNames(
                classes.searchLarge,
                classes.searchTall,
                classes.border,
              )}
            >
              <div className={classes.searchDescription} onClick={togglePopup}>
                Adults - {adults} Children - {children} Room - {room}
              </div>

              {isPopupVisible && (
                <PopupWindow
                  onChangeParamMinus={onChangeParamMinus}
                  onChangeParamPlus={onChangeParamPlus}
                  adults={adults}
                  children={children}
                  room={room}
                  selectYearsComponents={selectYearsComponents}
                />
              )}
            </div>

            <Button
              id="btn-search"
              type="submit"
              className={classNames(classes.btn, classes.searchTall)}
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
