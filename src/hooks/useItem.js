import { useEffect, useState } from "react";

import { useAuthContext } from "../context/AuthContext";
import { useTokenService } from "./useTokenService";
import { itemServiceFactory } from "../services/itemService";
import * as commentsService from "../services/commentsService";

export const useItem = ({ itemId }) => {
  const [item, setItem] = useState({});

  const { isAuthenticated, userId, token } = useAuthContext();

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
  }, [itemId]);

  const onCreateComment = (comment) => {
    setItem((state) => ({ ...state, comments: [...state.comments, comment] }));
  };

  const isOwner = userId === item._ownerId;

  return { item, isAuthenticated, isOwner, token, onCreateComment };
};
