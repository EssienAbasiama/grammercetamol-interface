import { useState, useReducer, useEffect } from "react";
import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import styles from "./RegistrationForm.module.css";

const reducer = (state, action) => {
  if (action.type === "firstname") {
    return {
      ...state,
      firstname: action.payload,
    };
  } else if (action.type === "lastname") {
    return {
      ...state,
      lastname: action.payload,
    };
  } else if (action.type === "othername") {
    return {
      ...state,
      othername: action.payload,
    };
  } else if (action.type === "email") {
    return {
      ...state,
      email: action.payload,
      emailValid: action.payload.includes("@"),
    };
  } else if (action.type === "username") {
    return {
      ...state,
      username: action.payload,
    };
  } else if (action.type === "password") {
    return {
      ...state,
      password: action.payload,
      passwordValid: action.payload.length > 6,
    };
  } else if (action.type === "dob") {
    return {
      ...state,
      dob: action.payload,
    };
  }

  if (action.type === "bluremail") {
    return {
      ...state,
      emailValid: state.email.includes("@"),
    };
  } else if (action.type === "blurpassword") {
    return {
      ...state,
      passwordValid: state.password.length > 6,
    };
  }
};

const initials = {
  firstname: "",
  lastname: "",
  othername: "",
  email: "",
  username: "",
  password: "",
  dob: "",
  emailValid: null,
  passwordValid: null,
};

const RegistrationForm = (props) => {
  const [formValidity, setFormValidity] = useState(false);

  const [state, dispatch] = useReducer(reducer, initials);

  const {
    firstname,
    lastname,
    othername,
    email,
    username,
    password,
    dob,
    emailValid,
    passwordValid,
  } = state;

  useEffect(() => {
    const time = setTimeout(() => {
      setFormValidity(emailValid && passwordValid);
    }, 500);
    return () => {
      clearTimeout(time);
    };
  }, [emailValid, passwordValid]);

  const validate = (event) => {
    dispatch({ type: `blur${event.target.name}` });
  };

  const changeHandler = (event) => {
    dispatch({
      type: event.target.name,
      payload: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formValidity) {
      console.log("This is the value", state);
    } else if (!emailValid) {
      console.log("email is not valid");
    } else {
      console.log("password is not valid");
    }
    // props.onLogin()
  };

  return (
    <>
      <div className={styles.RegistrationFormBody}>
        <div className={styles.RegistrationBody}>
          <h3 className={styles.RegistrationFormBodyHeader}>
            Registration Form
          </h3>
          <form
            onSubmit={(event) => {
              submitHandler(event);
            }}
          >
            <Input
              id="firstname"
              name="firstname"
              label="Firstname"
              type="text"
              value={firstname}
              onChange={changeHandler}
            />
            <Input
              id="lastname"
              name="lastname"
              label="Lastname"
              type="text"
              value={lastname}
              onChange={changeHandler}
            />
            <Input
              id="othername"
              name="othername"
              label="Othername"
              type="text"
              value={othername}
              onChange={changeHandler}
            />
            <Input
              id="e-mail"
              name="email"
              label="E-mail"
              type="email"
              value={email}
              onBlur={validate}
              onChange={changeHandler}
            />
            <Input
              id="username"
              name="username"
              label="username"
              type="text"
              value={username}
              onChange={changeHandler}
            />
            <Input
              id="Password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onBlur={validate}
              onChange={changeHandler}
            />
            <Input
              id="dob"
              name="dob"
              label="Data of Birth"
              type="date"
              value={dob}
              onChange={changeHandler}
            />
            <Button type="submit" className={styles.submitButton}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
