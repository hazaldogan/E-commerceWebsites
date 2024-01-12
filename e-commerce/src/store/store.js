import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/index.js";
import thunk from "redux-thunk";

const middlewares = applyMiddleware(thunk, logger);

export const store = createStore(reducers, middlewares);
