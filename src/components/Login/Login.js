import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );
  return (
    <div
      className="container-fluid bg-dark text-light py-5"
      style={{ marginBottom: "0px" }}
    >
      <div
        className="container py-5 bg-secondary"
        style={{
          width: "30%",
          margin: "120px auto",
          borderStyle: "groove",
          borderColor: "honeydew",
        }}
      >
        <h1 style={{ width: "10%", margin: "0 auto" }}>Login</h1>
        <Form
          id="login"
          className="mb-3"
          style={{ marginLeft: "15px", width: "80%" }}
          onSubmit={onSubmit}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name={LoginFormKeys.Email}
              value={values[LoginFormKeys.Email]}
              onChange={changeHandler}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name={LoginFormKeys.Password}
              value={values[LoginFormKeys.Password]}
              onChange={changeHandler}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            Submit
          </Button>
          <p className="field text-info">
            <span>
              If you don't have profile click <Link className="text-dark" to="/register">Here</Link>
            </span>
          </p>
        </Form>
      </div>
    </div>
  );
};
