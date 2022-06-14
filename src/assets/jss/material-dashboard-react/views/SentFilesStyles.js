import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-dashboard-react.js";

const SentFilesStyle = {
  SendButton: {
    backgroundColor: "#238ca5",
    color: "white",
    padding: "14px",
    width: "35%",
    "@media (max-width: 524px)": {
      width: "100%",
    },
    "@media (max-width: 1237px)": {
      width: "50%",
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
};

export default SentFilesStyle;
