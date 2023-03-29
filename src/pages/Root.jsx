import { Outlet } from "react-router-dom";
import Footer from "../Components/Template/Footer/Footer";
import NavBar from "../Components/Template/NavBars/NavBar";

import styles from "./land-page/LandPage.module.css";

const RootLayout = () => {
  const present = (email) => {
    console.log(email);
  };

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
