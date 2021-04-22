import React, { useEffect, useState } from "react";
import { Container, Row, Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { refresh, sortLocations, groupByLocations } from "../redux/actions";
import List from "./List";
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
  isCategory,
  setIsCategory,
  viewport,
  setViewport,
}) {
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.listReducer.category);

  useEffect(() => {}, [isCategory]);
  const sortHandler = () => {
    dispatch(sortLocations());
  };
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <List
              list={list}
              handleSelected={handleSelected}
              listName={isCategory ? "Category List" : "Locations List"}
              category={category}
              isCategory={isCategory}
            />
            <Container>
              <Button
                variant="outline-primary"
                onClick={() => dispatch(refresh())}
              >
                Clear Choice
              </Button>{" "}
              {!isCategory && (
                <>
                  <Button variant="outline-info" onClick={sortHandler}>
                    SORT BY NAME
                  </Button>
                  <Button
                    variant="outline-success"
                    onClick={() => {
                      setCategory("");
                      dispatch(groupByLocations());
                    }}
                  >
                    Group By Category
                  </Button>
                  <Form.Group style={{ width: "fit-content" }}>
                    <Form.Label>Filter by Category</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option></option>
                      {categories.map((category, idx) => (
                        <option key={idx}>{category.name}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </>
              )}
            </Container>
          </Col>

          {list.length > 0 && list.some((obj) => obj.isSelected === true) && (
            <Details
              detailsId={detailsId}
              list={list}
              remove={remove}
              showDetails={showDetails}
              update={update}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              isCategory={isCategory}
              viewport={viewport}
              setViewport={setViewport}
            />
          )}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Main;
