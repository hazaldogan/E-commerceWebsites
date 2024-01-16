import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { userReducer } from "./userReducers";
import { productReducer } from "./productReducer";
import { shopCartReducer } from "./shopCartReducer";
import { storeReducer } from "./storeReducer";

export const reducers = combineReducers({
  productReducer,
  userReducer,
  globalReducer,
  shopCartReducer,
  storeReducer,
});
