import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";

const RegisterFormKeys = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirmPassword",
  Role: "gender",
};

export const Register = () => {
  const { onRegisterSubmit } = useAuthContext();

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
                  label="Male"
                  onChange={changeHandler}
                  name={RegisterFormKeys.Role}
                  id="gender1"
                  value="/assets/maleIcon.png"
                  required
                />
                {/* {role === "admin" && (
                  <Form.Control
                    id="admin-field"
                    type="password"
                    style={{ width: "50%", display: "block" }}
                    label="Enter admin code:"
                    required
                  />
                )} */}
                <Form.Check
                  type="radio"
                  label="Female"
                  onChange={changeHandler}
                  name={RegisterFormKeys.Role}
                  id="gender2"
                  value="/assets/femaleIcon.png"
                  required
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
