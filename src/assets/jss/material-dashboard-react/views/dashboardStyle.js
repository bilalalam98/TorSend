import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-dashboard-react.js";

const dashboardStyle = {
  successText: {
    color: successColor[0],
  },
  SendButton: {
    backgroundColor: "#238ca5",
    color: "white",
    padding: "14px",
    width: "30%",
    "@media (max-width: 524px)": {
      width: "100%",
    },
    "@media (max-width: 1237px)": {
      width: "50%",
    },
  },
  chart: {
    border: "2px solid rgb(229, 229, 229)",
    width: "100%",
    borderRadius: "5px",
    marginBottom: "15px",
    "@media (min-width: 960px)": {
      marginBlockStart: "-82px",
    },
  },
  seearchField: {
    width: "353px",
    height: "50px",
    background: "#FFFFFF",
    borderRadius: "5px",
    padding: "5px",
    "@media (max-width: 1259px)": {
      width: "100%",
      height: "50px",
      marginBottom: "10px",
    },
  },
  SendFiles: {
    border: "2px solid rgb(229, 229, 229)",
    padding: "15px",
    width: "93%",
    margin: "0 auto",
    display: "flex",
    borderRadius: "5px",
    justifyContent: "space-between",
    marginBottom: "15px",
    "@media (max-width: 1247px)": {
      padding: "11px",
    },
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px",
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

export default dashboardStyle;
