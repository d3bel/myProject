import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler, token, postedBy) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
      postedBy,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    token
      ? onSubmitHandler(values, token) && setValues(initialValues)
      : onSubmitHandler(values) && setValues(initialValues);
  };

  return { values, changeHandler, onSubmit };
};
