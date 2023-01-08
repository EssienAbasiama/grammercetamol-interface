import React, { useState, useEffect } from "react";
import LandPage from "./Components/LandPage/LandPage";
import LoginForm from "./Components/LoginForm/LoginForm";
import NavBar from "./Components/NavBars/NavBars";

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

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <NavBar />
      {!isLoggedIn && <LoginForm onLoggin={loginHandler} />}
      {isLoggedIn && <LandPage />}
    </>
  );
}

export default App;
