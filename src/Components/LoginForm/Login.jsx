import { useReducer, useRef } from "react";
// import { useState, useEffect, useReducer, useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

import styles from "./Login.module.css";

// const emailInitial = { value: "", isValid: null };
// const passwordInitial = { value: "", isValid: null };

const initials = {
  email: "",
  password: "",
};
const reducer = (state, action) => {
  if (action.type === "mail") {
    return {
      ...state,
      email: action.payload,
    };
  } else if (action.type === "pw") {
    return {
      ...state,
      password: action.payload,
    };
  }
};

// Component begins here
const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, initials);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const Changehandler = (event) => {
    dispatch({
      type: event.target.name,
      payload: event.target.value,
    });
  };

  //   dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  // };
  // const passwordChangeHandler = (event) => {
  //   dispatchPassword({ type: "USER_INPUT", value: event.target.value });
  // };

  // const validateEmail = () => {
  //   dispatchEmail({ type: "INPUT_BLUR" });
  // };

  // const validatePassword = () => {
  //   dispatchPassword({ type: "INPUT_BLUR" });
  // };

  const { email, password } = state;

  // const { isValid: passwordIsValid, value: passwordValue } = passwordState;

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormValid(emailIsValid && passwordIsValid);
  //   }, 500);
  //   return () => {
  //     clearTimeout(identifier);
  //   };
  // }, [emailIsValid, passwordIsValid]);

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   if (formValid) {
  //     console.log(emailState, passwordState);
  //     props.onLoggin(emailValue, passwordValue);
  //   } else if (!emailIsValid) {
  //     emailInputRef.current.focus();
  //   } else {
  //     passwordInputRef.current.focus();
  //   }
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          name="mail"
          label="E-mail"
          type="email"
          // isValid={emailIsValid}
          value={email}
          // onBlur={validateEmail}
          onChange={Changehandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          name="pw"
          label="Password"
          type="password"
          // isValid={passwordIsValid}
          value={password}
          // onBlur={validatePassword}
          onChange={Changehandler}
        />
        <div className={styles.btn}>
          <Button type="submit" className={styles.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
