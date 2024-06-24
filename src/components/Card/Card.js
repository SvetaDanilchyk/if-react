import React from "react";

import "./Card.css";

export const Card = ({ id, name, city, country, imageUrl }) => (
  <div id={id} className="slider__item col-lg-4 col-md-4 col-xs-3 ">
    <img className="slider__img col-lg-12" src={imageUrl} />
    <div className="slider__descr">
      <div className="slider__descr-header">{name}</div>
      <div className="slider__descr-text">
        {city}, {country}
      </div>
    </div>
  </div>
);
