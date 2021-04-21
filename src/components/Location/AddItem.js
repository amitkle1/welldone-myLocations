import React, { useState } from "react";
import { Form, Col, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { refresh, addToLocations } from "../../redux/actions";
import { useHistory } from "react-router-dom";

function AddItem({ duplicate, setDuplicate }) {
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [category, setCategory] = useState("");
  const [isCatrgory, setIsCategory] = useState(false);

  const list = useSelector((state) => state.listReducer);
  const dispatch = useDispatch();

  const locationHandler = (e) => {
    setLocationName(e.target.value);
  };

  const locationSumbitHandler = () => {
    if (
      !list.locations.find(
        (obj) => obj.name.toLowerCase() === locationName.toLowerCase()
      )
    ) {
      setDuplicate(false);
      if (category) {
        dispatch(
          addToLocations({
            name: locationName,
            address,
            coordinates,
            category,
            isSelected: false,
          })
        );
        setLocationName("");
        setIsCategory(false);
        dispatch(refresh());
        history.push("/main");
      } else {
        setIsCategory(true);
      }
    } else {
      setLocationName("");
      setDuplicate(true);
    }
  };
  let history = useHistory();
  return (
    <Form style={{ width: "70%", margin: "0 auto" }}>
      <Form.Label>Location Name</Form.Label>
      <Form.Control
        value={locationName}
        placeholder="Location Name"
        onChange={(e) => {
          setLocationName(e.target.value);
        }}
      />
      <Form.Label>Location Address</Form.Label>

      <Form.Control
        value={address}
        placeholder="Location Address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <Form.Label>Location Coordinates</Form.Label>

      <Form.Control
        value={coordinates}
        placeholder="Location Coordinates"
        onChange={(e) => {
          setCoordinates(e.target.value);
        }}
      />
      <Form.Label>Category</Form.Label>

      <Form.Control as="select" onChange={(e) => setCategory(e.target.value)}>
        <option></option>
        {list.category.map((cat, idx) => (
          <option key={idx}>{cat.name}</option>
        ))}
      </Form.Control>
      <Button variant="primary" onClick={locationSumbitHandler}>
        ADD NEW LOCATION
      </Button>
      {duplicate && (
        <Alert variant="danger">Location ALREADY ON THE LIST</Alert>
      )}
      {isCatrgory && <Alert variant="danger">Please select a category</Alert>}
    </Form>
  );
}

export default AddItem;
