import { createUseStyles } from "react-jss";
import { darkTheme, lightTheme } from "../../styles.js/theme";

const useHeaderStyles = createUseStyles((theme) => ({
  header: {
    display: "flex",
    paddingTop: "51px",
    justifyContent: "space-between",
    paddingBottom: "30px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    width: "210px",
    height: "40px",
    "& svg": {
      fill: theme.isDarkMode
        ? darkTheme.buttonTextColor
        : lightTheme.buttonTextColor,
    },
  },
  menuText: {
    textDecoration: "none",
    color: theme.textColor,
    fontSize: "24px",
    fontWeight: "400",
    margin: "0 24px",
  },
  logoButton: {
    background: "transparent",
    border: "0",
    cursor: "pointer",
    paddingRight: "20px",
    "& svg": {
      fill: theme.isDarkMode ? darkTheme.buttonTextColor : lightTheme.textColor,
      transition: "fill 0.3s ease",
    },
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  buttonNight: {
    backgroundColor: "inherit",
    border: "0",
    cursor: "pointer",
    "& svg": {
      fill: theme.isDarkMode ? darkTheme.buttonTextColor : lightTheme.textColor,
      transition: "fill 0.3s ease",
    },
  },
  sizeM: {
    width: "30px",
    height: "30px",
  },
  iconAccount: {
    width: "64px",
    height: "64px",
  },
  menuDelimiter: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginRight: "48px",
    "&:hover::after": {
      content: '""',
      position: "absolute",
      bottom: "-15px",
      left: "50%",
      transform: "translateX(-50%)",
      height: "4px",
      width: "60%",
      backgroundColor: theme.accentColor,
      border: "none",
      animation: "$delim 250ms",
    },
  },
  "@keyframes delim": {
    "0%": {
      top: "80%",
      opacity: 0,
    },
    "80%": {
      top: "100%",
      opacity: 0.7,
    },
    "100%": {
      opacity: 1,
    },
  },
  menuHamburger: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "3px",
  },
  menuHamburgerItem: {
    width: "24px",
    height: "3px",
    backgroundColor: theme.isDarkMode
      ? darkTheme.buttonTextColor
      : lightTheme.textColor,
  },
}));

export { useHeaderStyles };
