import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

import LandPage from "./Components/LandPage/LandPage";
import LoginForm from "./Components/LoginForm/Login";
import RegistrationForm from "./Components/Registration/Registration";

import style from "./App.module.css";

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
          <Route exact path="/" element={<LandPage />} />
          <Route exact path="/register" element={<RegistrationForm />} />
          <Route exact path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
