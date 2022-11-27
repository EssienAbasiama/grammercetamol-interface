import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    othername: "",
    username: "",
    password: "",
    dob: "",
  });

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
  };

  return (
    <>
      <div className="RegistrationFormBody">
        <div className="RegistrationBody">
          <h3 className="RegistrationFormBodyHeader">Registration Form</h3>
          <form
            onSubmit={(event) => {
              submitHandler(event);
            }}
          >
            <div>
              <div className="RegistrationLabels">
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
              <div className="RegistrationLabels">
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
              <div className="RegistrationLabels">
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
              <div className="RegistrationLabels">
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
              <div className="RegistrationLabels">
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
              <div className="RegistrationLabels">
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
            <div className="submitButton">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
