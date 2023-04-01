import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";

import LandPage from "./pages/land-page/LandPage";
import LoginForm from "./pages/LoginForm/Login";
import RegistrationForm from "./pages/Registration/Registration";
import Contacts from "./pages/contact-page/Contacts";
import CoursesPage from "./pages/courses-page/CoursePage";
import AboutUsPage from "./pages/about-us/About-Us_Page";
import RootLayout from "./pages/Root";

import style from "./App.module.css";
import Error from "./pages/errors/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <LandPage /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/courses", element: <CoursesPage /> },
    ],
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

function App() {
  useEffect(() => {
    const storedUserLoggedInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInformation === "1") {
    } else {
    }
  }, []);

  return (
    <div className={style.all}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
