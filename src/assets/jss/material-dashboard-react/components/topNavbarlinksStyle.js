import {
  defaultFont,
  dangerColor,
  whiteColor,
  grayColor,
  blackColor,
  primaryColor,
  hexToRgb,
} from "assets/jss/material-dashboard-react";

import customDropdownStyle from "assets/jss/material-dashboard-react/components/customDropdownStyle.js";

const topNavbarLinksStyle = (theme) => ({
  ...customDropdownStyle(theme),

  linkText: {
    zIndex: "4",
    ...defaultFont,
    fontSize: "14px",
    margin: "0!important",
    textTransform: "none",
  },
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "5px 15px 0",
      width: "auto",
      height: "auto",
      "& svg": {
        width: "30px",
        height: "24px",
        marginRight: "19px",
        marginLeft: "3px",
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        width: "30px",
        fontSize: "24px",
        lineHeight: "30px",
        marginRight: "19px",
        marginLeft: "3px",
      },
    },
  },
  top: {
    zIndex: "4",
  },
  links: {
    width: "20px",
    height: "20px",
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "30px",
      height: "30px",
      color: "inherit",
      opacity: "0.8",
      marginRight: "16px",
      marginLeft: "-5px",
    },
  },
  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "5px",
      border: "1px solid " + whiteColor,
      right: "5px",
      fontSize: "9px",
      background: dangerColor[0],
      color: whiteColor,
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "14px",
      verticalAlign: "middle",
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      ...defaultFont,
      fontSize: "14px",
      marginRight: "8px",
    },
  },
  managerClasses: {
    [theme.breakpoints.up("md")]: {
      display: "inline-block",
    },
  },
  headerLinksSvg: {
    width: "20px !important",
    height: "20px !important",
  },
  switchBase: {
    color: primaryColor[0] + "!important",
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(" + hexToRgb(blackColor) + ", 0.4)",
    color: whiteColor + " !important",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
  },
  switchIconChecked: {
    borderColor: primaryColor[0],
    transform: "translateX(0px)!important",
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(" + hexToRgb(grayColor[18]) + ")",
    borderRadius: "15px",
    opacity: "1.0 !important",
  },
  switchPrimary: {
    "&.Mui-checked": {
      color: "rgb(" + hexToRgb(primaryColor[0]) + ") !important",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "rgb(" + hexToRgb(primaryColor[0]) + ") !important",
    },
  },
  marginRight: "4px",
  loggedInUser: {
    alignItem: "center",
    color: "white",
    display: "inline",
  },
  boldText: {
    fontWeight: "400",
    marginRight: "7px",
    color: whiteColor,
    fontSize: "20px",
    display: "inline",
  },
  dotColor: {
    backgroundColor: primaryColor[0] + " !important",
  },
  menuItem: {
    marginRight: "10px",
  },
  iconSize: {
    fontSize: "20px",
  },
});

export default topNavbarLinksStyle;
