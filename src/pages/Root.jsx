import { Outlet } from "react-router-dom";
import Footer from "../Components/Template/Footer/Footer";
import NavBar from "../Components/Template/NavBars/NavBar";

import styles from "./land-page/LandPage.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useEffect } from "react";

const RootLayout = () => {
  const present = (email) => {
    console.log(email);
  };

  const dispatch = useDispatch();
  const info = JSON.parse(localStorage.getItem("users"));

  useEffect(() => {
    if (info) {
      dispatch(
        authActions.loggin({
          id: info.id,
          firstname: info.firstName,
          lastname: info.lastName,
          othername: info.otherName,
          token: info.token,
          refreshToken: info.refreshToken,
          roles: info.roles,
        })
      );
    }
  }, [dispatch, info]);

  return (
    <div className={styles.LandPage_components}>
      <NavBar />
      <Outlet />
      <div className={styles.landFooter}>
        <Footer submit={present} />
      </div>
    </div>
  );
};
export default RootLayout;
