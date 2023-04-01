import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";
import { useTokenService } from "./useTokenService";
import { itemServiceFactory } from "../services/itemService";

export const useItem = (itemId) => {
  const navigate = useNavigate();
  const { isAuthenticated, userId, token } = useAuthContext();
  const [item, setItem] = useState({});
  const itemService = useTokenService(itemServiceFactory);
  useEffect(() => {
    itemService.getOneItem(itemId).then((result) => {
      setItem(result);
    });
  }, [itemId]);

  const isOwner = userId === item._ownerId;

  const onRemoveItem = async () => {
    await itemService.deleteItem(itemId);
    navigate("/catalogue");
  };

  return { item, isAuthenticated, isOwner, token, onRemoveItem };
};
