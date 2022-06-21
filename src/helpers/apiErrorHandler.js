import { NotificationManager } from "components/ReactNotifiaction";

export const apiErrorHandler = (error, history) => {
  if (error.response === undefined) {
    NotificationManager.error("Please Check your Internet Connection");
  } else if (
    error.response.data.status === "401" ||
    error.response.data.status === 401
  ) {
    // window.location.reload();
    // NotificationManager.error(error.response.data.errorMessage);
    // history.push("/auth/login");
  } else if (
    error.response.data.status === "400" ||
    error.response.data.status === 400
  ) {
    if (Array.isArray(error.response.data.errorMessage)) {
      // let errors = error.response.data.errorMessage;
      // errors.map((err, keys) => {
      //   NotificationManager.error("Number" + keys + ":" + err, 6000);
      // }); //One or more validation errors occurred.
      NotificationManager.error(error.response.data.errorMessage[0]);
    } else if (
      error.response.data.title === "One or more validation errors occurred."
    ) {
      NotificationManager.error("All Fields Are required");
    } else {
      NotificationManager.error(error.response.data.errorMessage);
    }
  } else {
    NotificationManager.error(error.response.data.errorMessage);
  }
};
