import { useState } from "react";

export const useForm = (
  initialValues,
  onSubmitHandler,
  token,
  postedBy,
  gender
) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    if (postedBy && gender) {
      return setValues((state) => ({
        ...state,
        [e.target.name]: e.target.value,
        postedBy,
        gender,
      }));
    }
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
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
