import axios from "axios";
import { URLs } from "./apiConstants";

// config for the actual backend api
export const api = axios.create({
  baseURL: URLs.api_baseUrl,
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
      config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    // if (originalConfig.url !== "/auth/signin" && err.response) {
    //   // Access Token was expired
    //   //   if (err.response.status === 401 && !originalConfig._retry) {
    //   //     originalConfig._retry = true;
    //   //     try {
    //   //       const rs = await instance.post("/auth/refreshtoken", {
    //   //         refreshToken: TokenService.getLocalRefreshToken(),
    //   //       });
    //   //       const { accessToken } = rs.data;
    //   //       TokenService.updateLocalAccessToken(accessToken);
    //   //       return instance(originalConfig);
    //   //     } catch (_error) {
    //   //       return Promise.reject(_error);
    //   //     }
    //   //   }
    // }
    return Promise.reject(err);
  }
);
// endpoints for the apis
export const endpoints = {
  auth: {
    loginUrl: URLs.loginUrl,
    refreshtoken: URLs.refreshToken,
    registerUrl: URLs.register,
    forgotPasswordUrl: URLs.forgotPasswordUrl,
    verifyTokenUrl: URLs.verifyTokenUrl,
    resetPasswordUrl: URLs.resetPasswordUrl,
  },
  dashboard: {
    getUsersByRoleUrl: URLs.getUsersByRoleUrl,
    createNewUserUrl: URLs.createNewUserUrl,
    setFiles: URLs.setFiles,
  },
};
