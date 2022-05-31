import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Admin from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import ProtectedRoute from "helpers/ProtectedRoutes.js";
import "assets/css/material-dashboard-react.css?v=1.10.0";

const App = () => {
  const usertoken = JSON.parse(localStorage.getItem("token"));
  return (
    <BrowserRouter style={{ backgroundColor: "black" }}>
      <Switch>
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Redirect exact from="/" to={usertoken ? "/admin" : "/auth"} />
        <ProtectedRoute />
        <Redirect to="/auth/page-not-found" />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
