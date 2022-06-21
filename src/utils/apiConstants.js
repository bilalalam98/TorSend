// #region api URLs & endpoints
export const URLs = {
  api_baseUrl: "http://3.145.23.31:3000/",
  loginUrl: `authentication/log-in`,
  register: `authentication/register`,
  refreshToken: `authentication/refresh-token`,
  forgotPasswordUrl: `auth/forgot_password`,
  verifyTokenUrl: "auth/verify_forgot_password_token",
  resetPasswordUrl: "auth/reset_password",

  // dashboard
  getdashboardUrl: "admin/dashboard",
  //
  setFiles: `s3-functions/get-all-files`,
};
