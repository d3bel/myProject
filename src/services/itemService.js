import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data";

export const itemServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAllItems = async () => {
    try {
      const res = await request.get(`${baseUrl}/items`);
      if (!res) {
        return;
      }
      const result = Object.values(res);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getOneItem = async (itemId) => {
    try {
      const result = await request.get(`${baseUrl}/items/${itemId}`);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  const create = async (data) => {
    try {
      const result = await request.post(`${baseUrl}/items/`, data);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
  // const addComment = async (itemId, data) => {
  //   const result = await request.post(`${baseUrl}/${itemId}/comments`, data);

  //   return result;
  // };

  const editItem = async (itemId, data) => {
    try {
      await request.put(`${baseUrl}/items/${itemId}`, data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      request.delete(`${baseUrl}/items/${itemId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    getAllItems,
    getOneItem,
    create,
    editItem,
    deleteItem,
  };
};
