import React from "react";
import { Container, Row, Button, Col, Tabs } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sortLocations } from "../../redux/actions";
import List from "../Category/List";
import Details from "./Details";

function Main({
  detailsId,
  showDetails,
  editTitle,
  setEditTitle,
  list,
  update,
  remove,
  handleSelected,
}) {
  const dispatch = useDispatch();

  const sortHandler = () => {
    dispatch(sortLocations());
  };
  return (
    <React.Fragment>
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col>
            <List
              list={list.locations}
              handleSelected={handleSelected}
              listName="Locations List"
            />
            <Button onClick={sortHandler}>SORT BY NAME</Button>
          </Col>
          {list.locations.length > 0 &&
            list.locations.some((obj) => obj.isSelected === true) && (
              <Details
                detailsId={detailsId}
                list={list.locations}
                remove={remove}
                showDetails={showDetails}
                update={update}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
              />
            )}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Main;
