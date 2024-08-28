import { createUseStyles } from "react-jss";

const colWidth6 = "calc(100% / 6)";

export const theme = {
  basicColor: "#000",
  textColorMain: "#383838",
  generalColor: "#10367c",
  accentColor: "#eaf0f9",
  generalTextColor: "#fff",
  strokeColorMain: "#f3f3f4",
  accentColorLine: "#f5bd41",
  colorBtn: "#3077c6",
  textColor: "#bfbfbf",
  deactive: "#cecece",
  colWidth: "calc(100% / 12)",
};

export const appStyles = {
  "*": {
    margin: 0,
    boxSizing: "border-box",
    fontFamily: '"Roboto", sans-serif',
  },
  font: {
    fontFamily: "Roboto, sans-serif",
  },
  "@media (min-width: 1024px)": {
    colLg1: {
      width: theme.colWidth,
    },
    colLg2: {
      width: `calc(${theme.colWidth} * 2)`,
    },
    colLg3: {
      width: `calc(${theme.colWidth} * 3)`,
    },
    colLg4: {
      width: `calc(${theme.colWidth} * 4)`,
    },
    colLg5: {
      width: `calc(${theme.colWidth} * 5)`,
    },
    colLg6: {
      width: `calc(${theme.colWidth} * 6)`,
    },
    colLg7: {
      width: `calc(${theme.colWidth} * 7)`,
    },
    colLg8: {
      width: `calc(${theme.colWidth} * 8)`,
    },
    colLg9: {
      width: `calc(${theme.colWidth} * 9)`,
    },
    colLg10: {
      width: `calc(${theme.colWidth} * 10)`,
    },
    colLg11: {
      width: `calc(${theme.colWidth} * 11)`,
    },
    colLg12: {
      width: `calc(${theme.colWidth} * 12)`,
    },
    colLg13: {
      width: `calc(${theme.colWidth} * 13)`,
    },
    colLg14: {
      width: `calc(${theme.colWidth} * 14)`,
    },
  },
  "@media (max-width: 1024px)": {
    colMd1: {
      width: theme.colWidth,
    },
    colMd2: {
      width: `calc(${theme.colWidth} * 2)`,
    },
    colMd3: {
      width: `calc(${theme.colWidth} * 3)`,
    },
    colMd4: {
      width: `calc(${theme.colWidth} * 4)`,
    },
    colMd5: {
      width: `calc(${theme.colWidth} * 5)`,
    },
    colMd6: {
      width: `calc(${theme.colWidth} * 6)`,
    },
    colMd7: {
      width: `calc(${theme.colWidth} * 7)`,
    },
    colMd8: {
      width: `calc(${theme.colWidth} * 8)`,
    },
    colMd9: {
      width: `calc(${theme.colWidth} * 9)`,
    },
    colMd10: {
      width: `calc(${theme.colWidth} * 10)`,
    },
    colMd11: {
      width: `calc(${theme.colWidth} * 11)`,
    },
    colMd12: {
      width: `calc(${theme.colWidth} * 12)`,
    },
  },
  "@media (max-width: 768px)": {
    colSm1: {
      width: theme.colWidth,
    },
    colSm2: {
      width: `calc(${theme.colWidth} * 2)`,
    },
    colSm3: {
      width: `calc(${theme.colWidth} * 3)`,
    },
    colSm4: {
      width: `calc(${theme.colWidth} * 4)`,
    },
    colSm5: {
      width: `calc(${theme.colWidth} * 5)`,
    },
    colSm6: {
      width: `calc(${theme.colWidth} * 6)`,
    },
    colSm7: {
      width: `calc(${theme.colWidth} * 7)`,
    },
    colSm8: {
      width: `calc(${theme.colWidth} * 8)`,
    },
    colSm9: {
      width: `calc(${theme.colWidth} * 9)`,
    },
    colSm10: {
      width: `calc(${theme.colWidth} * 10)`,
    },
    colSm11: {
      width: `calc(${theme.colWidth} * 11)`,
    },
    colSm12: {
      width: `calc(${theme.colWidth} * 12)`,
    },
  },
  "@media (max-width: 480px)": {
    colXs1: {
      width: colWidth6,
    },
    colXs2: {
      width: `calc(${colWidth6} * 2)`,
    },
    colXs3: {
      width: `calc(${colWidth6} * 3)`,
    },
    colXs4: {
      width: `calc(${colWidth6} * 4)`,
    },
    colXs5: {
      width: `calc(${colWidth6} * 5)`,
    },
    colXs6: {
      width: `calc(${colWidth6} * 6)`,
    },
  },
};

export const useAppStyles = createUseStyles(appStyles);
