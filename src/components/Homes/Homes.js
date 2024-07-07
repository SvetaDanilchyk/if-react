import React from "react";

//components
import "./Homes.css";
import { Conntainer } from "../Container";
import { Card } from "../Card";
import { BtnArrow } from "../BtnArrow/BtnArrow";

export const Homes = ({ title,dataHomes}) => (
  <section className="homes">
    <Conntainer>
      <h2 className="title">{title}</h2>
      <div className="slider__items">
        {dataHomes.length > 4
          ? dataHomes
              .slice(0, 4)
              .map((data) => <Card key={data.id} {...data} />)
          : dataHomes.map((data) => <Card key={data.id} {...data} />)}
        {dataHomes.length >= 4 && (
          <BtnArrow className="right-arrow" classNameBtn="slider__btn" />
        )}
      </div>
    </Conntainer>
  </section>
);