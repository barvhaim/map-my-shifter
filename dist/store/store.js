import { createStore } from "redux";
import CombinedReducers from "./reducers";
var store = createStore(
  CombinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
