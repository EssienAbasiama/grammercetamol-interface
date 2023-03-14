import { NavLink } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./about-us.module.css";
import Reading from "../../UI/Images/image5.png";
import Book from "../../UI/Images/image4.png";

const AboutUs = () => {
  return (
    <div className={styles.aboutcontain}>
      <div className={styles.book}></div>
      <div className={styles["about"]}>
        <div className={styles["about-1"]}>
          <h3>About</h3>
          <p>
            Achievening Excellence <br />
            Together
          </p>
        </div>
        <div className={styles["about-2"]}>
          <div className={styles["about-2-1"]}>
            <div className={styles["about-2-1-1"]}>
              <h2>
                Welcome To <br /> Grammercetamol Clinic
              </h2>
            </div>
            <div className={styles["about-2-1-2"]}>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
              </p>
              <div className={styles["images"]}>
                <img src={Reading} alt="" />
                <img src={Book} alt="" />
              </div>
            </div>
          </div>
          <div className={styles["about-2-2"]}>
            <p>Looking to take a course?</p>
            <NavLink to="/contacts">
              <Button className={styles["btn"]}>Contact us</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
