import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data";

export const itemServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAllItems = async () => {
      const res = await request.get(`${baseUrl}/items`);
      const result = Object.values(res);
      return result;
  };

  const getOneItem = async (itemId) => {
    const result = await request.get(`${baseUrl}/items/${itemId}`);

    return result;
  };

  const create = async (data) => {
    const result = await request.post(`${baseUrl}/items`, data);

    return result;
  };
  // const addComment = async (itemId, data) => {
  //   const result = await request.post(`${baseUrl}/${itemId}/comments`, data);

  //   return result;
  // };

  const editItem = async (itemId, data) =>
    request.put(`${baseUrl}/${itemId}`, data);

  const deleteItem = async (itemId) => request.delete(`${baseUrl}/${itemId}`);

  return {
    getAllItems,
    getOneItem,
    create,
    editItem,
    deleteItem,
  };
};
