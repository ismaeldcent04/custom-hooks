import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

  const reset = () => {
    setformState(initialForm);
  };

  return {
    formState,
    onInputChange,
    reset,
  };
};
