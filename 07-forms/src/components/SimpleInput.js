import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: inputName,
    valueIsValid: nameIsValid,
    hasError: nameIsInvalid,
    changeValueHandler: changeNameInputHandler,
    blurInputHandler: blurNameHandler,
    reset: resetNameInput
  } = useInput((text) => {
    return text.trim() !== "";
  });

  const {
    value: inputEmail,
    valueIsValid: emailIsValid,
    hasError: emailIsInvalid,
    changeValueHandler: changeEmailInputHandler,
    blurInputHandler: blurEmailHandler,
    reset: resetEmailInput
  } = useInput((text) => {
    return text.includes('@');
  });

  const nameClass = nameIsInvalid ? "form-control invalid" : "form-control";
  const emailClass = emailIsInvalid ? "form-control invalid" : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid && !emailIsValid) return;
    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={changeNameInputHandler}
          onBlur={blurNameHandler}
          value={inputName}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailClass}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={changeEmailInputHandler}
          onBlur={blurEmailHandler}
          value={inputEmail}
        />
        {emailIsInvalid && <p className="error-text">Enter a valid e-mail</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
