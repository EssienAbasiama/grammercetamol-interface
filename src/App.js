import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandPage from "./pages/land-page/LandPage";
import { action as loginAction } from "./pages/LoginForm/Login2";
import RegistrationForm, {
  action as registerAction,
} from "./pages/Registration/Registration";
import Contacts from "./pages/contact-page/Contacts";
import CoursesPage from "./pages/courses-page/CoursePage";
import AboutUsPage from "./pages/about-us/About-Us_Page";
import RootLayout from "./pages/Root";

import style from "./App.module.css";
import Error from "./pages/errors/ErrorPage";
import { Provider } from "react-redux";
import store from "./store/store";
import LoginPage from "./pages/LoginForm/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <LandPage /> },
          { path: "contacts", element: <Contacts /> },
          { path: "about-us", element: <AboutUsPage /> },
          { path: "courses", element: <CoursesPage /> },
        ],
      },
      {
        path: "/register",
        element: <RegistrationForm />,
        action: registerAction,
      },
      {
        path: "/login",
        id: "login",
        element: <LoginPage />,
        action: loginAction,
      },

      {
        path: "/administration",
      },
    ],
  },
]);

function App() {
  return (
    <div className={style.all}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
