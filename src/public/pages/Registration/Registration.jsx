import { useState, useEffect } from "react";
import {
  Form,
  Link,
  NavLink,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";

import { useInput } from "../../hooks/custome-hooks";
import Button from "../../Components/UI/Button/Button";
import { Logo } from "../../Components/UI/constants";
import { Input } from "../../Components/UI/Input/Input";

import styles from "./register.module.css";

const notEmpty = (evt) => evt.trim() !== "";
const pass = (evt) => evt.trim() !== "" && evt.length > 6;

const Registration = () => {
  const error = useActionData();
  const navigate = useNavigation();
  const [formValidity, setFormValidity] = useState(false);

  const isSubmitting = navigate.state === "submitting";

  const {
    value: firstname,
    isValid: firstnameIsValid,
    hasError: firstnameHasError,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
  } = useInput(notEmpty);

  const {
    value: lastname,
    isValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
  } = useInput(notEmpty);

  const {
    value: othername,
    isValid: othernameIsValid,
    hasError: othernameHasError,
    valueChangeHandler: othernameChangeHandler,
    inputBlurHandler: othernameBlurHandler,
  } = useInput(notEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(notEmpty);
  const {
    value: number,
    isValid: numberIsValid,
    hasError: numberHasError,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
  } = useInput(notEmpty);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(pass);

  const valid =
    firstnameIsValid &&
    lastnameIsValid &&
    othernameIsValid &&
    emailIsValid &&
    numberIsValid &&
    passwordIsValid;

  useEffect(() => {
    setFormValidity(valid);
  }, [valid]);

  const able = isSubmitting || !formValidity;

  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <div className={styles.form}>
          <div className={styles.form_}>
            <Link to={process.env.React_App_Home}>
              <img src={Logo} alt="" className={styles.logo} />
            </Link>
            <h3 className={styles.h3}>Registration Form</h3>
            <Form method="post">
              {error && <p>{error.message}</p>}
              <Input
                id="firstname"
                name="firstname"
                label="Firstname"
                type="text"
                value={firstname}
                onBlur={firstnameBlurHandler}
                onChange={firstnameChangeHandler}
                hasError={firstnameHasError}
                message="space cannot be empty"
                icon="fa-solid fa-user"
                required
              />
              <Input
                id="lastname"
                name="lastname"
                label="Lastname"
                type="text"
                value={lastname}
                onBlur={lastnameBlurHandler}
                onChange={lastnameChangeHandler}
                hasError={lastnameHasError}
                message="space cannot be empty"
                icon="fa-solid fa-user"
                required
              />
              <Input
                id="othername"
                name="othername"
                label="Othername"
                type="text"
                value={othername}
                onBlur={othernameBlurHandler}
                onChange={othernameChangeHandler}
                hasError={othernameHasError}
                message="space cannot be empty"
                icon="fa-solid fa-user"
                required
              />
              <Input
                id="e-mail"
                name="email"
                label="E-mail"
                type="email"
                value={email}
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
                hasError={emailHasError}
                message="space cannot be empty"
                icon="fa-solid fa-envelope"
                required
              />
              <Input
                id="phonenumber"
                name="number"
                label="phonenubmer"
                type="text"
                value={number}
                onBlur={numberBlurHandler}
                onChange={numberChangeHandler}
                hasError={numberHasError}
                message="space cannot be empty"
                icon="fa-solid fa-phone"
                required
              />
              <Input
                id="Password"
                name="password"
                label="Password"
                type="password"
                value={password}
                onBlur={passwordBlurHandler}
                onChange={passwordChangeHandler}
                hasError={passwordHasError}
                message="your password must be longer than 6 digits"
                icon="fa-solid fa-lock"
                required
              />
              <div id={styles.btn}>
                <Button type="submit" className={styles.btn} disabled={able}>
                  Submit
                </Button>
              </div>
            </Form>
            <p>Already have an account?</p>
            <NavLink to={process.env.React_App_Login} id={styles.btn}>
              Login
            </NavLink>
          </div>
        </div>
        <div className={styles.form__}></div>
      </div>
    </section>
  );
};
export default Registration;

export async function action({ request, params }) {
  const data = await request.formData();

  if (
    data.get("firstname") === "" ||
    data.get("lastname") === "" ||
    data.get("othername") === "" ||
    data.get("email") === "" ||
    data.get("number") === "" ||
    data.get("password") === ""
  ) {
    return json({ message: "one of the input space is empty" });
  }
  const eventData = {
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
    othername: data.get("othername"),
    email: data.get("email"),
    phoneNumber: data.get("number"),
    password: data.get("password"),
    role: "STUDENT",
  };
  const response = await fetch("http://localhost:8023/api/auth/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 401 || 400) {
    const res = await response.json();
    return json({ message: res.message }, { status: 401 });
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." });
  }

  return redirect("/");
}
