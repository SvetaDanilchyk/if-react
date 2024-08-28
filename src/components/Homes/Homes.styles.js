import { createUseStyles } from "react-jss";

const homesStyles = (theme) => ({
  homes: {
    paddingTop: "120px",
    paddingBottom: "120px",
    backgroundColor: theme.homesBackgroundColor,
  },
  title: {
    textAlign: "center",
    marginBottom: "106px",
  },
  sliderItems: {
    display: "flex",
    margin: "50px 0",
    alignItems: "space-between",
    justifyContent: "space-around",
    position: "relative",
    columnGap: "16px",
  },
  rightArrow: {
    position: "absolute",
    top: "calc(50% - 84px)",
    right: "-14px",
  },
});

export const useHomesStyles = createUseStyles(homesStyles);
