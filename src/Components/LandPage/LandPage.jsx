import React from "react";
import Phase1 from "./Phase1/Phase1";
import Phase2 from "./Phase2/Phase2";
import styles from "./LandPage.module.css";
import NavBar from "../NavBars/NavBar";
import Phase3 from "./Phase3/Phase3";
import Footer from "../Footer/Footer";
const LandPage = (props) => {
  const present = (email) => {
    console.log(email);
  };

  return (
    <>
      <div className={styles.LandPage}>
        <div className={styles.LandPage_components}>
          <NavBar />
          <Phase1 microphone={props.phase1} />
          <Phase2 courses={props.phase2} />
          <Phase3 other_courses={props.phase3} />
        </div>
        <div className={styles.landFooter}>
          <Footer logo={props.footerLogo} submit={present} />
        </div>
      </div>
    </>
  );
};

export default LandPage;
