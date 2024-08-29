import { createUseStyles } from "react-jss";
import { darkTheme, lightTheme } from "../../styles.js/theme";
import { theme } from "../App/App.styles";

const footerStyles = (themeStyles) => ({
  footer: {
    display: "flex",
    padding: "120px 0",
    minHeight: "625px",
    backgroundColor: themeStyles.isDarkMode
      ? darkTheme.footer
      : lightTheme.footer,
  },
  contacts: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "40px",
    gap: "16px",
  },
  contactsDescr: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "400",
    color: theme.generalTextColor,
    textDecoration: "none",
    fontSize: "20px",
    paddingBottom: "24px",
    "&:hover": {
      color: "#c4c4c4",
    },
  },
  copyright: {
    display: "flex",
    color: theme.generalTextColor,
    fontSize: "14px",
    fontWeight: "400",
  },
  contactsTitle: {
    display: "flex",
    color: theme.generalTextColor,
    fontSize: "20px",
    paddingBottom: "24px",
    fontWeight: "500",
  },
  logo: {
    display: "none",
  },
});

export const useFooterStyles = createUseStyles(footerStyles);
