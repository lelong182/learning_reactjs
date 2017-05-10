import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import {apiMiddleware} from 'redux-api-middleware';
import rootReducer from "./reducers/rootReducer";

export default createStore(
  rootReducer,
  {},
  applyMiddleware(createLogger(), apiMiddleware)
);