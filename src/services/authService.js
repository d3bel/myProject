import * as request from "./requester";

const baseUrl = "http://localhost:3030/jsonstore";

export const login = (loginData) => {
  return request.get(`${baseUrl}/users`, loginData);
};

export const register = (data) => request.post(`${baseUrl}/users`, data);
