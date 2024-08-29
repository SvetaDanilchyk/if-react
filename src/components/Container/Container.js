import React from "react";

import { useContainerStyles } from "./Container.styles";

export const Conntainer = ({ children }) => {
  const classes = useContainerStyles();

  return <div className={classes.container}>{children}</div>;
};
