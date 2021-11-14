import { combineReducers } from "redux";
import STIXReducer from "./stix";
import FromSTIXReducer from "./from_stix";
import ToSTIXReducer from "./to_stix";
var combinedReducers = combineReducers({
  stix: STIXReducer,
  fromStix: FromSTIXReducer,
  toStix: ToSTIXReducer,
});
export default combinedReducers;
