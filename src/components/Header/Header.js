import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

//styles
import { useHeaderStyles } from "./Header.styles";

//img
import sprite from "../../img/sprite.svg";

//components
import { Dropdown } from "../Dropdown";

//constans
import { PAGE, PATH } from "../../constans/paths";

export const Header = ({ style, toggleTheme /*  isDarkMode  */ }) => {
  const classes = useHeaderStyles();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={classes.header} style={style}>
      <NavLink
        key={PAGE.index}
        to={PATH.index}
        className={classNames(classes.list, classes.label)}
      >
        <svg>
          <use href={`${sprite}#logo`} />
        </svg>
      </NavLink>

      <ul className={classes.list}>
        <li className={classes.menuDelimiter}>
          <a className={classes.menuText} href="#">
            Stays
          </a>
        </li>
        <li className={classes.menuDelimiter}>
          <a className={classes.menuText} href="#">
            Attractions
          </a>
        </li>
        <li className={classes.menuText}>
          <button className={classes.buttonNight} onClick={toggleTheme}>
            <svg className={classes.sizeM}>
              <use href={`${sprite}#night`} />
            </svg>
          </button>
        </li>
        <li className={classes.listItem}>
          <button className={classes.logoButton} onClick={handleButtonClick}>
            <svg className={classes.iconAccount}>
              <use href={`${sprite}#account-circle`} />
            </svg>
          </button>
          {isDropdownOpen && <Dropdown />}
        </li>
        <li className={classes.menuHamburger}>
          <div className={classes.menuHamburgerItem}></div>
          <div className={classes.menuHamburgerItem}></div>
          <div className={classes.menuHamburgerItem}></div>
        </li>
      </ul>
    </nav>
  );
};
