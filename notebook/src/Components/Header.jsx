import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  React.useEffect(() => {
    // Google Analytics
    console.log(location.pathname);
  }, [location]);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">iUtsavNotebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 p-3  my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                className={`me-5 exact text-decoration-none ${
                  location.pathname === "/" ? "text-blue" : "text-white"
                }`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`me-5 exact text-decoration-none ${
                  location.pathname === "/about" ? "text-blue" : "text-white"
                }`}
                to="/about"
              >
                About
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
