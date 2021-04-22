import React, { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { refresh, addToLocations } from "../../redux/actions";
import { useHistory, Link } from "react-router-dom";

function AddItem({ duplicate, setDuplicate, coordinates, setCoordinates }) {
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [isCatrgory, setIsCategory] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const list = useSelector((state) => state.listReducer);
  const dispatch = useDispatch();

  const locationSumbitHandler = () => {
    if (
      !list.locations.find(
        (obj) => obj.name.toLowerCase() === locationName.toLowerCase()
      )
    ) {
      if (
        !coordinates.includes(",") ||
        parseFloat(coordinates.split(",")[0]) < -90 ||
        parseFloat(coordinates.split(",")[0]) > 90 ||
        parseFloat(coordinates.split(",")[1]) < -180 ||
        parseFloat(coordinates.split(",")[1]) > 180
      ) {
        setIsValid(true);
        return;
      }
      setIsValid(false);

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
        setCoordinates("");
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
    <Form style={{ width: "70%", margin: "100px auto" }}>
      <Form.Label>Location Coordinates</Form.Label>
      <Row>
        <Col>
          <Form.Control
            value={coordinates}
            placeholder="Location Coordinates - (latitude,longiture) "
            onChange={(e) => {
              setCoordinates(e.target.value);
            }}
          />
        </Col>
        <Col>
          <Link to="/map">
            {" "}
            <Button variant="warning">Choose from map</Button>{" "}
          </Link>
        </Col>
      </Row>
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
      {isValid && (
        <Alert variant="danger">
          Please enter valid coordinates (latitude,longiture) The latitude must
          be a number between -90 and 90 and the longitude between -180 and 180.
        </Alert>
      )}
    </Form>
  );
}

export default AddItem;
