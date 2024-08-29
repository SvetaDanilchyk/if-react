import React from "react";

//components
import classNames from "classnames";

export const Button = ({ children, type, className, ...props }) => {
  return (
    <button className={classNames(className)} type={type} {...props}>
      {children}
    </button>
  );
};
