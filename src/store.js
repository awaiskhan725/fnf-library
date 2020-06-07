import { searchContact } from "./reducers";
import { createStore } from "redux";

export const store = createStore(searchContact);
