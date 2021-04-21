import React, { useEffect, useState } from "react";
import { Container, Row, Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { refresh, sortLocations, groupByLocations } from "../redux/actions";
import List from "./Category/List";
import Details from "./Category/Details";

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
        <Row
          style={{
            display: "flex",
            justifySelf: "center",
            justifyContent: "center",
          }}
        >
          <Col>
            <List
              list={list}
              handleSelected={handleSelected}
              listName={isCategory ? "Category List" : "Locations List"}
              category={category}
            />
            <Button variant="primary" onClick={() => dispatch(refresh())}>
              Clear Choice
            </Button>{" "}
            {!isCategory && (
              <>
                <Button onClick={sortHandler}>SORT BY NAME</Button>
                <Button onClick={() => dispatch(groupByLocations())}>
                  Group By Category
                </Button>
                <Form.Group style={{ width: "fit-content" }}>
                  <Form.Label>Filter by Category</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option></option>
                    {categories.map((category) => (
                      <option>{category.name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </>
            )}
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
