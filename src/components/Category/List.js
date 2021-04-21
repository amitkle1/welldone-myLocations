import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { refresh } from "../../redux/actions";

function List({ list, handleSelected, listName, category }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, []);

  return (
    <Container>
      <h1>{listName}</h1>

      {list.length > 0 ? (
        <Card style={{ width: "18rem" }}>
          {list?.map((item, idx) => {
            if (!category) {
              return (
                <Item
                  key={idx}
                  idx={idx}
                  item={item}
                  handleSelected={handleSelected}
                  list={list}
                />
              );
            } else if (item.category === category) {
              return (
                <Item
                  key={idx}
                  idx={idx}
                  item={item}
                  handleSelected={handleSelected}
                  list={list}
                />
              );
            }
          })}
        </Card>
      ) : (
        <h3>Category List Is Empty</h3>
      )}
    </Container>
  );
}

export default List;
