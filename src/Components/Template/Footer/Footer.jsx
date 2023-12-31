import React, { useRef } from "react";
import style from "./Footer.module.css";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { Logo } from "../../UI/constants";

const google = "https://www.google.com";
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
      <section className={style.footerall_container}>
        <div className={style.footerall}>
          <div className={style.footer3}>
            <div className={style.d1}>
              <div className={style.footerlogo}>
                <img src={Logo} alt="" />
              </div>
              <div className={style.intro}>
                <h3 className={style.footet_sub_title}>
                  Welcome to our english academy where we help you stand out
                  with stunning diction
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

          <div className={`${style.footer3} ${style.hide}`}>
            <div className={style.d2}>
              <h2>Explore</h2>
              <a href={google}>home</a>
              <a href={google}>about us</a>
              <a href={google}>meet our tutor</a>
              <a href={google}>contact us</a>
            </div>
          </div>
          <Card className={style.footer3}>
            <div className={style.d3}>
              <div className={style.community}>
                <h2 className={style.d3_h2}>join our community</h2>
              </div>
              <p className={style.footer_div_container_header}>
                Be the first to know about new lessons and post
              </p>
              <form className={style.form_footer} onSubmit={addMail}>
                <div className={style.form}>
                  <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    placeholder="Email Address"
                  />
                  {/* <Button className={style.button}>Sign Me In</Button> */}
                </div>
                <Button className={style.button}>SIGN ME UP</Button>
              </form>
            </div>
          </Card>
        </div>
        <div className={style.copywrite_container}>
          <div className={style.copywrite}>&copy; 2023 GRAMMCETAMOL</div>
          <div className={style.copywrite_container_explore}>
              <h2>Explore</h2>
              <a href={google}>Home</a>
              <a href={google}>AboutUs</a>
              <a href={google}>MeetOurTutor</a>
              <a href={google}>ContactUs</a>
            </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
