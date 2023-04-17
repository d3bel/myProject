import { useEffect, useState } from "react";

import { useAuthContext } from "../context/AuthContext";
import { useTokenService } from "./useTokenService";
import { itemServiceFactory } from "../services/itemService";
import { commentsService } from "../services/commentsService";
import { likesService } from "../services/likesService";

export const useItem = (itemId) => {
  const [item, setItem] = useState({});

  const { isAuthenticated, userId, token, firstName, lastName } =
    useAuthContext();

  const itemService = useTokenService(itemServiceFactory);
  const commentService = useTokenService(commentsService);
  const likeService = useTokenService(likesService);

  useEffect(() => {
    if (!itemId) return;
    Promise.all([
      itemService.getOneItem(itemId),
      commentService.getAllComments(itemId),
      likeService.getItemLikes(itemId, userId),
    ])
      .then(([itemData, commentsData, likesData]) => {
        setItem({ ...itemData, comments: commentsData, likes: likesData });
      })
      .catch((error) => {
        console.log(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  const onClickLikes = async (itemId) => {
    const likes = await likeService.likeClicked(itemId);
    setItem((state) => ({
      ...state,
      likes: [...state.likes, { ...likes }],
    }));
  };

  const onClickDislike = async (itemId) => {
    await likeService.dislikeClicked(itemId);
    setItem((state) => ({
      ...state,
      likes: state.likes.filter((like) => like._id !== itemId),
    }));
  };

  const onCreateComment = async (commentData, token) => {
    try {
      const comments = await commentsService(token).createComment(
        itemId,
        commentData
      );
      setItem((state) => ({
        ...state,
        comments: [
          ...state.comments,
          { ...comments, owner: { firstName, lastName } },
        ],
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const onEditComment = async (comment, editedComment, gender) => {
    const date = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const commentData = {
      comments: editedComment,
      date: formattedDate,
      gender,
    };
    try {
      const result = await commentService.editComment(comment._id, {
        ...comment,
        comments: commentData,
      });

      setItem((state) => ({
        ...state,
        comments: state.comments.map((c) =>
          c._id === result._id ? (c.comments = result) : c
        ),
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeComment = async (id) => {
    try {
      await commentService.deleteComment(id);
      setItem((state) => ({
        ...state,
        comments: state.comments.filter((c) => c._id !== id),
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const myLikes = async (userId) => {
    const result = await likeService.getMyLikes(userId);
    return result
  };

  const isOwner = userId === item._ownerId;

  return {
    item,
    isAuthenticated,
    isOwner,
    token,
    removeComment,
    onCreateComment,
    onEditComment,
    onClickLikes,
    onClickDislike,
    myLikes,
    userId,
  };
};
