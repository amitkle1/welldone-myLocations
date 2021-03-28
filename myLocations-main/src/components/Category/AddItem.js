import React, { useState, useEffect } from "react";
import { Form, Col, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToList, refresh } from "../../redux/actions";

function AddItem({ duplicate, setDuplicate }) {
  const [categoryName, setCategoryName] = useState("");

  const list = useSelector((state) => state.listReducer);
  const dispatch = useDispatch();

  const nameHandler = (e) => {
    setCategoryName(e.target.value);
  };
  const onSumbitHandler = () => {
    if (
      !list.find(
        (obj) => obj.name.toLowerCase() === categoryName.toLocaleLowerCase()
      )
    ) {
      dispatch(addToList({ name: categoryName, isSelected: false }));
      setCategoryName("");
      setDuplicate(false);
      dispatch(refresh());
      window.location.href = "/main";
    } else {
      setCategoryName("");
      setDuplicate(true);
    }
  };

  return (
    <Form style={{ width: "70%", margin: "0 auto" }}>
      <Form.Row>
        <Col>
          <Form.Control
            value={categoryName}
            placeholder="Category Name"
            onChange={nameHandler}
          />
        </Col>
        <Button variant="primary" onClick={onSumbitHandler}>
          ADD NEW CATEGORY
        </Button>
      </Form.Row>
      {duplicate && (
        <Alert variant="danger">CATEGORY ALREADY ON THE LIST</Alert>
      )}
    </Form>
  );
}

export default AddItem;
