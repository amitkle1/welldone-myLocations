import React from "react";
import { Container, Row } from "react-bootstrap";
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
  return (
    <React.Fragment>
      <Container>
        <Row>
          <List list={list} handleSelected={handleSelected} />
          {list.length > 0 && (
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
