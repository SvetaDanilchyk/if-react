import { createUseStyles } from "react-jss";
import { theme } from "../App/App.styles";

const popupWindow = {
  root: {
    height: "100%",
    width: "33%",
  },
  addInput: {
    visibility: "visible",
    position: "relative",
    padding: "22px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    zIndex: 1,
    transform: "translateY(10%)",
  },
  addItem: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
    paddingTop: "12px",
  },
  wrapBtn: {
    display: "flex",
    alignItems: "center",
  },
  wrapBtnItem: {
    cursor: "pointer",
    height: "30px",
    width: "30px",
    border: "4px solid",
    backgroundColor: theme.generalTextColor,
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "500",
  },
  wrapBtnNumber: {
    paddingLeft: "20px",
    paddingRight: "20px",
    maxWidth: "48px",
  },
  deactiveBtn: {
    borderColor: theme.deactive,
    color: theme.deactive,
  },
  activeBtn: {
    borderColor: theme.colorBtn,
    color: theme.colorBtn,
  },
  text: {
    paddingTop: "12px",
    fontSize: "12px",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "10px",
  },
};

export const usePopupWindowStyles = createUseStyles(popupWindow);
