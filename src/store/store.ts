import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./reducers/UserSlice";
import itemsReducer from "./reducers/ItemsSlice";
import cartReducer from './reducers/CartSlice'

const rootReducer = combineReducers({
  userReducer,
  itemsReducer,
  cartReducer
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
