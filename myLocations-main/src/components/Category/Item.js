import React from "react";
import { ListGroup } from "react-bootstrap";

function Item({ item, idx, handleSelected }) {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item
        onClick={() => handleSelected(idx)}
        variant={item.isSelected === true ? "warning" : null}
        style={{ cursor: "pointer" }}
      >
        {item.name}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Item;
