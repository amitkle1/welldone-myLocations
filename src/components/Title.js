import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/myloc.jpg";

function Title() {
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h1>MyLocations</h1>
        <img
          style={{ width: "200px", height: "200px" }}
          src={logo}
          alt="logo"
        />
        <h3>Please select an action from the navbar </h3>
      </div>
    </Container>
  );
}

export default Title;
