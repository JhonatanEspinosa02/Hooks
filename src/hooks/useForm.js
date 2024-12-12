import { useState } from "react";

export const useForm = (inputValue = {}) => {
  const [formState, setFormState] = useState(inputValue);

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(inputValue);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
