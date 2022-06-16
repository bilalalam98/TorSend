// #region api URLs & endpoints
export const URLs = {
  api_baseUrl: "http://ec2-18-216-15-41.us-east-2.compute.amazonaws.com:3000/",
  loginUrl: `authentication/log-in`,
  register: `authentication/register`,
  refreshToken: `authentication/refresh-token`,
  forgotPasswordUrl: `auth/forgot_password`,
  verifyTokenUrl: "auth/verify_forgot_password_token",
  resetPasswordUrl: "auth/reset_password",

  // dashboard
  getdashboardUrl: "admin/dashboard",
};
