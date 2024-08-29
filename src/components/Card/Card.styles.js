import { createUseStyles } from "react-jss";
import { theme } from "../App/App.styles";

const cardStyles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  imageWrapper: {
    width: "100%",
    height: "350px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  descr: {
    display: "flex",
    flexDirection: "column",
    rowGap: "24px",
  },
  header: {
    color: theme.colorBtn,
    fontSize: "24px",
    fontWeight: "400",
  },
  text: {
    color: theme.textColor,
    fontSize: "24px",
    fontWeight: "400",
  },
};

export const useCardStyles = createUseStyles(cardStyles);
