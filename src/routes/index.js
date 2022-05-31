import AdminRoutes from "../routes/Adminroutes";
import AuthRoutes from "../routes/Authroutes";

export const appRoutes = () => {
  const token = {
    email: "abdul.ahad@intelligenes.net",
    given_name: "9cf27979-40b4-464c-9ceb-3f043bb48060",
    userid: "9cf27979-40b4-464c-9ceb-3f043bb48060",
    customerid: "221",
    role: "admin",
    firstname: "Abdul",
    lastname: "Ahad",
    exp: 1637589389,
    iss: "http://localhost:44363",
    aud: "http://localhost:44363",
  };

  const appRoutes = [];

  AuthRoutes.map((route) => {
    appRoutes.push(route);
  });

  if (token) {
    if (token.role.toLowerCase() === "admin") {
      AdminRoutes.map((route) => appRoutes.push(route));
    }
  }

  return appRoutes;
};
