import { Route } from "react-router-dom";
import React from "react";
import { superAdminMenu } from "constants/superAdminMenu";
import { appRoutes } from "routes/index";

export const getActiveRoute = (routes) => {
  let activeRoute;
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
        return routes[i].path;
      }
    }
  }
  return activeRoute;
};

export const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    if (prop.layout === "/admin" || prop.layout === "/auth") {
      return (
        <Route
          exact
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

export const getActiveTabIndex = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    const decodedToken = {
      email: "abdul.ahad@intelligenes.net",
      given_name: "9cf27979-40b4-464c-9ceb-3f043bb48060",
      userid: "9cf27979-40b4-464c-9ceb-3f043bb48060",
      customerid: "221",
      role: "admin",
      firstname: "Bilal",
      lastname: "Alam",
      exp: 1637589389,
      iss: "http://localhost:44363",
      aud: "http://localhost:44363",
    };
    const loggedinRole = decodedToken.role;
    const routes = appRoutes();
    if (loggedinRole === "admin") {
      const value = superAdminMenu.find(
        (obj) => obj.tabRoute === getActiveRoute(routes)
      );
      return superAdminMenu.indexOf(value);
    }
  }
};

// this function will filter out auth routes from appRoutes so that they can not be seen in Sidebar
export const getSidebarRoutes = (routes) => {
  return routes.filter((route) => route.layout !== "/auth");
};
