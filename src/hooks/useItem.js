import { useEffect, useState } from "react";

import { useAuthContext } from "../context/AuthContext";
import { useTokenService } from "./useTokenService";
import { itemServiceFactory } from "../services/itemService";

export const useItem = (itemId) => {

  const [item, setItem] = useState({});

  const { isAuthenticated, userId, token } = useAuthContext();

  const itemService = useTokenService(itemServiceFactory);
    
    useEffect(() => {
      itemService
      .getOneItem(itemId)
      .then((result) => {
        setItem(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }, [itemId]);
    
 
  const isOwner = userId === item._ownerId;



  return { item, isAuthenticated, isOwner, token };
};
