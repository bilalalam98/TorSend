// import { endpoints, api } from "./axios-config.js";
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
//       config.headers["x-access-token"] = token; // for Node.js Express back-end
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// api.interceptors.response.use(
//   (res) => {
//     console.log(res.config);
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;
//     // if (originalConfig.url !== "/auth/signin" && err.response) {
//     //   // Access Token was expired
//     //   //   if (err.response.status === 401 && !originalConfig._retry) {
//     //   //     originalConfig._retry = true;
//     //   //     try {
//     //   //       const rs = await instance.post("/auth/refreshtoken", {
//     //   //         refreshToken: TokenService.getLocalRefreshToken(),
//     //   //       });
//     //   //       const { accessToken } = rs.data;
//     //   //       TokenService.updateLocalAccessToken(accessToken);
//     //   //       return instance(originalConfig);
//     //   //     } catch (_error) {
//     //   //       return Promise.reject(_error);
//     //   //     }
//     //   //   }
//     // }
//     return Promise.reject(err);
//   }
// );
// export default api;
