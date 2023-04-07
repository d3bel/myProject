import { useEffect, useState } from "react";

import { useAuthContext } from "../context/AuthContext";
import { useTokenService } from "./useTokenService";
import { itemServiceFactory } from "../services/itemService";
import * as commentsService from "../services/commentsService";

export const useItem = ({ itemId }) => {
  const [item, setItem] = useState({});

  const { isAuthenticated, userId, token, firstName, lastName } =
    useAuthContext();

  const itemService = useTokenService(itemServiceFactory);

  useEffect(() => {
    Promise.all([
      itemService.getOneItem(itemId),
      commentsService.getAllComments(itemId),
    ])
      .then(([itemData, commentsData]) => {
        setItem({ ...itemData, comments: commentsData });
      })
      .catch((error) => {
        console.log(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  const onCreateComment = (comment) => {
    setItem((state) => ({
      ...state,
      comments: [
        ...state.comments,
        { ...comment, owner: { firstName, lastName } },
      ],
    }));
  };

  const onEditComment = async (comment, editedComment) => {
    const date = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const commentData = {
      comments: editedComment,
      date: formattedDate,
    };
    const result = await commentsService.editComment(token, comment._id, {
      ...comment,
      comments: commentData,
    });

    setItem((state) => ({
      ...state,
      comments: state.comments.map((c) =>
        c._id === result._id ? (c.comments = result) : c
      ),
    }));
  };

  const removeComment = async (id) => {
    await commentsService.deleteComment(token, id);
    setItem((state) => ({
      ...state,
      comments: state.comments.filter((c) => c._id !== id),
    }));
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
