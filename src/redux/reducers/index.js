import listReducer from "./listReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  // counter: counterReducer,
  listReducer,
});

export default allReducers;
