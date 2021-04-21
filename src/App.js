import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Navigationbar from "./components/Navigation";
import Main from "./components/Main";
import MainLocations from "./components/Location/MainLocations";
import AddItem from "./components/Category/AddItem";
import AddLocation from "./components/Location/AddItem";
import Title from "./components/Title";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  updateList,
  removeFromList,
  updateItem,
  removeLocation,
  updateLocation,
  updateLocations,
  refresh,
} from "./redux/actions";
import "./App.css";

function App() {
  const [isCategory, setIsCategory] = useState(true);
  const [detailsId, setDetailsId] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [duplicate, setDuplicate] = useState(false);

  ///
  const [locationId, setLocationId] = useState();
  const [showLocation, setShowLocation] = useState(false);
  const [editLocationTitle, setEditLocationTitle] = useState(false);
  //duplicate?
  ///
  const list = useSelector((state) => state.listReducer);

  const dispatch = useDispatch();

  const handleSelected = (id) => {
    dispatch(updateList(id));
    setDetailsId(id);
    setEditTitle(false);
    setShowDetails(true);
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
  ///
  const handleSelectedLocation = (id) => {
    dispatch(updateLocations(id));
    setLocationId(id);
    setEditLocationTitle(false);
    setShowLocation(true);
  };
  const removeLocationFromList = (id) => {
    dispatch(removeLocation(id));
    setShowDetails(false);
  };
  const updateLocationInList = (id, name) => {
    if (name) {
      dispatch(updateLocation(id, name));
    }
  };

  ///

  return (
    <React.Fragment>
      <Router>
        <Navigationbar
          setEditTitle={isCategory ? setEditTitle : setEditLocationTitle}
          setShowDetails={isCategory ? setShowDetails : setShowLocation}
          list={isCategory ? list.category : list.locations}
          remove={isCategory ? remove : removeLocationFromList}
          isCategory={isCategory}
        />
        <Title />
        <Switch>
          <Route exact path="/main">
            <Main
              list={isCategory ? list.category : list.locations}
              remove={isCategory ? remove : removeLocationFromList}
              update={isCategory ? update : updateLocationInList}
              handleSelected={
                isCategory ? handleSelected : handleSelectedLocation
              }
              detailsId={isCategory ? detailsId : locationId}
              setDetailsId={isCategory ? setDetailsId : setLocationId}
              showDetails={isCategory ? showDetails : showLocation}
              setShowDetails={isCategory ? setShowDetails : setShowLocation}
              editTitle={isCategory ? editTitle : editLocationTitle}
              setEditTitle={isCategory ? setEditTitle : setEditLocationTitle}
              duplicate={duplicate}
              setDuplicate={setDuplicate}
              isCategory={isCategory}
              setIsCategory={setIsCategory}
            />
          </Route>
          <Route exact path="/add-item">
            {isCategory ? (
              <AddItem
                duplicate={duplicate}
                setDuplicate={setDuplicate}
                list={list.category}
              />
            ) : (
              <AddLocation
                duplicate={duplicate}
                setDuplicate={setDuplicate}
                list={list.locations}
              />
            )}
          </Route>
        </Switch>
        <Navbar
          fixed="bottom"
          bg="light"
          variant="light"
          className="mr-auto"
          style={{ display: "flex", gap: "30px", justifyContent: "center" }}
        >
          {" "}
          <Link to="/" onClick={() => dispatch(refresh())}>
            <Navbar.Brand>myLocations</Navbar.Brand>
          </Link>
          <Link
            onClick={() => setIsCategory(true)}
            to="/main"
            style={{ color: "#000" }}
          >
            Category
          </Link>{" "}
          <Link
            onClick={() => setIsCategory(false)}
            to="/main"
            style={{ color: "#000" }}
          >
            Locations
          </Link>
        </Navbar>
      </Router>
    </React.Fragment>
  );
}

export default App;
