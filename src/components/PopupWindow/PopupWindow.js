import React, { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

//styles
import { usePopupWindowStyles } from "./PopupWindow.styles";

//components
import { Button } from "../Button";

export const PopupWindow = memo(
  ({
    onChangeParamMinus,
    onChangeParamPlus,
    adults,
    children,
    room,
    selectYearsComponents,
  }) => {
    const classes = usePopupWindowStyles();

    return (
      <div className={classes.addInput}>
        <div className={classes.addItem}>
          <span>Adults</span>
          <div className={classes.wrapBtn}>
            <Button
              id="btn-minus-adults"
              type="button"
              className={classNames(classes.wrapBtnItem, classes.activeBtn)}
              name="adults"
              onClick={onChangeParamMinus}
            >
              -
            </Button>

            <div id="amount-adults" className={classes.wrapBtnNumber}>
              {adults}
            </div>
            <Button
              id="btn-plus-adults"
              type="button"
              className={classNames(classes.wrapBtnItem, classes.activeBtn)}
              name="adults"
              onClick={onChangeParamPlus}
            >
              +
            </Button>
          </div>
        </div>
        <div className={classes.addItem}>
          <span>Children</span>
          <div className={classes.wrapBtn}>
            <Button
              id="btn-minus-children"
              type="button"
              className={classNames(classes.wrapBtnItem, classes.activeBtn)}
              name="children"
              onClick={onChangeParamMinus}
            >
              -
            </Button>
            <div id="amount-children" className={classes.wrapBtnNumber}>
              {children}
            </div>
            <Button
              id="btn-plus-children"
              type="button"
              className={classNames(classes.wrapBtnItem, classes.activeBtn)}
              name="children"
              onClick={onChangeParamPlus}
            >
              +
            </Button>
          </div>
        </div>
        <div className={classes.addItem}>
          <span>Room</span>
          <div className={classes.wrapBtn}>
            <Button
              id="btn-minus-room"
              type="button"
              className={classNames(classes.wrapBtnItem, classes.activeBtn)}
              name="room"
              onClick={onChangeParamMinus}
            >
              -
            </Button>

            <div id="amount-room" className={classes.wrapBtnNumber}>
              {room}
            </div>

            <Button
              id="btn-plus-room"
              type="button"
              className={classNames(classes.wrapBtnItem, classes.activeBtn)}
              name="room"
              onClick={onChangeParamPlus}
            >
              +
            </Button>
          </div>
        </div>

        {children > 0 ? (
          <div className={classes.text}>
            What is the age of the child you’re travelling with?
            <div className={classes.wrapper}>{selectYearsComponents}</div>
          </div>
        ) : null}
      </div>
    );
  },
);

PopupWindow.propTypes = {
  onChangeParamMinus: PropTypes.func.isRequired,
  onChangeParamPlus: PropTypes.func.isRequired,
  adults: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired,
  room: PropTypes.number.isRequired,
  selectYearsComponents: PropTypes.arrayOf(PropTypes.element).isRequired,
};
