import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

//img
import sprite from "../../img/sprite.svg";

//components
import { Dropdown } from "../Dropdown";

//routers
import { PAGE, PATH } from "../../constans/paths";

export const Header = ({ style }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="header" style={style}>
      <NavLink key={PAGE.index} to={PATH.index} className="menu menu__label">
        <svg>
          <use href={`${sprite}#logo`} />
        </svg>
      </NavLink>

      <ul className="menu">
        <li className="delimiter">
          <a className="menu__text" href="#">
            Stays
          </a>
        </li>
        <li className="delimiter">
          <a className="menu__text" href="#">
            Attractions
          </a>
        </li>
        <li className="menu__text--margin-24">
          <button className="menu__btn-night">
            <svg className="menu__btn-night--size-m">
              <use href={`${sprite}#night`} />
            </svg>
          </button>
        </li>
        <li>
          <button className="logo-btm" onClick={handleButtonClick}>
            <svg className="menu__icon-acount">
              <use href={`${sprite}#account-circle`} />
            </svg>
          </button>
          {isDropdownOpen && <Dropdown />}
        </li>
        <li className="menu__hamburger">
          <div className="menu__hamburger-item"></div>
          <div className="menu__hamburger-item"></div>
          <div className="menu__hamburger-item"></div>
        </li>
      </ul>
    </nav>
  );
};
