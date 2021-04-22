import React, { useState } from "react";
import { Form, Col, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToList, refresh, addToLocations } from "../../redux/actions";
import { useHistory } from "react-router-dom";

function AddItem({ duplicate, setDuplicate }) {
  const [categoryName, setCategoryName] = useState("");
  const [locationName, setLocationName] = useState("");
  const list = useSelector((state) => state.listReducer);
  const dispatch = useDispatch();

  const nameHandler = (e) => {
    setCategoryName(e.target.value);
  };
  const locationHandler = (e) => {
    setLocationName(e.target.value);
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
  const locationSumbitHandler = () => {
    if (
      !list.locations.find(
        (obj) => obj.name.toLowerCase() === categoryName.toLocaleLowerCase()
      )
    ) {
      dispatch(addToLocations({ name: locationName, isSelected: false }));
      setLocationName("");
      setDuplicate(false);
      dispatch(refresh());
    } else {
      setLocationName("");
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
