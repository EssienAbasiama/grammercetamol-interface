import { Form, Link, NavLink, json, redirect } from "react-router-dom";
import Button from "../../Components/UI/Button/Button";
import { Logo } from "../../Components/UI/constants";
import { Input } from "../../Components/UI/Input/Input";

import styles from "./register.module.css";
import { useEffect, useState } from "react";

const Registration = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [othername, setOthername] = useState("");
  useEffect(() => {}, []);
  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <div className={styles.form}>
          <div className={styles.form_}>
            <Link to={process.env.React_App_Home}>
              <img src={Logo} alt="" className={styles.logo} />
            </Link>
            <h3 className={styles.h3}>Registration Form</h3>
            <Form>
              <Input
                id="firstname"
                name="firstname"
                label="Firstname"
                type="text"
                icon="fa-solid fa-user"
                required
              />
              <Input
                id="lastname"
                name="lastname"
                label="Lastname"
                type="text"
                icon="fa-solid fa-user"
                required
              />
              <Input
                id="othername"
                name="othername"
                label="Othername"
                type="text"
                icon="fa-solid fa-user"
                required
              />
              <Input
                id="e-mail"
                name="email"
                label="E-mail"
                type="email"
                icon="fa-solid fa-envelope"
                required
              />
              <Input
                id="Password"
                name="password"
                label="Password"
                type="password"
                icon="fa-solid fa-lock"
                required
              />
              <div id={styles.btn}>
                <Button type="submit" className={styles.btn}>
                  Submit
                </Button>
              </div>
            </Form>
            <p>Already have an account?</p>
            <NavLink to={process.env.React_App_Login} id={styles.btn}>
              Login
            </NavLink>
          </div>
        </div>
        <div className={styles.form__}></div>
      </div>
    </section>
  );
};

export default Registration;

export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    username: data.get("username"),
    password: data.get("password"),
  };
  const response = await fetch("http://localhost:8023/api/auth/Signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (response.status === 401) {
    return json({ message: "username or password incorrect" }, { status: 401 });
  }
  if (!response.ok) {
    throw json({ message: "Could not save event." });
  }
  console.log("This is response object", response);

  const res = await response.json();
  console.log(res);

  return redirect("/");
}
