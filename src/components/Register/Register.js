import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Errors } from "../Errors/Errors";

import styles from "./Register.module.css";

const RegisterFormKeys = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirmPassword",
  Role: "gender",
  Description: "description",
};

export const Register = () => {
  const { onRegisterSubmit, errors } = useAuthContext();

  const { values, changeHandler, onSubmit } = useForm(
    {
      [RegisterFormKeys.FirstName]: "",
      [RegisterFormKeys.LastName]: "",
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.ConfirmPassword]: "",
      [RegisterFormKeys.Role]: "",
      [RegisterFormKeys.Description]: "",
    },
    onRegisterSubmit
  );

  return (
    <div className={styles["register"]}>
      {errors && <Errors errors={errors} />}
      <div className={styles["registerForm"]}>
        <h1 className={styles["registerForm h1"]}>Register</h1>
        <Form className={styles["registerForm label"]} onSubmit={onSubmit}>
          <Form.Group as={Row} controlId="formHorizontalFirstName">
            <Form.Label column sm={3}>
              First name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className={styles["firstName"]}
                type="text"
                name={RegisterFormKeys.FirstName}
                value={values[RegisterFormKeys.FirstName]}
                placeholder="First name"
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalLastName">
            <Form.Label column sm={3}>
              Last name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className={styles["lastName"]}
                type="text"
                name={RegisterFormKeys.LastName}
                value={values[RegisterFormKeys.LastName]}
                placeholder="Last name"
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className={styles["email"]}
                type="email"
                name={RegisterFormKeys.Email}
                value={values[RegisterFormKeys.Email]}
                placeholder="Email"
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={3}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className={styles["password"]}
                type="password"
                name={RegisterFormKeys.Password}
                value={values[RegisterFormKeys.Password]}
                placeholder="Password"
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalRepeatPassword">
            <Form.Label column sm={4}>
              Confirm Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className={styles["confirmPassword"]}
                type="password"
                name={RegisterFormKeys.ConfirmPassword}
                value={values[RegisterFormKeys.ConfirmPassword]}
                placeholder="Repeat password"
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group>
            <Form.Label column lg={4}>
              About you
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className={styles["about"]}
                as="textarea"
                maxLength={250}
                rows={3}
                type="text"
                name={RegisterFormKeys.Description}
                value={values[RegisterFormKeys.Description]}
                placeholder="a few words about your passion on coins or post marks..."
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>

          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={3}>
                User Type:
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Male"
                  onChange={changeHandler}
                  name={RegisterFormKeys.Role}
                  id="gender1"
                  value="/assets/maleIcon.png"
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  onChange={changeHandler}
                  name={RegisterFormKeys.Role}
                  id="gender2"
                  value="/assets/femaleIcon.png"
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group>
            <Col>
              <Button className={styles["send"]} type="submit">
                Submit
              </Button>
            </Col>
          </Form.Group>
          <div className={styles["registerInfo"]}>
            <p>
              If you already have a profile click<Link to="/login"> Here!</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};
