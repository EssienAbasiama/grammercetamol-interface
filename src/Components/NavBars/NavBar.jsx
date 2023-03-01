import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";

import { Logo } from "../UI/constants";
import "./nav.css";

const NavBar = () => {
  useEffect(() => {
    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleBtnIcon = document.querySelector(".toggle_btn i");
    const dropDownMenu = document.querySelector(".dropdown_menu");

    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle("open");
      const isOpen = dropDownMenu.classList.contains("open");
      toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    };
  }, []);
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <a href="#J">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">about</a>
          </li>
          <li>
            <a href="services">services</a>
          </li>
          <li>
            <a href="contact">Contacts</a>
          </li>
        </ul>
        <a href="J" className="action_btn">
          Get Started
        </a>
        <div className="toggle_btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className="dropdown_menu">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about">about</a>
        </li>
        <li>
          <a href="services">services</a>
        </li>
        <li>
          <a href="contact">Contacts</a>
        </li>
        <li>
          <a href="#F" className="action_btn">
            Get Started
          </a>
        </li>
      </div>
    </header>
  );
};

export default NavBar;
