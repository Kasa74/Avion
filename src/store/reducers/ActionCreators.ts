import { AppDispatch } from "../store";
import { IItems, itemsSlice } from "./ItemsSlice";
import { IUser, userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await fetch(
      "https://65e848554bb72f0a9c4ed3e6.mockapi.io/users"
    );
    const json: IUser = await response.json();
    dispatch(userSlice.actions.usersFetchingSuccess(json));
  } catch (e: any) {
    dispatch(userSlice.actions.usersFetchingError(e.message));
  }
};

export const fetchItems = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(itemsSlice.actions.itemsFetching());
    const response = await fetch(
      "https://65e848554bb72f0a9c4ed3e6.mockapi.io/itm"
    );
    const json: IItems[] = await response.json();
    dispatch(itemsSlice.actions.itemsFetchingSuccess(json));
  } catch (e: any) {
    dispatch(itemsSlice.actions.itemsFetchingError(e.message));
  }
};
