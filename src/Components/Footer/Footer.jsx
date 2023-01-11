import React from "react";
import style from "./Footer.module.css";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const google = "www.google.com;";
const Footer = (props) => {
  return (
    <>
      <section className={style.footerall}>
        <div className={style.footer3}>
          <div className={style.d1}>
            <div className={style.footerlogo}>
              <img src={props.logo} alt="" />
            </div>
            <div className={style.intro}>
              <h3>
                Welcome to our english academy where we help you stand out with
                stunning diction
              </h3>
            </div>
            <div className={style.contacts}>
              <div className={style.contacts_icons}>
                <a href={google}>
                  <FaInstagram />
                </a>
                <a href={google}>
                  <FaWhatsapp />
                </a>
                <a href={google}>
                  <FaTwitter />
                </a>
                <a href={google}>
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer3}>
          <div className={style.d2}>
            <h2>Explore</h2>
            <li>home</li>
            <li>about us</li>
            <li>meet our tutor</li>
            <li>contact us</li>
          </div>
        </div>
        <div className={style.footer3}>
          <div className={style.d3}></div>
        </div>
      </section>
    </>
  );
};

export default Footer;
