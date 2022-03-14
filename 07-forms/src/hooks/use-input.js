import { useState } from "react";

const useInput = (validationLogic) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationLogic(value);
  const hasError = !valueIsValid && isTouched;

  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  const blurInputHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    valueIsValid,
    hasError,
    changeValueHandler,
    blurInputHandler,
    reset
  };
};

export default useInput;
