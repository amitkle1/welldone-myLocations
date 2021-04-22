import React, { useState } from "react";
import { Form, Col, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToList, refresh } from "../../redux/actions";
import { useHistory } from "react-router-dom";

function AddItem({ duplicate, setDuplicate }) {
  const [categoryName, setCategoryName] = useState("");
  const list = useSelector((state) => state.listReducer);
  const dispatch = useDispatch();

  const nameHandler = (e) => {
    setCategoryName(e.target.value);
  };

  const onSumbitHandler = () => {
    if (
      !list.category.find(
        (obj) => obj.name.toLowerCase() === categoryName.toLowerCase()
      )
    ) {
      dispatch(addToList({ name: categoryName, isSelected: false }));
      setCategoryName("");
      setDuplicate(false);
      dispatch(refresh());
      history.push("/main");
    } else {
      setCategoryName("");
      setDuplicate(true);
    }
  };

  let history = useHistory();
  return (
    <Form style={{ width: "70%", margin: "100px auto" }}>
      <Form.Label> Category Name</Form.Label>

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
