import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data";

export const itemServiceFactory = (token) => {
  const service = requestFactory();

  const getAllItems = async () => {
    try {
      const res = await service.get(`${baseUrl}/items`);
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
      const result = await service.get(`${baseUrl}/items/${itemId}`);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  const create = async (data) => {
    try {
      const result = await requestFactory(token).post(
        `${baseUrl}/items/`,
        data
      );
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  const editItem = async (itemId, data) => {
    try {
      const res = await requestFactory(token).put(
        `${baseUrl}/items/${itemId}`,
        data
      );
      return res;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      requestFactory(token).delete(`${baseUrl}/items/${itemId}`);
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
