import React from "react";

import loadingImg from "../../img/loading.gif";
import "./Loader.css";

export const Loader = ({loadar, children}) => {
    if(loadar) {
        return(
            <div className="loader">
                <img className="loader-img" src={loadingImg} alt="loading"/>
            </div>
        );
    }

    return children;
};