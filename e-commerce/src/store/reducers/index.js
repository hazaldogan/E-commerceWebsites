import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { userReducer } from "./userReducers";
import { productReducer } from "./productReducer";

export const reducers = combineReducers({
  productReducer,
  userReducer,
  globalReducer,
});
