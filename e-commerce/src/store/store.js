import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/index.js";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = applyMiddleware(thunk, logger);

export const store = createStore(reducers, middlewares);
