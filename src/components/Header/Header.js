import { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
  const { isAuthenticated, firstName, lastName } = useContext(AuthContext);

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Our history in rare valuables
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {!isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}

            <Nav.Link as={Link} to="/catalogue">
              Catalogue
            </Nav.Link>

            {isAuthenticated && (
              <>
                <Nav.Link
                  style={{
                    color: "crimson",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                  as={Link}
                  to="/MyProfile"
                >
                  MyProfile ({firstName} {lastName})
                </Nav.Link>
                <Nav.Link as={Link} to="/logout" variant="outline-danger">
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search be name, country or type..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              Search
            </Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
