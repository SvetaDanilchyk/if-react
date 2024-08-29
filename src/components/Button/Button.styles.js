import { createUseStyles } from "react-jss";
import { theme } from "../App/App.styles";

const sliderButtonStyles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    height: 40,
    width: 40,
    borderRadius: "50%",
    borderColor: theme.generalTextColor,
    backgroundColor: theme.strokeColorMain,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
};
export const useSliderButtonStyles = createUseStyles(sliderButtonStyles);
