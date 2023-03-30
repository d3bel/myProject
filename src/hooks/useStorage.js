import { useState } from "react";

export const useStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const serializedPersist = localStorage.getItem(key);
    if (serializedPersist) {
      const persistState = JSON.parse(serializedPersist);
      return persistState;
    }
    return initialValue;
  });

  const storageState = (value) => {
    setState(value);
    if (typeof value === "function") {
      const result = value();
      return localStorage.setItem(key, JSON.stringify(result));
    }
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [state, storageState];
};
