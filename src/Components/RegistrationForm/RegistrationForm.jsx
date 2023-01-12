import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = (props) => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    othername: "",
    username: "",
    password: "",
    dob: "",
  });

  // useState({
  //   firstname: null,
  //   lastname: null,
  //   othername: null,
  //   username: null,
  //   password: null,
  // });

  const changeHandler = (setDetails, newKey) => {
    setDetails((preState) => {
      return {
        ...preState,
        ...newKey,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("This is an object ", details);
    setDetails({
      firstname: "",
      lastname: "",
      othername: "",
      username: "",
      password: "",
      dob: "",
    });

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
            <div>
              <div className={styles.RegistrationLabels}>
                <label>Firstname</label>
                <input
                  required={true}
                  type="text"
                  value={details.firstname}
                  onChange={(event) => {
                    changeHandler(setDetails, {
                      firstname: event.target.value,
                    });
                  }}
                />
              </div>
              <div className={styles.RegistrationLabels}>
                <label>Lastname</label>
                <input
                  required={true}
                  type="text"
                  value={details.lastname}
                  onChange={(event) => {
                    setDetails((preState) => ({
                      ...preState,
                      lastname: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className={styles.RegistrationLabels}>
                <label>Othername</label>
                <input
                  required={true}
                  type="text"
                  value={details.othername}
                  onChange={(event) => {
                    changeHandler(setDetails, {
                      othername: event.target.value,
                    });
                  }}
                />
              </div>
              <div className={styles.RegistrationLabels}>
                <label>Username</label>
                <input
                  required={true}
                  type="text"
                  value={details.username}
                  onChange={(event) => {
                    changeHandler(setDetails, {
                      username: event.target.value,
                    });
                  }}
                />
              </div>
              <div className={styles.RegistrationLabels}>
                <label>Password</label>
                <input
                  required={true}
                  type="password"
                  value={details.password}
                  onChange={(event) => {
                    changeHandler(setDetails, {
                      password: event.target.value,
                    });
                  }}
                />
              </div>
              <div className={styles.RegistrationLabels}>
                <label>Date_of_Birth</label>
                <input
                  required={true}
                  type="date"
                  value={details.dob}
                  onChange={(event) => {
                    changeHandler(setDetails, {
                      dob: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
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
