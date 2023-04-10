import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

export const commentsService = (token) => {
  const service = requestFactory(token);

  const getAllComments = async (itemId) => {
    const searchQuery = encodeURIComponent(`itemId="${itemId}"`);
    const relationQuery = encodeURIComponent("owner=_ownerId:users");
    try {
      const results = await service.get(
        `${baseUrl}?where=${searchQuery}&load=${relationQuery}`
      );
      const comments = Object.values(results);
      return comments;
    } catch (error) {
      console.log(error.message);
    }
  };

  const createComment = async (itemId, comments) => {
    try {
      const result = await service.post(`${baseUrl}`, {
        itemId,
        comments,
      });
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  const editComment = async (commentId, body) => {
    try {
      const result = await service.put(`${baseUrl}/${commentId}`, body);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await service.delete(`${baseUrl}/${commentId}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  return {
    getAllComments,
    createComment,
    editComment,
    deleteComment,
  };
};
