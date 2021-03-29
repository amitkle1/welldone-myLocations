import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { refresh } from "../redux/actions";
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
}) {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="primary" onClick={() => dispatch(refresh())}>
            Clear Choice
          </Button>
          <List list={list} handleSelected={handleSelected} />

          {list.length > 0 && list.some((obj) => obj.isSelected === true) && (
            <Details
              detailsId={detailsId}
              list={list}
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
