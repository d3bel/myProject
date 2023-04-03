import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { itemServiceFactory } from "../services/itemService";
import { useTokenService } from "../hooks/useTokenService";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const service = itemServiceFactory();

  const itemService = useTokenService(itemServiceFactory);

  const onAddItemSubmit = async (itemData, token) => {
    try {
      const newItem = await itemServiceFactory(token).create(itemData);
      setItems((state) => (state ? [...state, newItem] : [newItem]));
      navigate("/catalogue");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  useEffect(() => {
    service
      .getAllItems()
      .then((result) => {
        setItems(result);
      })
      .catch(() => console.log("No Content"));
  }, []);

  const onEditItemSubmit = async (id, itemData, token) => {
    try {
      const editedItem = await itemServiceFactory(token).editItem(id, itemData);
      setItems((items) =>
        items.map((item) => (item._id === id ? editedItem : item))
      );

      navigate(`/catalogue/${itemData._id}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  const onRemoveItem = async (itemId) => {
    try {
      await itemService.deleteItem(itemId);
      setItems((items) => items.filter((item) => item._id !== itemId));
      navigate("/catalogue");
    } catch (error) {
      console.log(error.message);
    }
  };

  const getItem = (itemId) => {
    return items.find((item) => item._id === itemId);
  };

  const contextData = {
    onAddItemSubmit,
    onEditItemSubmit,
    onRemoveItem,
    getItem,
    items,
  };
  return (
    <>
      <ItemContext.Provider value={contextData}>
        {children}
      </ItemContext.Provider>
    </>
  );
};
export const useItemContext = () => {
  const context = useContext(ItemContext);

  return context;
};
