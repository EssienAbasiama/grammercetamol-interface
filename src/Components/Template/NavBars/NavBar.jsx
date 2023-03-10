import { useState } from "react";

import Button from "../../UI/Button/Button";
import { Logo } from "../../UI/constants";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClick = () => {
    setClicked((previous) => !previous);
  };

  const isClicked = clicked
    ? `${styles.navmenu} ${styles.active}`
    : `${styles.navmenu}`;

  return (
    <nav className={styles.navitems}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.hambuger} onClick={handleClick}>
        <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
      </div>
      <ul className={isClicked}>
        <li>
          <NavLink to={process.env.React_App_Home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={process.env.React_App_About}>About Us</NavLink>
        </li>
        <li>
          <NavLink to={process.env.React_App_Courses}>Courses</NavLink>
        </li>
        <li>
          <NavLink to={process.env.React_App_Contact}>Contacts</NavLink>
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink to={process.env.React_App_Register}>
              <Button className={styles.btn}>Sign Up</Button>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
