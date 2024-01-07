import { legacy_createStore } from "redux";
import reducer from "./store/todos";

const store = legacy_createStore(
  reducer
);

export default store;