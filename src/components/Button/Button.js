import React from "react";

import "./Button.css";

//components
import classNames from "classnames";

export const Button = ({ children, type, className, ...props }) => (
  <button className={classNames(className)} type={type} {...props}>
    {children}
  </button>
);
