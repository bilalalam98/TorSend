/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import applogo from "assets/img/appLogo.svg";
import { NavLink, useLocation } from "react-router-dom";
import cx from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import Icon from "@material-ui/core/Icon";

// core components
import TopNavbarLinks from "components/Navbars/TopNavbarLinks.js";
import SidebarWrapper from "components/Sidebar/SidebarWrapper";
import { getSidebarRoutes } from "helpers/routesHelpers";
import sidebarStyle from "assets/jss/material-dashboard-react/components/sidebarStyle";

const useStyles = makeStyles(sidebarStyle);

function Sidebar(props) {
  const classes = useStyles();
  const [miniActive, setMiniActive] = React.useState(true);
  // to check for active links and opened collapses
  let location = useLocation();

  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    setState(getCollapseStates(props.routes));
  }, []);
  const mainPanel = React.useRef();
  // this creates the intial state of this component based on the collapse routes
  // that it gets through routes
  const getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  const getCollapseInitialState = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (location.pathname === routes[i].layout + routes[i].path) {
        return true;
      }
    }
    return false;
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        const navLinkClasses =
          classes.itemLink +
          " " +
          cx({
            [" " + classes.collapseActive]: getCollapseInitialState(prop.views),
          });
        const itemText =
          classes.itemText +
          " " +
          cx({
            [classes.itemTextMini]: props.miniActive && miniActive,
          });
        const collapseItemText =
          classes.collapseItemText +
          " " +
          cx({
            [classes.collapseItemTextMini]: props.miniActive && miniActive,
          });
        const itemIcon = classes.itemIcon;
        const caret = classes.caret;
        const collapseItemMini = classes.collapseItemMini;
        return (
          <ListItem
            key={key}
            className={cx(
              { [classes.item]: prop.icon !== undefined },
              { [classes.collapseItem]: prop.icon === undefined }
            )}
          >
            <NavLink
              to={"#"}
              className={navLinkClasses}
              onClick={(e) => {
                e.preventDefault();
                setState(st);
              }}
            >
              {prop.icon !== undefined ? (
                typeof prop.icon === "string" ? (
                  <Icon className={itemIcon}>{prop.icon}</Icon>
                ) : (
                  <prop.icon className={itemIcon} />
                )
              ) : (
                <span className={collapseItemMini}>{prop.mini}</span>
              )}
              <ListItemText
                primary={prop.name}
                secondary={
                  <b
                    className={
                      caret +
                      " " +
                      (state[prop.state] ? classes.caretActive : "")
                    }
                  />
                }
                disableTypography={true}
                className={cx(
                  { [itemText]: prop.icon !== undefined },
                  { [collapseItemText]: prop.icon === undefined }
                )}
              />
            </NavLink>
          </ListItem>
        );
      }
      const innerNavLinkClasses = classes.collapseItemLink;
      const collapseItemMini = classes.collapseItemMini;
      const navLinkClasses = classes.itemLink;
      const itemText =
        classes.itemText +
        " " +
        cx({
          [classes.itemTextMini]: props.miniActive && miniActive,
        });
      const collapseItemText =
        classes.collapseItemText +
        " " +
        cx({
          [classes.collapseItemTextMini]: props.miniActive && miniActive,
        });
      const itemIcon = classes.itemIcon;
      return (
        <ListItem
          key={key}
          className={cx(
            { [classes.item]: prop.icon !== undefined },
            { [classes.collapseItem]: prop.icon === undefined }
          )}
        >
          <NavLink
            to={prop.layout + prop.path}
            className={cx(
              { [navLinkClasses]: prop.icon !== undefined },
              { [innerNavLinkClasses]: prop.icon === undefined }
            )}
          >
            {prop.icon !== undefined ? (
              typeof prop.icon === "string" ? (
                <Icon className={itemIcon}>{prop.icon}</Icon>
              ) : (
                <prop.icon className={itemIcon} />
              )
            ) : (
              <span className={collapseItemMini}>{prop.mini}</span>
            )}
            <ListItemText
              primary={prop.name}
              disableTypography={true}
              className={cx(
                { [itemText]: prop.icon !== undefined },
                { [collapseItemText]: prop.icon === undefined }
              )}
            />
          </NavLink>
        </ListItem>
      );
    });
  };
  const { logo, image, logoText, routes } = props;

  var links = (
    <List className={classes.list}>
      {createLinks(getSidebarRoutes(routes))}
    </List>
  );

  const logoNormal =
    classes.logoNormal +
    " " +
    cx({
      [classes.logoNormalSidebarMini]: props.miniActive && miniActive,
    });
  const logoMini = classes.logoMini;
  const logoClasses = classes.logo;
  var brand = (
    <div className={logoClasses}>
      <a
        href="https://www.creative-tim.com?ref=mdpr-sidebar"
        target="_blank"
        className={logoMini}
      >
        <img src={applogo} alt="logo" className={classes.img} />
      </a>
      {/* <a
        href="https://www.creative-tim.com?ref=mdpr-sidebar"
        target="_blank"
        className={logoNormal}
      >
        {logoText}
      </a> */}
    </div>
  );
  const drawerPaper =
    classes.drawerPaper +
    " " +
    cx({
      [classes.drawerPaperMini]: props.miniActive && miniActive,
    });
  const sidebarWrapper =
    classes.sidebarWrapper +
    " " +
    cx({
      [classes.drawerPaperMini]: props.miniActive && miniActive,
      [classes.sidebarWrapperWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1,
    });
  return (
    <div ref={mainPanel}>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={props.open}
          classes={{
            paper: drawerPaper,
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <SidebarWrapper
            className={sidebarWrapper}
            headerLinks={<TopNavbarLinks />}
            links={links}
          />
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={"left"}
          variant="permanent"
          open
          classes={{
            paper: drawerPaper,
          }}
        >
          {brand}
          <SidebarWrapper className={sidebarWrapper} links={links} />
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.defaultProps = {
  bgColor: "blue",
};

Sidebar.propTypes = {
  bgColor: PropTypes.oneOf(["white", "black", "blue"]),
  color: PropTypes.oneOf([
    "white",
    "red",
    "orange",
    "green",
    "blue",
    "purple",
    "rose",
  ]),
  logo: PropTypes.string,
  logoText: PropTypes.string,
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  miniActive: PropTypes.bool,
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
};

SidebarWrapper.propTypes = {
  className: PropTypes.string,
  headerLinks: PropTypes.object,
  links: PropTypes.object,
};

export default Sidebar;
