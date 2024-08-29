import { createUseStyles } from "react-jss";

const containerStyles = {
  container: {
    maxWidth: "1264px",
    width: "100%",
    margin: "0 auto",
    padding: "0 16px",
  },
};

export const useContainerStyles = createUseStyles(containerStyles);
