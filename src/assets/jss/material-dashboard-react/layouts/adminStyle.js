import { containerFluid } from "assets/jss/material-dashboard-react";
import { drawerMiniWidth } from "assets/jss/material-dashboard-react";
import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/material-dashboard-react.js";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
  },
  content: {
    marginTop: "-270px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
  },
  container: { ...containerFluid },
  map: {
    marginTop: "70px",
  },
  mainPanelSidebarMini: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerMiniWidth}px)`,
    },
  },
  mainPanelWithPerfectScrollbar: {
    overflow: "hidden !important",
  },
});

export default appStyle;
