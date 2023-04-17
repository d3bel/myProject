import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/itemLikes";

export const likesService = (token) => {
  const service = requestFactory(token);

  const getMyLikes = async (ownerId) => {
    const searchQuery = encodeURIComponent(`_ownerId="${ownerId}"`);
    try {
      const res = await service.get(
        `${baseUrl}?where=${searchQuery}`
        );
        if (!res) {
          return;
        }
        const result = Object.values(res);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
  /*         `${baseUrl}?where=itemId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22`
  /data/comments?where=recipeId=
  */
  const getItemLikes = async (itemId) => {
    try {
      const res = await service.get(`${baseUrl}`);
      if (!res) {
        return;
      }
      const result = Object.values(res);
      const neededItem = result.filter((i) => i.itemId === itemId);
      console.log(neededItem);
      return neededItem;
    } catch (error) {
      console.log(error.message);
    }
  };

  const likeClicked = async (itemId) => {
    try {
      const result = await service.post(`${baseUrl}`, {
        itemId,
      });
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  const dislikeClicked = async (itemId) => {
    try {
      await service.delete(`${baseUrl}/${itemId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    likeClicked,
    getItemLikes,
    dislikeClicked,
    getMyLikes,
  };
};
