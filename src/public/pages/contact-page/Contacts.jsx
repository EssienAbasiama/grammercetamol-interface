import { useState } from "react";

import Input from "../../Components/UI/sub-components/Input";
import Card from "../../Components/UI/Card/Card";
import Form from "../../Components/UI/Form/Form";
import Button from "../../Components/UI/Button/Button";
import ContactMessage from "../../Components/Template/Contact/contacts-message";
import ContactInfos, {
  ContactAddress,
} from "../../Components/Template/Contact/contact-social";

import styles from "./contact.module.css";

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
      <div className={styles.contact}>
        <div className={styles.contacts}>
          <ContactInfos className={styles["contact-details"]}>
            <h2>waht is your name</h2>
            <ContactAddress
              className={styles["contact-address"]}
              icon="fa-sharp fa-solid fa-location-dot"
              href="s"
              anchorlink="1, Badimu close, off Lagos-Abeokuta Expressway, pakistan
              bus-stop, Dopemu lagos"
            />
            <ContactAddress
              className={styles["contact-address"]}
              icon="fa-solid fa-envelope"
              href="mailto:horluwatosin@gmail.com"
              anchorlink="horluwatosin1999@gmail.com"
            />
            <ContactAddress
              className={styles["contact-address"]}
              icon="fa-solid fa-phone"
              href="tel:+2348109604362"
              anchorlink="+2348109604362"
            />
            <ContactAddress
              className={styles["contact-address"]}
              icon="fa-brands fa-instagram"
              href="http://www.instagram.com/the_grammarcetamol_clinic"
              anchorlink="the_grammarcetamol_clinic"
            />
          </ContactInfos>
          <div className={styles["get-in-touch"]}>
            <div>
              <p>get in touch</p>
              <p>feel free to drop us a line below</p>
            </div>
            <ContactMessage className={styles["get-message"]}>
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
            </ContactMessage>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
