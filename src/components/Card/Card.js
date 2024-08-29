import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
//styles
import { useCardStyles } from "./Card.styles";
import { useAppStyles } from "../App/App.styles";

export const Card = ({ id, name, city, country, imageUrl }) => {
  const classes = useCardStyles();
  const mediaClasses = useAppStyles();

  return (
    <div
      id={id}
      className={classNames(
        classes.card,
        mediaClasses.colLg4,
        mediaClasses.colMd4,
        mediaClasses.colXs3,
      )}
    >
      <Link to={`/hotels/${id}`}>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={imageUrl} alt={name} />
        </div>
      </Link>
      <div className={classes.descr}>
        <div className={classes.header}>{name}</div>
        <div className={classes.text}>
          {city}, {country}
        </div>
      </div>
    </div>
  );
};
