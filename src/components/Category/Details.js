import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function Details({
  detailsId,
  list,
  remove,
  showDetails,
  update,
  editTitle,
  setEditTitle,
}) {
  const [name, setName] = useState("");
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
      <Card style={{ width: "25rem", margin: "50px" }}>
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
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
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
              style={{ marginLeft: "50px" }}
              variant="success"
              onClick={() => {
                update(detailsId, name);
                setEditTitle((prev) => !prev);
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
