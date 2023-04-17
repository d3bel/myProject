import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler, isComment) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onSubmitHandler(values);
    if (isComment) setValues(initialValues);
  };

  return { values, changeHandler, onSubmit };
};
