import React from "react";

//components
import "./Homes.css";
import { Conntainer } from "../Container";
import { Elements } from "../Elements";

//icons
import { Arrow } from "../../icons";

import { dataHomes } from "./Const";

export const Homes = () => (
  <section className="homes">
    <Conntainer>
      <h2 className="title">Homes guests loves</h2>
      <div id="slider" className="slider__items">
        {dataHomes.slice(0, 4).map((data) => (
          <Elements key={data.id} {...data} />
        ))}
        <div className="right-arrow">
          <button className="slider__btn">
            <Arrow />
          </button>
        </div>
      </div>
    </Conntainer>
  </section>
);
