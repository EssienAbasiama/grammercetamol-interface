import {
  Form,
  Link,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";

import { responseData } from "../../store/storage";
import { Input } from "../../Components/UI/Input/Input";
import { Logo } from "../../Components/UI/constants";
import Button from "../../Components/UI/Button/Button";
import styles from "./Login.module.css";
import { Microphone } from "../../Components/UI/constants";

const Login2 = () => {
  const error = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <div className={styles.form}>
          <div className={styles.form_}>
            <Link to={process.env.React_App_Home}>
              <img src={Logo} alt="" className={styles.logo} />
            </Link>

            <h3 className={styles.h3}>SIGN IN</h3>
            <h3 className={styles.h4}>SignIn to Continue Your Application</h3>
            {/* <div>
              <p>SignIn</p>
              <p>SignIn to Continue Your Application</p>
            </div> */}
            <Form method="post">
              {error && <p>{error.message}</p>}
              <Input
                id="email"
                name="username"
                label="E-mail"
                type="text"
                icon="fa-solid fa-envelope"
                placeholder="Email"
                required
              />
              <Input
                id="password"
                name="password"
                label="Password"
                type="password"
                icon="fa-solid fa-lock"
                placeholder="Password"
                required
              />
              <div id={styles.btn}>
                <Button
                  type="submit"
                  className={styles.btn}
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </div>
            </Form>
            <Link to={process.env.React_App_Register} id={styles.forgot_password}>
              Forgot Password? 
            </Link>
            <p>Don't have an Account? <Link to={process.env.React_App_Register} id={styles.signup}>
              Sign Up
            </Link></p>
          </div>
        </div>
        <div className={styles.form__}></div>
        <img className={styles.microphone} src={Microphone} alt="" />
      </div>
    </section>
  );
};

export default Login2;

export async function action({ request, params }) {
  const data = await request.formData();
  if (data.get("username") === "") {
    return json({ message: "username field cannot be empty" });
  }
  if (data.get("password") === "") {
    return json({ message: "password cannot be empty" });
  }
  const eventData = {
    username: data.get("username"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8023/api/auth/login", {
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
  responseData(res);

  return redirect("/");
}
