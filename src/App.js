import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Admin from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import ProtectedRoute from "helpers/ProtectedRoutes.js";
import "assets/css/material-dashboard-react.css?v=1.10.0";
import { NotificationContainer } from "components/ReactNotifiaction";

const App = () => {
  const usertoken = localStorage.getItem("token");
  return (
    <>
      <NotificationContainer />
      <BrowserRouter style={{ backgroundColor: "black" }}>
        <Switch>
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Redirect exact from="/" to={usertoken ? "/admin" : "/auth"} />
          <ProtectedRoute />
          {/* <Redirect to="/auth/torsend" /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
