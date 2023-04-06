import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

const service = requestFactory();

export const getAllComments = async (itemId) => {
  const searchQuery = encodeURIComponent(`itemId="${itemId}"`);
  const relationQuery = encodeURIComponent("owner=_ownerId:users");

  const results = await service.get(
    `${baseUrl}?where=${searchQuery}&load=${relationQuery}`
  );
  const comments = Object.values(results);

  console.log(comments);

  return comments;
};

export const createComment = async (itemId, comments, token) => {
  const result = await requestFactory(token).post(`${baseUrl}`, {
    itemId,
    comments,
  });

  return result;
};
