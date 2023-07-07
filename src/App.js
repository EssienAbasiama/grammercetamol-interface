import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import LandPage from "./public/pages/land-page/LandPage";
import RegistrationForm, {
  action as registerAction,
} from "./public/pages/Registration/Registration";
import Contacts from "./public/pages/contact-page/Contacts";
import CoursesPage, {
  loader as loadCourses,
} from "./public/pages/courses-page/CoursePage";
import AboutUsPage from "./public/pages/about-us/About-Us_Page";
import RootLayout from "./public/pages/Root";
import Error from "./public/pages/errors/ErrorPage";
import LoginPage from "./public/pages/LoginForm/LoginPage";
import WatchVideo from "./public/Components/Template/Courses/Videos/WatchVideo";
import Uploads from "./admin/pages/Uploads";

import store from "./store/store";

import { action as loginAction } from "./public/pages/LoginForm/Login2";
import style from "./App.module.css";

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
          {
            path: "courses",
            id: "loadcourses",
            loader: loadCourses,
            children: [
              { index: true, element: <CoursesPage /> },

              { path: "my-course/:courseId" },
              // { path: "watch/:courseId", element: <WatchVideo /> },
              {},
              {},
              {},
            ],
          },
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
        path: "/upload",
        element: <Uploads />,
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
