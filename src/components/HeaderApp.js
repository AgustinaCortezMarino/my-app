import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../logo.svg";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

const styles = {
  fontSize: "16px",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  color: "#c70039",
};

export const HeaderApp = () => (
  <Navbar bg="dark" variant="dark" style={styles}>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Mini Ecommerce
      </Navbar.Brand>
      <ShoppingCart />
    </Container>
  </Navbar>
);
