import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler, token) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (token) {
      return onSubmitHandler(values, token);
    }
    onSubmitHandler(values);
  };
  return { values, changeHandler, onSubmit };
};
