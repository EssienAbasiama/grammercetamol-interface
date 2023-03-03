import React from "react";

import Phase1 from "./Phase1/Phase1";
import Phase2 from "./Phase2/Phase2";
import NavBar from "../NavBars/NavBar";
import Phase3 from "./Phase3/Phase3";
import Footer from "../Footer/Footer";
import styles from "./LandPage.module.css";

const LandPage = (props) => {
  const present = (email) => {
    console.log(email);
  };

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
