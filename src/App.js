import React, { useState, useEffect } from "react";
import LandPage from "./Components/LandPage/LandPage";
import LoginForm from "./Components/LoginForm/Login";
import style from "./App.module.css";
import {
  Teacher,
  Teacher1,
  Teacher2,
  Teacher3,
  Teacher4,
  Teacher5,
  Teacher_pupil,
  Microphone,
  Study,
  Logo,
  Smile,
} from "./Components/UI/constants";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";

// import images

const phase2 = [
  {
    id: "1",
    images: Teacher,
  },
  {
    id: "2",
    images: Teacher4,
  },
  {
    id: "3",
    images: Study,
  },
  {
    id: "4",
    images: Smile,
  },
];

const phase3 = [
  {
    id: "1",
    images: Teacher3,
  },
  {
    id: "2",
    images: Teacher1,
  },
  {
    id: "3",
    images: Teacher_pupil,
  },
  {
    id: "4",
    images: Teacher5,
  },
  {
    id: "5",
    images: Teacher2,
  },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
    console.log(email, password);
  };

  return (
    <>
      <div className={style.all}>
        <RegistrationForm />
        {/* {!isLoggedIn && <LoginForm onLoggin={loginHandler} />}
        {isLoggedIn && (
          <LandPage
            phase1={Microphone}
            phase2={phase2}
            phase3={phase3}
            footerLogo={Logo}
          />
        )} */}
      </div>
    </>
  );
}

export default App;
