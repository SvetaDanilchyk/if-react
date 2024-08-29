import React, { memo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

//styles
import { useFormaSearchStyles } from "../FormSearch/FormaSearch.styles";

export const SearchInput = memo(
  ({ label, id, type, classNameDiv, className, ...props }) => {
    const classes = useFormaSearchStyles();
    return (
      <div className={classNames(classes.column, classNameDiv)}>
        <label for={id}>{label}</label>
        <input
          id={id}
          type={type}
          className={classNames(
            classes.searchDefault,
            classes.searchLarge,
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

SearchInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classNameDiv: PropTypes.string,
  className: PropTypes.string,
};

SearchInput.defaultProps = {
  classNameDiv: "",
  className: "",
};
