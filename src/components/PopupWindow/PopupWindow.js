import React from "react"; // {useState, useMemo }

import "./PopupWindow.css";
import { Button } from "../Button";

export const PopupWindow = ({
  onChangeParamMinus,
  onChangeParamPlus,
  adults,
  children,
  room,
  selectYearsComponents,
}) => {
  return (
    <div className="add-input">
      <div className="add-input__item">
        <span>Adults</span>
        <div className="wrap-btn">
          <Button
            id="btn-minus-adults"
            type="button"
            className="wrap-btn__item --active-btn-color"
            name="adults"
            onClick={onChangeParamMinus}
          >
            -
          </Button>

          <div id="amount-adults" className="wrap-btn__number">
            {adults}
          </div>
          <Button
            id="btn-plus-adults"
            type="button"
            className="wrap-btn__item --active-btn-color"
            name="adults"
            onClick={onChangeParamPlus}
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
            name="children"
            onClick={onChangeParamMinus}
          >
            -
          </Button>
          <div id="amount-children" className="wrap-btn__number">
            {children}
          </div>
          <Button
            id="btn-plus-children"
            type="button"
            className="wrap-btn__item --active-btn-color"
            name="children"
            onClick={onChangeParamPlus}
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
            name="room"
            onClick={onChangeParamMinus}
          >
            -
          </Button>

          <div id="amount-room" className="wrap-btn__number">
            {room}
          </div>

          <Button
            id="btn-plus-room"
            type="button"
            className="wrap-btn__item --active-btn-color"
            name="room"
            onClick={onChangeParamPlus}
          >
            +
          </Button>
        </div>
      </div>

      {children > 0 ? (
        <div className="add-input__text">
          What is the age of the child you’re travelling with?
          <div className="js-wrapper">{selectYearsComponents}</div>
        </div>
      ) : null}
    </div>
  );
};
