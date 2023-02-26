import React from "react";
import { NavLink } from "react-router-dom";

import { Logo } from "../UI/constants";
import Button from "../UI/Button/Button";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <section className={`${styles.navbar}`}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.nav}>
        <div className={styles.navv}>
          <div className={styles.navlist}>
            <ul>
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>About Us</NavLink>
              </li>
              <li>
                <NavLink>Courses</NavLink>
              </li>
              <li>
                <NavLink>Contacts</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.btn}>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
