import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import itemIdReducer from "./itemIdReducer";

const rootReducer = combineReducers({
  itemReducer,
  itemIdReducer,
});

export default rootReducer;
