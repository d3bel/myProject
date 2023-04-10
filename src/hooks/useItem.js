import { useEffect, useState } from "react";

import { useAuthContext } from "../context/AuthContext";
import { useTokenService } from "./useTokenService";
import { itemServiceFactory } from "../services/itemService";
import { commentsService } from "../services/commentsService";

export const useItem = (itemId) => {
  const [item, setItem] = useState({});

  const { isAuthenticated, userId, token, firstName, lastName } =
    useAuthContext();

  const itemService = useTokenService(itemServiceFactory);
  const commentService = useTokenService(commentsService);

  useEffect(() => {
    Promise.all([
      itemService.getOneItem(itemId),
      commentService.getAllComments(itemId),
    ])
      .then(([itemData, commentsData]) => {
        setItem({ ...itemData, comments: commentsData });
      })
      .catch((error) => {
        console.log(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

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

  const isOwner = userId === item._ownerId;

  return {
    item,
    isAuthenticated,
    isOwner,
    token,
    removeComment,
    onCreateComment,
    onEditComment,
    userId,
  };
};
