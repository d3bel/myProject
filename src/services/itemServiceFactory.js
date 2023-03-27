import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data";

export const itemServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAllItems = async () => {
    const res = await request.get(`${baseUrl}/items`);
    const result = Object.values(res);
    return result;
  };

  const create = async (data) => {
    const result = await request.post(`${baseUrl}/items`, data);

    return result;
  };
  return {
    getAllItems,
    create,
  };
};
