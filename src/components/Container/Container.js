import React from "react";
import classNames from "classnames";

import "./Container.css";

export const Conntainer = ({ children }) => (
  <div className={classNames("container")}>{children}</div>
);
