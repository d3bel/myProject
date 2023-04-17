import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { itemServiceFactory } from "../services/itemService";
import { useTokenService } from "../hooks/useTokenService";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState(null);

  const service = itemServiceFactory();

  const itemService = useTokenService(itemServiceFactory);

  useEffect(() => {
    service
      .getAllItems()
      .then((result) => {
        setItems(result);
      })
      .catch(() => console.log("No Content"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (errors) {
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    }
  });

  const onAddItemSubmit = async (itemData) => {
    if (!itemData.series) {
      return setErrors("Series field is required!");
    }
    if (!itemData.country) {
      return setErrors("Country field is required!");
    }
    if (!itemData.themes) {
      return setErrors("Title field is required!");
    }
    if (!itemData.imageUrl) {
      return setErrors("Image URL field is required!");
    }
    if (!itemData.format) {
      return setErrors("Selecting category is required!");
    }
    try {
      const newItem = await itemService.create(itemData);
      setItems((state) => (state ? [...state, newItem] : [newItem]));
      navigate("/catalogue");
    } catch (error) {
      console.log(error.message);
    }
  };

  const onEditItemSubmit = async (itemData, token) => {
    if (!itemData.series) {
      return setErrors("Series field is required!");
    }
    if (!itemData.country) {
      return setErrors("Country field is required!");
    }
    if (!itemData.themes) {
      return setErrors("Title field is required!");
    }
    if (!itemData.imageUrl) {
      return setErrors("Image URL field is required!");
    }
    if (!itemData.format) {
      return setErrors("Selecting category is required!");
    }
    try {
      const editedItem = await itemServiceFactory(token).editItem(
        itemData._id,
        itemData
      );
      setItems((state) =>
        state.map((item) => (item._id === itemData._id ? editedItem : item))
      );

      return navigate(`/catalogue/${itemData._id}`);
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
    return items.find((item) => item?._id === itemId);
  };



  const contextData = {
    onAddItemSubmit,
    onEditItemSubmit,
    onRemoveItem,
    getItem,
    items,
    errors,
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
