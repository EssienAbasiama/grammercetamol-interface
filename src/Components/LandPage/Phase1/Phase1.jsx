import React from "react";
import styles from "./Phase1.module.css";
import Button from "../../UI/Button/Button";
const Phase1 = (props) => {
  return (
    <>
      <div className={styles.clinic}>
        <div className={styles.clinic__}>
          <div className={styles.grammercetamol_clinic}>
            <h2>The grammcetamol Clinic</h2>
          </div>
          <div className={styles.explain}>
            <p>
              SPEAK <span>ENGLISH</span> MORE NATURALLY WITH <br /> CONFIDENCE
              AND STUNNING <span>DICTION</span>
            </p>
          </div>
          <Button className={styles.button}>Get Started</Button>
        </div>
        <div className={styles.microphone}>
          <img src={props.microphone} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default Phase1;
