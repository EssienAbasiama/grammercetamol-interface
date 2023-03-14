import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

import LandPage from "./pages/land-page/LandPage";
import LoginForm from "./pages/LoginForm/Login";
import RegistrationForm from "./pages/Registration/Registration";

import style from "./App.module.css";
import Contacts from "./pages/contact-page/Contacts";
import CoursesPage from "./pages/courses-page/CoursePage";
import AboutUsPage from "./pages/about-us/About-Us_Page";

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
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/courses" element={<CoursesPage />} />
          <Route exact path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
