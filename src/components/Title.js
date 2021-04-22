import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/myloc.jpg";

function Title() {
  return (
    <div className="header">
      <h1>MyLocations</h1>
      <img style={{ width: "200px", height: "200px" }} src={logo} alt="logo" />
      <h3>Please select an action from the navbar </h3>
      <h5>Switch between states in the bottom bar</h5>
    </div>
  );
}

export default Title;
