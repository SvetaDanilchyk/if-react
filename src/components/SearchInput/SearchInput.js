import React, { memo } from "react";
import classNames from "classnames";

import "./SearchInput.css";

export const SearchInput = memo(
  ({ label, id, type, classNameDiv, className, ...props }) => {
    return (
      <div className={classNames("column", classNameDiv)}>
        <label for={id}>{label}</label>
        <input
          id={id}
          type={type}
          className={classNames(
            "search__input search__input--width",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
