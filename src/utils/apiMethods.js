import { endpoints, api } from "./axios-config.js";
export const auth = {
  // #region POST METHODS
  login: (body) => {
    return genericPostMethod(endpoints.auth.loginUrl, body);
  },
  //   forgotPassword: (body) => {
  //     return genericPostMethod(endpoints.auth.forgotPasswordUrl, body);
  //   },
  //   verifyToken: (body) => {
  //     return genericPostMethod(endpoints.auth.verifyTokenUrl, body);
  //   },
  register: (body) => {
    return genericPostMethod(endpoints.auth.registerUrl, body);
  },
  // #endregion
};

export const dashboard = {
  // #region Users
  // getUsersByRole: async (role, currentPage = 1, pageSize = 5) => {
  //   const response = await api.get(
  //     `${endpoints.dashboard.getdashboardUrl}${role}`,
  //     {
  //       params: {
  //         page_size: pageSize,
  //         current_page: currentPage,
  //       },
  //     }
  //   );
  //   return response.data;
  // },
  createdashboard: async (body) => {
    console.log(body);
    const response = await api.post(endpoints.dashboard.getdashboardUrl, body);
    return response;
  },
  updatedashboard: async (body, id) => {
    const response = await api.put(
      `${endpoints.dashboard.getdashboardUrl}${id}`,
      body
    );
    return response;
  },
};
// #region helper methods
const genericPostMethod = async (endpoints, body) => {
  const response = await api.post(endpoints, body);
  return response;
};
