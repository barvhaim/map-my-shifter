import { combineReducers } from "redux";
import FromSTIXReducer from "./from_stix";
import ToSTIXReducer from "./to_stix";

const combinedReducers = combineReducers({
  fromStix: FromSTIXReducer,
  toStix: ToSTIXReducer,
});

export default combinedReducers;
