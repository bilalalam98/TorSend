import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";

// THIS FUNCTION WILL CHECK REQUESTED APP LAYOUT AND WILL RETURN ROUTES ACCORDINGLY
const getCurrentLayout = (requestedLayout, requestedPath) => {
  if (requestedLayout === "admin") {
    return (
      <Route
        path={requestedPath}
        render={(props) => <AdminLayout {...props} />}
      />
    );
  }
};

const ProtectedRoute = () => {
  const userToken = localStorage.getItem("token");

  let loggedInRole = "";

  if (userToken) {
    const decodedToken = {
      email: "abdul.ahad@intelligenes.net",
      role: "admin",
      exp: 1637589389,
    };
    loggedInRole = decodedToken.role;
  }
  if (userToken) {
    const requestedPath = window.location.pathname;
    const requestedLayout = requestedPath.split("/")[1];
    console.log(requestedPath, requestedLayout);
    const isRightLayout =
      loggedInRole.toLocaleLowerCase() === requestedLayout.toLocaleLowerCase();
    if (isRightLayout) {
      return (
        <>
          <Switch>{getCurrentLayout(requestedLayout, requestedPath)}</Switch>
        </>
      );
    } else {
      return <Redirect to="/auth/page-not-found" />;
    }
  }
  // NotificationManager.error("Session timeout", "Please login again", 5000);
  console.log("Session timeout", "Please login again");

  return <Redirect to="/auth/signin" />;
};

export default ProtectedRoute;
