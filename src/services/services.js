import * as request from "./requester";

const baseUrl = "http://localhost:3030/data";

export const getAllItems = async () => {
  const res = await request.get(`${baseUrl}/items`);
  const result = Object.values(res);
  return result;
};
