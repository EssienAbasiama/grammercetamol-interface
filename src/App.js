import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import RootLayout from "./public/pages/Root";
import Error from "./public/pages/errors/ErrorPage";

import store from "./store/store";

import style from "./App.module.css";

const LandPage = lazy(() => import("./public/pages/land-page/LandPage"));
const Contacts = lazy(() => import("./public/pages/contact-page/Contacts"));
const AboutUsPage = lazy(() => import("./public/pages/about-us/About-Us_Page"));
const CoursePage = lazy(() => import("./public/pages/courses-page/CoursePage"));
const LoginPage = lazy(() => import("./public/pages/LoginForm/LoginPage"));

const Register = lazy(() => import("./public/pages/Registration/Registration"));
const DetailsPage = lazy(() =>
  import("./public/pages/DetailCourse/DetailCoursePage")
);
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
            // loader: loadCourses,
            loader: () =>
              import("./public/pages/courses-page/CoursePage").then((module) =>
                module.loader()
              ),
            children: [
              { index: true, element: <CoursePage /> },
              { path: ":courseId", element: <DetailsPage /> },
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
        element: <Register />,
        action: (meta) =>
          import("./public/pages/Registration/Registration").then((module) =>
            module.action(meta)
          ),
      },
      {
        path: "/login",
        id: "login",
        element: <LoginPage />,
        action: (meta) =>
          import("./public/pages/LoginForm/Login2").then((module) =>
            module.action(meta)
          ),
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
