import React from "react";
import Button from "../../../UI/Button/Button";
import { Microphone } from "../../../UI/constants";

import styles from "./Phase1.module.css";
import "./Phase1.module.css"

const Phase1 = () => {
  return (
    <>
      <div className={styles.clinic}>
        <div className={styles.clinic__}>
          <div className={styles.grammercetamol_clinic}>
            <h2>THE GRAMMCETAMOL CLINIC</h2>
          </div>
          <div className={styles.explain}>
            <p>
              SPEAK <span>ENGLISH</span> MORE NATURALLY WITH <br /> CONFIDENCE
              AND STUNNING <span>DICTION</span>
            </p>
          </div>
          <div className={styles.title_text_container}>
            <p className={styles.title_text_container_p}>Discover the Secrets to fat fluency,boost your word power<br></br>
              and improve your pronunciation
            </p>
          </div>
          <Button className={styles.button}>Get Started</Button>
        </div>
        <img className={styles.image} src={Microphone} alt=""></img>
        {/* <div className={styles.microphone}>
          
        </div> */}
      </div>
    </>
  );
};

export default Phase1;
