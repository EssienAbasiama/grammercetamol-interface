import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    email: null,
    password: null,
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormValid(
        loginInfo.email.includes("@") && loginInfo.password.trim().length > 7
      );
    }, 9000);
    return () => {
      clearTimeout(identifier);
    };
  }, [loginInfo.email, loginInfo.password, formValid]);

  const onChangeHander = (setLoginInfo, newKey) => {
    setLoginInfo((preState) => ({
      ...preState,
      ...newKey,
    }));
  };

  const validate = (setState, conditions) => {
    setState((preState) => ({
      ...preState,
      ...conditions,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLoggin(loginInfo.email, loginInfo.password);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            valid.email === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={loginInfo.email}
            onChange={(event) => {
              onChangeHander(setLoginInfo, { email: event.target.value });
            }}
            onBlur={() => {
              validate(setValid, {
                email: loginInfo.email.includes("@"),
              });
            }}
          />
        </div>
        <div
          className={`${styles.control} ${
            valid.password === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={loginInfo.password}
            onChange={(event) => {
              onChangeHander(setLoginInfo, { password: event.target.value });
            }}
            onBlur={() => {
              validate(setValid, {
                password: loginInfo.password.trim().length > 7,
              });
            }}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
