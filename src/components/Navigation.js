import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation({ list, setEditTitle, remove, setShowDetails }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>myLocations</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" style={{ display: "flex", gap: "30px" }}>
          {!list.some((element) => element.isSelected === true) ? (
            <>
              <Link to="/main" style={{ color: "#fff" }}>
                Category List
              </Link>
              <Link to="/add-item" style={{ color: "#fff" }}>
                New Category
              </Link>
            </>
          ) : (
            <>
              <Nav.Link
                onClick={() => setEditTitle((prev) => !prev)}
                style={{ color: "#fff" }}
              >
                Edit
              </Nav.Link>{" "}
              <Nav.Link
                onClick={() =>
                  remove(list.findIndex((obj) => obj.isSelected === true))
                }
                style={{ color: "#fff" }}
              >
                Delete
              </Nav.Link>
              <Nav.Link
                onClick={() => setShowDetails((prev) => !prev)}
                style={{ color: "#fff" }}
              >
                View
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
