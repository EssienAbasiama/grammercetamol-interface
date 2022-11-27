import React, { useState, useRef } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const usernameuseRef = useRef();
  const passworduseRef = useRef();

  const [isValid, setIsValid] = useState(true);

  const onChangeUsername = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const username = usernameuseRef.current.value;
    const password = passworduseRef.current.value;

    if (username.trim().length === 0 || password.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    usernameuseRef.current.value = "";
    passworduseRef.current.value = "";
  };

  return (
    <>
      <div className={`${styles.LoginForm}`}>
        <div className={`${styles.LoginFormBody}`}>
          <form onSubmit={submitHandler}>
            <div
              className={`${styles.username_password} ${
                !isValid && styles.inValid
              }`}
            >
              <div className="username">
                <label>username</label>
                <input
                  type="text"
                  ref={usernameuseRef}
                  onChange={onChangeUsername}
                />
              </div>
              <div className="password">
                <label>password</label>
                <input type="password" ref={passworduseRef} />
              </div>
            </div>
            <div className="submitButton">
              <button type="submit">Login</button>
            </div>
          </form>
          <p>
            Don't have an account? <button>Signup</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
