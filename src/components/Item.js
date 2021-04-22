import React from "react";
import { ListGroup } from "react-bootstrap";

function Item({ item, idx, handleSelected, isCategory }) {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item
        onClick={() => handleSelected(idx)}
        variant={item.isSelected === true ? "warning" : null}
        style={{ cursor: "pointer" }}
      >
        {isCategory ? item.name : item.name + " (" + item.category + ")"}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Item;
