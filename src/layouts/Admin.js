import React from "react";
import cx from "classnames";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { AppsOutlined } from "@material-ui/icons";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import TopNavbar from "components/Navbars/TopNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import { appRoutes } from "routes";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
//import appLogo from "assets/img/app-logo.png";

var ps;

const useStyles = makeStyles(styles);

export default function Dashboard(props) {
  const { ...rest } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);

  const [color, setColor] = React.useState("blue");
  const [bgColor, setBgColor] = React.useState("black");
  // const [hasImage, setHasImage] = React.useState(true);
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");

  // styles
  const classes = useStyles();
  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1,
    });
  // ref for main panel div
  const mainPanel = React.createRef();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  });

  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={appRoutes()}
        logoText={"TorSend"}
        logo={AppsOutlined}
        // image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        miniActive={miniActive}
        {...rest}
      />
      <div className={mainPanelClasses} ref={mainPanel}>
        <GridContainer
          style={{
            background:
              "linear-gradient(92.86deg, #37E0C2 2.43%, #41D1FF 108.47%)",
            padding: "160px",
          }}
        >
          <TopNavbar
            sidebarMinimize={sidebarMinimize.bind(this)}
            miniActive={miniActive}
            brandText={getActiveRoute(appRoutes())}
            handleDrawerToggle={handleDrawerToggle}
            {...rest}
          />
          <GridItem xs="9" ms="9"></GridItem>
          <GridItem xs="3" ms="3">
            <span
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "200px 90px",
                opacity: " 0.1",
              }}
            >
              <span
                style={{
                  width: "60%",
                  backgroundColor: "white",
                  padding: "140px",
                  borderRadius: "50%",
                  opacity: " 0.9 !important",
                  border: "7px solid grey",
                }}
              >
                h
              </span>
            </span>
          </GridItem>
        </GridContainer>
        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>
              {getRoutes(appRoutes())}
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
