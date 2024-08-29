import { createUseStyles } from "react-jss";
import { theme } from "../App/App.styles";
import { darkTheme, lightTheme } from "../../styles.js/theme";

const FormaSearchStyles = (themeStyle) => ({
  topSection: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },
  search: {
    display: "flex",
    alignItems: "flex-end",
    paddingTop: "250px",
    height: "64px",
    borderRadius: "8px",
  },
  searchDefault: {
    color: theme.textColorMain,
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "400",
  },
  searchLarge: {
    minWidth: "250px",
  },
  border: {
    "&:hover": {
      border: `3px solid ${theme.accentColorLine}`,
    },
  },
  searchTall: {
    height: "64px",
    borderRadius: "8px",
    border: `3px solid ${theme.strokeColorMain}`,
    backgroundColor: "white",
  },
  borderYellow: {
    border: `3px solid ${theme.accentColorLine}`,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    "& > label": {
      color: theme.generalTextColor,
      marginBottom: "24px",
      marginLeft: "24px",
      textAlign: "left",
      fontSize: "18px",
      fontWeight: 400,
    },
  },
  btn: {
    width: "192px",
    height: "70px",
    cursor: "pointer",
    backgroundColor: themeStyle.isDarkMode
      ? darkTheme.buttonTextColor
      : lightTheme.buttonTextColor,
    border: `8px solid ${themeStyle.isDarkMode ? darkTheme.buttonTextColor : lightTheme.buttonTextColor}`,
    color: theme.generalTextColor,
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "500",
  },
  apps: {
    padding: "120px 0",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
  },
  searchDescription: {
    paddingTop: "20px",
  },
  headerTitle: {
    color: "#fff",
    marginTop: "196px",
    height: "118px",
    fontSize: "50px",
    fontWeight: "500",
  },
});

export const useFormaSearchStyles = createUseStyles(FormaSearchStyles);
