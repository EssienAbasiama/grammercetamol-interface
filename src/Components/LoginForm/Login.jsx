import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { sendRequest, useInput } from "../../hooks/custome-hooks";
import { authActions } from "../../store/auth";
import { Input } from "../UI/Input/Input";
import { Logo } from "../UI/constants";

import Button from "../UI/Button/Button";

import styles from "./Login.module.css";

const Login = () => {
  const [Error, setError] = useState(false);
  const navigate = useNavigate();
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
          method: process.env.React_App_Request_PMethod,
          headers: { "Content-Type": "application/json" },
          body: {
            username: username,
            password: password,
          },
        });
        dispatch(
          authActions.loggin({
            jwt: data.token,
            firstname: data.token,
          })
        );

        console.log(data.token);

        usernameReset();
        passwordReset();
        navigate(process.env.React_App_Home);
      } catch (err) {
        console.error(err.message);
        setError(true);
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <div className={styles.form}>
          <div className={styles.form_}>
            <img src={Logo} alt="" className={styles.logo} />
            <h3 className={styles.h3}>Registration Form</h3>
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
              <div id={styles.btn}>
                <Button type="submit" className={styles.btn}>
                  Login
                </Button>
              </div>
            </form>
            <p>Don't have an Account? </p>
            <NavLink to={process.env.React_App_Register} id={styles.btn}>
              Sign Up
            </NavLink>
          </div>
        </div>
        <div className={styles.form__}></div>
      </div>
    </section>
  );
};

export default Login;
