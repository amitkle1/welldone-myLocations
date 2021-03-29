import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { refresh } from "../../redux/actions";

function List({ list, handleSelected }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, []);

  return (
    <Container>
      <h1>Category List</h1>

      {list.length > 0 ? (
        <Card style={{ width: "18rem" }}>
          {list?.map((item, idx) => {
            return (
              <Item
                key={idx}
                idx={idx}
                item={item}
                handleSelected={handleSelected}
                list={list}
              />
            );
          })}
        </Card>
      ) : (
        <h3>Category List Is Empty</h3>
      )}
    </Container>
  );
}

export default List;
