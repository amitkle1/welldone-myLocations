import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navigation";
import Main from "./components/Main";
import AddItem from "./components/Category/AddItem";
import Title from "./components/Title";
import { useSelector, useDispatch } from "react-redux";
import { updateList, removeFromList, updateItem } from "./redux/actions";
import "./App.css";

function App() {
  const [detailsId, setDetailsId] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [duplicate, setDuplicate] = useState(false);

  const list = useSelector((state) => state.listReducer);

  const dispatch = useDispatch();

  const handleSelected = (id) => {
    dispatch(updateList(id));
    setDetailsId(id);
    setShowDetails(true);
    setEditTitle(false);
  };

  const remove = (id) => {
    dispatch(removeFromList(id));
    setShowDetails(false);
  };

  const update = (id, name) => {
    if (name) {
      dispatch(updateItem(id, name));
    }
  };

  return (
    <React.Fragment>
      <Router>
        <Navbar
          setEditTitle={setEditTitle}
          showDetails={showDetails}
          list={list}
          remove={remove}
        />
        <Title />
        <Switch>
          <Route exact path="/main">
            <Main
              list={list}
              remove={remove}
              update={update}
              handleSelected={handleSelected}
              detailsId={detailsId}
              setDetailsId={setDetailsId}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              duplicate={duplicate}
              setDuplicate={setDuplicate}
            />
          </Route>
          <Route exact path="/add-item">
            <AddItem
              duplicate={duplicate}
              setDuplicate={setDuplicate}
              list={list}
            />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
