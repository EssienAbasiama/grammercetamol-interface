import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { sendRequest, useInput } from "../../hooks/custome-hooks";
import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import styles from "./RegistrationForm.module.css";

const notEmpty = (evt) => evt.trim() !== "";
const pass = (evt) => evt.trim() !== "" && evt.length > 6;

const Registration = () => {
  const [formValidity, setFormValidity] = useState(false);
  const navigate = useNavigate();

  const {
    value: firstname,
    isValid: firstnameIsValid,
    hasError: firstnameHasError,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: firstnameReset,
  } = useInput(notEmpty);

  const {
    value: lastname,
    isValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: lastnameReset,
  } = useInput(notEmpty);

  const {
    value: othername,
    isValid: othernameIsValid,
    hasError: othernameHasError,
    valueChangeHandler: othernameChangeHandler,
    inputBlurHandler: othernameBlurHandler,
    reset: othernameReset,
  } = useInput(notEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(notEmpty);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput(pass);

  const {
    value: dob,
    isValid: dobIsValid,
    hasError: dobHasError,
    valueChangeHandler: dobChangeHandler,
    reset: dobReset,
  } = useInput(notEmpty);
  const valid =
    firstnameIsValid &&
    lastnameIsValid &&
    othernameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    dobIsValid;
  useEffect(() => {
    const time = setTimeout(() => {
      setFormValidity(valid);
    }, 500);
    return () => {
      clearTimeout(time);
    };
  }, [valid]);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formValidity) {
      try {
        // const response = await sendRequest({});
      } catch (err) {}
    }
    firstnameReset();
    lastnameReset();
    othernameReset();
    emailReset();
    passwordReset();
    dobReset();
    navigate("/login");
  };

  return (
    <>
      <div className={styles.RegistrationFormBody}>
        <div className={styles.RegistrationBody}>
          <h3 className={styles.RegistrationFormBodyHeader}>
            Registration Form
          </h3>
          <form onSubmit={submitHandler}>
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
            />
            <Input
              id="dob"
              name="dob"
              label="Data of Birth"
              type="date"
              value={dob}
              onChange={dobChangeHandler}
              hasError={dobHasError}
              message="date of birth is required"
            />
            <Button type="submit" className={styles.submitButton}>
              Submit
            </Button>
          </form>
        </div>
        <p>Already have an account?</p>
        <NavLink to={process.env.React_App_Login} className={styles.log}>
          Login
        </NavLink>
      </div>
    </>
  );
};

export default Registration;
