import { useState } from "react";

export const useForm = (
  initialValues,
  onSubmitHandler,
  token,
  date,
  ownerName
) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    if (date) {
      return setValues((state) => ({
        ...state,
        [e.target.name]: e.target.value,
        createOn: date,
        ownerName,
      }));
    }

    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (token) {
      return onSubmitHandler(values, token);
    }
    onSubmitHandler(values);
    setValues(initialValues);
  };

  return { values, changeHandler, onSubmit };
};
