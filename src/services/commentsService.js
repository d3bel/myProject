import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

const service = requestFactory();

export const getAllComments = async (itemId) => {
  const query = encodeURIComponent(`itemId="${itemId}"`);

  const results = await service.get(`${baseUrl}?where=${query}`);
  const comments = Object.values(results);

  return comments;
};

export const createComment = async (itemId, comments) => {
  const result = await service.post(`${baseUrl}`, { itemId, comments });

  return result;
};
