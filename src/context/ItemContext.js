import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { itemServiceFactory } from "../services/itemService";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const service = itemServiceFactory();

  useEffect(() => {
    service
      .getAllItems()
      .then((result) => {
        setItems(result);
      })
      .catch(() => console.log("No Content"));
  }, []);

  const onAddItemSubmit = async (itemData, token) => {
    const newItem = await itemServiceFactory(token).create(itemData);
    // console.log(itemData);
    setItems((state) => [...state, newItem]);
    navigate("/catalogue");
  };

  const onEditItemSubmit = async (itemData, token) => {
    try {
      const itemId = itemData._id;
      const editedItem = await itemServiceFactory(token).editItem(itemId, itemData);

      setItems((items) =>
        items.map((item) => (item._id === itemId ? editedItem : item))
      );

      navigate(`/catalogue/edit/${itemData._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const onDetailSubmit = (itemData) => {
    // console.log(itemData);
  };
  const contextData = {
    onAddItemSubmit,
    onEditItemSubmit,
    onDetailSubmit,
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
