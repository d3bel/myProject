import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

export const getAllComments = async (itemId) => {
  const query = encodeURIComponent(`itemId="${itemId}"`);

  const results = await requestFactory.get(`${baseUrl}?where=${query}`);
  const comments = Object.values(results);

  return comments;
};

export const createComment = async (itemId, comment) => {
  const result = await requestFactory.post(`${baseUrl}`, {itemId, comment});

  return result;
};
