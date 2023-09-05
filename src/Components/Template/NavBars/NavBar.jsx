import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Button from "../../UI/Button/Button";
import { Logo } from "../../UI/constants";
import Icons from "../../UI/Icons/Icons";
import UL from "../../UI/Lists/Ulist";
import Lists from "../../UI/Lists/Lists";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClick = () => {
    setClicked((previous) => !previous);
  };

  const isClicked = clicked
    ? `${styles.navmenu} ${styles.active}`
    : `${styles.navmenu}`;

  const icons = clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  return (
    <nav className={styles.navitems}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.hambuger} onClick={handleClick}>
        <Icons icons={icons} />
      </div>
      <UL className={isClicked}>
        <Lists>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Home
          </NavLink>
        </Lists>
        <Lists>
          <NavLink
            to="about-us"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            About Us
          </NavLink>
        </Lists>
        <Lists>
          <NavLink
            to="courses"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Courses
          </NavLink>
        </Lists>
        <Lists>
          <NavLink
            to="contacts"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Contacts
          </NavLink>
        </Lists>
        <Lists>
          {!isLoggedIn ? (
            <NavLink
            to={process.env.React_App_Login}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Sign In
            </NavLink>
          ) : (
            <NavLink to={process.env.React_App_Login}>
              <Button className={styles.btn}>My Profile</Button>
            </NavLink>
          )}
        </Lists>
        <Button className={styles.btn}>What do you want to learn?</Button>

      </UL>
    </nav>
  );
};

export default NavBar;
