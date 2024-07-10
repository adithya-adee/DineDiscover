import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import Cart from "../display/Cart";
import { useCart } from "./ContextReducer";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
function ResponsiveNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  let navigate = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">DINE DISCOVER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2"></Nav>
          {isLoggedIn ? (
            <>
              <Nav.Link
                // href="/cart"
                className="m-3"
                onClick={() => {
                  setCartView(true);
                }}
              >
                MyCart{"    "}
                <Badge badgeContent={data.length} color="primary"></Badge>
              </Nav.Link>
              {cartView ? (
                <Modal
                  onClose={() => {
                    setCartView(false);
                  }}
                >
                  <Cart />
                </Modal>
              ) : null}
              <Nav.Link
                href="/logout"
                className="m-2"
                onClick={() => {
                  localStorage.removeItem("authToken");
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/loginuser" className="m-2">
                Login
              </Nav.Link>
              <Nav.Link href="/createuser" className="m-2">
                SignUp
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
