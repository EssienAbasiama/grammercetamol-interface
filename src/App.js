import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";
import LandPage from "./Components/LandPage/LandPage";
import LoginForm from "./Components/LoginForm/Login";
import RegistrationForm from "./Components/Registration/Registration";

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
import style from "./App.module.css";

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
  useEffect(() => {
    const storedUserLoggedInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInformation === "1") {
    } else {
    }
  }, []);

  return (
    <div className={style.all}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LandPage
                phase1={Microphone}
                phase2={phase2}
                phase3={phase3}
                footerLogo={Logo}
              />
            }
          />
          <Route exact path="/register" element={<RegistrationForm />} />
          <Route exact path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
