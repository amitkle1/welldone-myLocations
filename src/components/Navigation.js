import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refresh } from "../redux/actions";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function Navigation({
  list,
  setEditTitle,
  remove,
  setShowDetails,
  isCategory,
}) {
  const dispatch = useDispatch();
  const submit = () => {
    confirmAlert({
      title: "Are you sure?",
      message: "Are you sure you want to delete this category?",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            remove(list.findIndex((obj) => obj.isSelected === true)),
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" onClick={() => dispatch(refresh())}>
        <Navbar.Brand>myLocations</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" style={{ display: "flex", gap: "30px" }}>
          {!list?.some((element) => element.isSelected === true) ? (
            <>
              <Link to="/main" style={{ color: "#fff" }}>
                {isCategory ? "Category" : "Locations"} List
              </Link>
              <Link to="/add-item" style={{ color: "#fff" }}>
                New {isCategory ? "Category" : "Location"}
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
              <Nav.Link onClick={() => submit()} style={{ color: "#fff" }}>
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
