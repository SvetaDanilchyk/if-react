import { createUseStyles } from "react-jss";

export const lightTheme = {
  isDarkMode: false,
  textColor: "#ffffff",
  buttonColor: "#3077c6",
  buttonTextColor: "#05494d",
  footer: "#05494d",
  accentColor: "#eaf0f9",
  homesBackgroundColor: "#eaf0f9",
};

export const darkTheme = {
  isDarkMode: true,
  textColor: "#e1e1e1",
  buttonColor: "#444444",
  buttonTextColor: "#3077c6",
  footer: "#10367c",
  accentColor: "#333333",
  homesBackgroundColor: "#d1e0f7",
};

const theme = (theme) => ({
  app: {
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
    minHeight: "100vh",
    padding: "20px",
  },
  button: {
    backgroundColor: theme.buttonColor,
    color: theme.buttonTextColor,
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
  sizeM: {
    width: 30,
    height: 30,
  },
});

export const useStyles = createUseStyles(theme);
