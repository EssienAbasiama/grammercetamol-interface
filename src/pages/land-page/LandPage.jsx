import React from "react";
import { useSelector } from "react-redux";

import Phase1 from "../../Components/Template/LandPage/Phase1/Phase1";
import Phase2 from "../../Components/Template/LandPage/Phase2/Phase2";
import NavBar from "../../Components/Template/NavBars/NavBar";
import Phase3 from "../../Components/Template/LandPage/Phase3/Phase3";
import Footer from "../../Components/Template/Footer/Footer";
import styles from "./LandPage.module.css";

const LandPage = (props) => {
  const present = (email) => {
    console.log(email);
  };

  const roles = useSelector((state) => state.auth.roles);
  console.log(roles);

  return (
    <>
      <div className={styles.LandPage}>
        <div className={styles.LandPage_components}>
          <NavBar />
          <Phase1 />
          <Phase2 />
          <Phase3 other_courses={props.phase3} />
        </div>
        <div className={styles.landFooter}>
          <Footer submit={present} />
        </div>
      </div>
    </>
  );
};

export default LandPage;
