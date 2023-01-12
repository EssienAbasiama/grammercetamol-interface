import React, { useRef } from "react";
import style from "./Footer.module.css";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Card from "../UI/Card/Card";

const google = "www.google.com;";
const Footer = (props) => {
  const emailRef = useRef();

  const addMail = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    if (email.trim().length !== 0) {
      props.submit(email);
      emailRef.current.value = "";
    } else {
      console.log("we are done");
    }
  };

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
        <div className={`${style.contacts} ${style.hide}`}>
          <div className={style.d2}>
            <h2>Explore</h2>
            <li>home</li>
            <li>about us</li>
            <li>meet our tutor</li>
            <li>contact us</li>
          </div>
        </div>
        <Card className={style.footer3}>
          <div className={style.d3}>
            <div className={style.community}>
              <h2>join our community</h2>
            </div>
            <p>Be the first to know about new lessons and post</p>
            <form onSubmit={addMail}>
              <div className={style.form}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef} />
              </div>
            </form>
          </div>
        </Card>
        {/* <div className={style.footer3}>
          <div className={style.d3}>
            <div className={style.community}>
              <h2>join our community</h2>
            </div>
            <p>Be the first to know about new lessons and post</p>
            <form onSubmit={addMail}>
              <div className={style.form}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef} />
              </div>
            </form>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Footer;
