import { createStore } from "redux";
import { reducer } from "./itemsReducer";

export const store = createStore(reducer);
