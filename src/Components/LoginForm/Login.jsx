import { useRef, useState } from "react";
import { sendRequest, useInput } from "../../hooks/custome-hooks";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auto";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import styles from "./Login.module.css";

const Login = () => {
  const [Error, setError] = useState(false);
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const isNotEmpty = (evt) => evt.trim() !== "";

  const {
    value: username,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: usernameReset,
  } = useInput(isNotEmpty);
  const {
    value: password,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    reset: passwordReset,
  } = useInput(isNotEmpty);

  let formValid = false;
  if (usernameIsValid && passwordIsValid) {
    formValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formValid) {
      try {
        setError(false);
        const data = await sendRequest({
          url: process.env.React_App_Login_Api,
          method: process.env.React_App_Request_Method.post,
          headers: { "Content-Type": "application/json" },
          body: {
            username: username,
            password: password,
          },
        });
        dispatch(
          authActions.loggin({
            jwt: data.token,
          })
        );
        console.log(data.token);
      } catch (err) {
        console.error(err.message);
        setError(true);
      }
    }
    usernameReset();
    passwordReset();
  };
  return (
    <Card className={styles.login}>
      {Error && <p>Username or password incorrect!</p>}
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          name="mail"
          label="E-mail"
          type="text"
          value={username}
          onBlur={usernameBlurHandler}
          onChange={usernameChangeHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          name="pw"
          label="Password"
          type="password"
          value={password}
          onChange={passwordChangeHandler}
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
