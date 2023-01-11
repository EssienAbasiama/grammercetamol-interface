import React from "react";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <>
      <div className={`${styles.navbar}`}>
        <div className={`${styles.logo}`}>logo</div>
        <div className={`${styles.and}`}>and</div>
        <div className={`${styles.navigator}`}>
          <li>what is your name</li>
          <li>my name is sodiq</li>
          <li>This is my project</li>
        </div>
      </div>
    </>
  );
};

export default NavBar;
