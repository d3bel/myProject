import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useState, useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const RegisterFormKeys = {
  FirstName: "first-name",
  LastName: "last-name",
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirmPassword",
  Role: "formHorizontalRadios",
};

export const Register = () => {
  const [role, setRole] = useState("");
  const onRoleHandler = (e) => {
    setRole(e.target.value);
  };
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      [RegisterFormKeys.FirstName]: "",
      [RegisterFormKeys.LastName]: "",
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.ConfirmPassword]: "",
      [RegisterFormKeys.Role]: "",
    },
    onRegisterSubmit
  );
  return (
    <div
      className="container-fluid bg-dark text-light py-5"
      style={{ marginBottom: "0px" }}
    >
      <div
        className="bg-secondary"
        style={{
          width: "30%",
          margin: "120px auto",
          borderStyle: "groove",
          borderColor: "honeydew",
        }}
      >
        <h1
          style={{
            width: "10%",
            margin: "10px auto",
            marginLeft: "40%",
          }}
        >
          Register
        </h1>
        <Form
          className="mb-3"
          style={{ marginLeft: "15px" }}
          onSubmit={onSubmit}
        >
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalFirstName"
          >
            <Form.Label column sm={3}>
              First name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name={RegisterFormKeys.FirstName}
                value={values[RegisterFormKeys.FirstName]}
                placeholder="First name"
                required
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalLastName"
          >
            <Form.Label column sm={3}>
              Last name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name={RegisterFormKeys.LastName}
                value={values[RegisterFormKeys.LastName]}
                placeholder="Last name"
                required
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                name={RegisterFormKeys.Email}
                value={values[RegisterFormKeys.Email]}
                placeholder="Email"
                required
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={3}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                name={RegisterFormKeys.Password}
                value={values[RegisterFormKeys.Password]}
                placeholder="Password"
                required
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalRepeatPassword"
          >
            <Form.Label column sm={3}>
              Re-Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                name={RegisterFormKeys.ConfirmPassword}
                value={values[RegisterFormKeys.ConfirmPassword]}
                placeholder="Repeat password"
                required
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                User Type
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Admin"
                  onChange={(onRoleHandler, changeHandler)}
                  name={RegisterFormKeys.Role}
                  id="formHorizontalRadios1"
                  value="admin"
                />
                {role === "admin" && (
                  <Form.Control
                    id="admin-field"
                    type="password"
                    style={{ width: "50%", display: "block" }}
                    label="Enter admin code:"
                    required
                  />
                )}
                <Form.Check
                  type="radio"
                  label="User"
                  onChange={(onRoleHandler, changeHandler)}
                  name={RegisterFormKeys.Role}
                  id="formHorizontalRadios2"
                  value="user"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="outline-warning" type="submit">
                Sign in
              </Button>
            </Col>
          </Form.Group>
          <p className="field text-info">
            <span>
              If you already have profile click{" "}
              <Link className="text-dark" to="/login">
                Here
              </Link>
            </span>
          </p>
        </Form>
      </div>
    </div>
  );
};
