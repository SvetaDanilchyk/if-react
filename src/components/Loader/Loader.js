import React from "react";

import "./Loader.css";

//img
import loadingImg from "../../img/loading.gif";

export const Loader = () => (
  <div className="loader">
    <img className="loader-img" src={loadingImg} alt="loading" />
  </div>
);
