import { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { AuthContext } from "../../context/AuthContext";
// import { Search } from "../Search/Search";

export const Header = () => {
  const { isAuthenticated, email, onLogout } = useContext(AuthContext);

  // const [searchValue, setSearchValue] = useState("");
  // const [searchModalShow, setSearchModalShow] = useState(false);

  // const handleSearchClick = () => {
  //   if (searchValue === "") {
  //     alert("Please enter a search term.");
  //   } else if (searchValue.length < 3) {
  //     alert("Search term must be at least 3 characters long.");
  //   } else {
  //     setSearchModalShow(true);
  //   }
  // };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My React Project
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
                  {email}
                </Nav.Link>
                <Nav.Link
                  as={Button}
                  variant="outline-danger"
                  onClick={onLogout}
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search be name, country or type..."
              className="me-2"
              aria-label="Search"
              // onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button variant="outline-success">
              {/* onClick={handleSearchClick} */}
              Search
            </Button>
            {/* {searchModalShow && <Search value={searchValue} />} */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
