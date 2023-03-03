import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./Phase1.module.css";
import { Microphone } from "../../UI/constants";

const Phase1 = () => {
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
          <img src={Microphone} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default Phase1;
