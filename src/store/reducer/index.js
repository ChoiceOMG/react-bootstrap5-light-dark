// import the reducers
import { combineReducers } from "redux";
import { ProcessReducer } from "./process";

// define the object and call the action
const rootReducers = combineReducers({
  ProcessReducer: ProcessReducer,
});
// else return default root reducer
export default rootReducers;