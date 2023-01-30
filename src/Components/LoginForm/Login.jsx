import React, { useState, useEffect, useReducer, useRef } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import styles from "./Login.module.css";

const emailInitial = { value: "", isValid: null };
const passwordInitial = { value: "", isValid: null };

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: null };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.length > 7 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.length > 7 };
  }
  return { value: "", isValid: null };
};
//
// Component begins here
const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, emailInitial);
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    passwordInitial
  );

  const [formValid, setFormValid] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmail = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePassword = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const { isValid: emailIsValid, value: emailValue } = emailState;
  const { isValid: passwordIsValid, value: passwordValue } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (formValid) {
      props.onLoggin(emailValue, passwordValue);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };
  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailValue}
          onBlur={validateEmail}
          onChange={emailChangeHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordValue}
          onBlur={validatePassword}
          onChange={passwordChangeHandler}
        />
        <div className={styles.btn}>
          <Button type="submit" className={styles.btn} disabled={!formValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
