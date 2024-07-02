import React from "react";

//components
import "./BtnArrow.css";

//icons
import { Arrow } from "../../icons";

export const BtnArrow = ({ className, classNameBtn }) => (
  <div className={className}>
    <button className={classNameBtn}>
      <Arrow />
    </button>
  </div>
);
