import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler, token) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    const currentDate = new Date();
    const formattedDate = currentDate
      .toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
      .split(", ")
      .join(" ");

    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
      createOn: formattedDate,
    }));
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
