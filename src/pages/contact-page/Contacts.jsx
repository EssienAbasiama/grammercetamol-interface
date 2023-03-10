import { useState } from "react";

import NavBar from "../../Components/Template/NavBars/NavBar";
import Input from "../../Components/UI/sub-components/Input";
import Card from "../../Components/UI/Card/Card";

import styles from "./contact.module.css";
import Form from "../../Components/UI/Form/Form";
import Button from "../../Components/UI/Button/Button";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(name, email, text);
  };

  return (
    <section className={styles.section}>
      <NavBar />
      <div className={styles.contact}>
        <div className={styles.contacts}>
          <Card className={styles["contact-details"]}>
            <h2>waht is your name</h2>
            <div className={styles["contact-address"]}>
              <i className="fa-sharp fa-solid fa-location-dot" />
              <a href="s">
                1, Badimu close, off Lagos-Abeokuta Expressway, pakistan
                bus-stop, Dopemu lagos
              </a>
            </div>
            <div className={styles["contact-address"]}>
              <i className="fa-solid fa-envelope" />
              <a href="mailto:horluwatosin@gmail.com">
                Horluwatosin1999@gmail.com
              </a>
            </div>
            <div className={styles["contact-address"]}>
              <i className="fa-solid fa-phone" />
              <a href="tel:+2348109604362">+2348109604362</a>
            </div>
            <div className={styles["contact-address"]}>
              <i className="fa-brands fa-instagram" />
              <a href="http://www.instagram.com/the_grammarcetamol_clinic">
                the_grammarcetamol_clinic
              </a>
            </div>
          </Card>
          <div className={styles["get-in-touch"]}>
            <div>
              <p>get in touch</p>
              <p>feel free to drop us a line below</p>
            </div>
            <div className={styles["get-message"]}>
              <Form submit={submitHandler}>
                <Card className={styles["contact-input"]}>
                  <Input
                    value={name}
                    type="text"
                    onChange={nameChangeHandler}
                    placeholder="Your name"
                  />
                </Card>
                <Card className={styles["contact-input"]}>
                  <Input
                    value={email}
                    onChange={emailChangeHandler}
                    type="email"
                    placeholder="email"
                  />
                </Card>
                <Card
                  className={styles["contact-input"]}
                  id={styles["text-messages"]}
                >
                  <textarea
                    value={text}
                    onChange={textChangeHandler}
                    type="text"
                    placeholder="Yout Text"
                  />
                </Card>
                <div className={styles["btn-actions"]}>
                  <Button type="submit" className={styles.btn}>
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
