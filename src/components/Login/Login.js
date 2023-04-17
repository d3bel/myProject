import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import { Errors } from "../Errors/Errors";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export const Login = () => {
  const { onLoginSubmit, errors } = useContext(AuthContext);

  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );

  return (
    <div className={styles["login"]}>
      {errors && <Errors errors={errors} />}
      <div className={styles["loginForm"]}>
        <h1>Login</h1>
        <Form id="login" className={styles["loginLabel"]} onSubmit={onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className={styles["email"]}
              type="email"
              name={LoginFormKeys.Email}
              value={values[LoginFormKeys.Email]}
              onChange={changeHandler}
              placeholder="Enter email"
            />
            <Form.Text className={styles["info"]}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={styles["password"]}
              type="password"
              name={LoginFormKeys.Password}
              value={values[LoginFormKeys.Password]}
              onChange={changeHandler}
              placeholder="Password"
            />
          </Form.Group>
          <Button
            className={styles["send"]}
            // variant="outline-warning"
            type="submit"
          >
            Sign in
          </Button>
          <div className={styles["loginInfo"]}>
            <p>
              If you don't have profile click <Link to="/register">Here!</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};
