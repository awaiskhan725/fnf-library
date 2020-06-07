import { searchContact, onRequestData } from "./reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";

// async redux middleware
import thunk from "redux-thunk";

export const store = createStore(
  combineReducers({ searchContact, onRequestData }),
  applyMiddleware(thunk)
);
