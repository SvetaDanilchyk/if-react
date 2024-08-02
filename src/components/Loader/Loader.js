import React from "react";

import loadingImg from "../../img/loading.gif";
import "./Loader.css";

export const Loader = () => (
  <div className="loader">
    <img className="loader-img" src={loadingImg} alt="loading" />
  </div>
);
