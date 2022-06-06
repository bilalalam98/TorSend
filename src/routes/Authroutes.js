import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Login from "views/AuthPages/Login";
import Signup from "views/AuthPages/Signup";
import StartingPage from "views/AuthPages/StartingPage";
import NotFoundPage from "views/Users/NotFoundPage";
const AuthRoutes = [
  {
    path: "/torsend",
    name: "Main Page",
    component: StartingPage,
    layout: "/auth",
  },
  {
    path: "/signin",
    name: "Signin",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "Signin",
    component: Signup,
    layout: "/auth",
  },
  {
    path: "/page-not-found",
    name: "Page Not Found",
    component: NotFoundPage,
    layout: "/auth",
  },
];

export default AuthRoutes;
