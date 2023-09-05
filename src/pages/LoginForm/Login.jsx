import { useRef, useState } from "react";
import { Link, NavLink, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { sendRequest, useInput } from "../../hooks/custome-hooks";
import { authActions } from "../../store/auth";
import { Input } from "../../Components/UI/Input/Input";
import { Logo } from "../../Components/UI/constants";

import Form from "../../Components/UI/Form/Form";
import Button from "../../Components/UI/Button/Button";

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
          url: "http://localhost:8023/api/auth/login",
          method: process.env.React_App_Request_PMethod,
          headers: { "Content-Type": "application/json" },
          body: {
            email: username,
            password: password,
          },
        });
        dispatch(
          authActions.loggin({
            jwt: data.token,
            email: data.email,
            refreshtoken: data.refreshToken,
            roles: data.roles,
          })
        );

        console.log("This is data: ", data);

        usernameReset();
        passwordReset();
        redirect("/");
        // navigate(process.env.React_App_Home);
      } catch (err) {
        console.error(err.message);
        setError(true);
      }
    }
    console.log("what is this");
  };

  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <div className={styles.form}>
          <div className={styles.form_}>
            <Link to={process.env.React_App_Home}>
              <img src={Logo} alt="" className={styles.logo} />
            </Link>
            <div>
              <p>SignIn</p>
              <p>SignIn to Continue Your Application</p>
            </div>
            <h3 className={styles.h3}>SignIn</h3>
            <h4 className={styles.h4}>SignIn to Continue Your Application</h4>
            {Error && <p>Username or password incorrect!</p>}
            <Form submit={submitHandler}>
              <Input
                ref={emailInputRef}
                id="email"
                name="mail"
                label="E-mail"
                type="text"
                value={username}
                onBlur={usernameBlurHandler}
                onChange={usernameChangeHandler}
                icon="fa-solid fa-envelope"
              />
              <Input
                ref={passwordInputRef}
                id="password"
                name="pw"
                label="Password"
                type="password"
                value={password}
                onChange={passwordChangeHandler}
                icon="fa-solid fa-lock"
              />
              <div id={styles.btn}>
                <Button type="submit" className={styles.btn}>
                  Login
                </Button>
              </div>
            </Form>
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
