import axios from "axios";
import { URLs } from "./apiConstants";

// config for the actual backend api
export const api = axios.create({
  baseURL: URLs.api_baseUrl,
});

// endpoints for the apis
export const endpoints = {
  auth: {
    loginUrl: URLs.loginUrl,
    forgotPasswordUrl: URLs.forgotPasswordUrl,
    verifyTokenUrl: URLs.verifyTokenUrl,
    resetPasswordUrl: URLs.resetPasswordUrl,
  },
  dashboard: {
    getUsersByRoleUrl: URLs.getUsersByRoleUrl,
    createNewUserUrl: URLs.createNewUserUrl,
  },
};
