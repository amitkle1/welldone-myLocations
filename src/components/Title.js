import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refresh } from "../redux/actions";
function Title() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, []);
  return (
    <div style={{ margin: "100px", textAlign: "center" }}>
      <h1>MyLocations</h1>
      <h3>Please select an action from the navbar </h3>
    </div>
  );
}

export default Title;
