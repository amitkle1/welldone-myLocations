import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation({ list }) {
  const [isSelected, setIsSelected] = useState(false);

  // useEffect(() => {
  //   if (list.find((obj) => obj.isSelected)) {
  //     setIsSelected(true);
  //     console.log("dsga");
  //   }
  // });
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>myLocations</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" style={{ display: "flex", gap: "30px" }}>
          <Link to="/main" style={{ color: "#fff" }}>
            Category List
          </Link>

          <Link to="/add-item" style={{ color: "#fff" }}>
            New Category
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
