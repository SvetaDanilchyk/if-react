import React from "react";

import "./PopupWindow.css";
import { Button } from "../Button";

export const PopupWindow = () => (
  <div className="popup-window">
    <div
      id="input-param"
      className="search__input search__input--width serch--height border jsInput"
    >
      Adults - 1 Children - 0 Room - 1
    </div>

    <div className="add-input deactive">
      <div className="add-input__item">
        <span>Adults</span>
        <div className="wrap-btn">
          <Button
            id="btn-minus-adults"
            type="button"
            className="wrap-btn__item --active-btn-color"
          >
            -
          </Button>

          <div id="amount-adults" className="wrap-btn__number">
            1
          </div>
          <Button
            id="btn-plus-adults"
            type="button"
            className="wrap-btn__item --active-btn-color"
          >
            +
          </Button>
        </div>
      </div>
      <div className="add-input__item">
        <span>Children</span>
        <div className="wrap-btn">
          <Button
            id="btn-minus-children"
            type="button"
            className="wrap-btn__item --active-btn-color"
          >
            -
          </Button>
          <div id="amount-children" className="wrap-btn__number">
            0
          </div>
          <Button
            id="btn-plus-children"
            type="button"
            className="wrap-btn__item --active-btn-color"
          >
            +
          </Button>
        </div>
      </div>
      <div className="add-input__item">
        <span>Room</span>
        <div className="wrap-btn">
          <Button
            id="btn-minus-room"
            type="button"
            className="wrap-btn__item --active-btn-color"
          >
            -
          </Button>

          <div id="amount-room" className="wrap-btn__number">
            1
          </div>

          <Button
            id="btn-plus-room"
            type="button"
            className="wrap-btn__item --active-btn-color"
          >
            +
          </Button>
        </div>
      </div>

      <div className="add-input__text deactive">
        What is the age of the child you’re travelling with?
      </div>
      <div className="js-wrapper"></div>
    </div>
  </div>
);
