import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch } from "react-redux";
import { refresh } from "../redux/actions";

function Details({
  detailsId,
  list,
  remove,
  showDetails,
  update,
  editTitle,
  setEditTitle,
  isCategory,
  viewport,
  setViewport,
}) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const viewHandler = () => {
    setViewport({
      ...viewport,
      longitude: parseFloat(list[detailsId].coordinates.split(",")[1]),
      latitude: parseFloat(list[detailsId].coordinates.split(",")[0]),
    });
    dispatch(refresh());
  };

  const submit = () => {
    confirmAlert({
      title: "Are you sure?",
      message: "Are you sure you want to delete this category?",
      buttons: [
        {
          label: "Yes",
          onClick: () => remove(detailsId),
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
    showDetails && (
      <Card
        style={{
          width: "25rem",
          height: "fit-content",
          margin: "50px auto",
        }}
      >
        <Card.Body>
          {!editTitle ? (
            <Card.Title style={{ textAlign: "center" }}>
              {list[detailsId]?.name}
            </Card.Title>
          ) : (
            <Form.Control
              value={name}
              style={{ textAlign: "center" }}
              type="text"
              placeholder="Enter title..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          )}
          {isCategory ? (
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          ) : (
            <>
              {" "}
              <Card.Text>{"address: " + list[detailsId].address}</Card.Text>
              <Card.Text>
                {"coordinates: " + list[detailsId].coordinates}
              </Card.Text>
              <Card.Text>{"category: " + list[detailsId].category}</Card.Text>
              <Link to="/map">
                <Button variant="warning" onClick={viewHandler}>
                  VIEW ON MAP
                </Button>{" "}
              </Link>
            </>
          )}
          <Button
            variant="primary"
            onClick={() => setEditTitle((prev) => !prev)}
          >
            EDIT
          </Button>{" "}
          <Button variant="danger" onClick={() => submit()}>
            DELETE
          </Button>
          {editTitle && (
            <Button
              className={"m-0"}
              style={{ marginLeft: "50px" }}
              variant="success"
              onClick={() => {
                update(detailsId, name);
                setEditTitle((prev) => !prev);
                setName("");
              }}
            >
              UPDATE
            </Button>
          )}
        </Card.Body>
      </Card>
    )
  );
}

export default Details;
