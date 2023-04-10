import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/users";

export const AuthServiceFactory = (token) => {
  return {
    login: (loginData) =>
      requestFactory(token).post(`${baseUrl}/login`, loginData),

    register: (data) => requestFactory(token).post(`${baseUrl}/register`, data),

    logout: () => requestFactory(token).get(`${baseUrl}/logout`),

    me: () => requestFactory(token).get(`${baseUrl}/me`),
  };
};
