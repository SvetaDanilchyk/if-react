import { createUseStyles } from "react-jss";
import { theme } from "../App/App.styles";

const dropdownStyles = {
  dropdown: {
    position: "absolute",
    top: "100%",
    right: "50%",
    transform: "translateX(50%)",
    width: "100px",
    zIndex: "1",
    cursor: "pointer",
    backgroundColor: theme.generalTextColor,
    borderRadius: "8px",
  },
  dropdownMenu: {
    listStyleType: "none",
    padding: "10px",
    marginTop: "5px",
  },
};

export const useDropdownStyles = createUseStyles(dropdownStyles);
