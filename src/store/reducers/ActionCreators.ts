import { AppDispatch } from "../store";
import { IItem, itemsSlice } from "./ItemsSlice";
import { IUser, userSlice } from "./UserSlice";

const BASE_URL = "https://65e848554bb72f0a9c4ed3e6.mockapi.io";

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

export const fetchItems = (limit: number) => async (dispatch: AppDispatch) => {
  try {
    let url_items = new URL(BASE_URL + "/item");
    url_items.searchParams.append("page", "1");
    url_items.searchParams.append("limit", limit.toString());
    dispatch(itemsSlice.actions.itemsFetching());
    const response = await fetch(url_items);
    setTimeout(async () => {
      if (response.status === 200) {
        const json: IItem[] = await response.json();
        dispatch(itemsSlice.actions.itemsFetchingSuccess(json));
      } else {
        throw new Error("Failed to load resources");
      }
    }, 2000);
  } catch (e: any) {
    dispatch(itemsSlice.actions.itemsFetchingError(e.message));
  }
};

export const fetchOneItem = (id: number) => async (dispatch: AppDispatch) => {
  try {
    let url_item = new URL(BASE_URL + "/item");
    url_item.searchParams.append("id", String(id));
    dispatch(itemsSlice.actions.itemsFetching());
    const response = await fetch(url_item);
    if (response.status === 200) {
      const json: IItem[] = await response.json();
      dispatch(itemsSlice.actions.itemsFetchingSuccess(json));
    } else {
      throw new Error("Failed to load resources");
    }
  } catch (e: any) {
    dispatch(itemsSlice.actions.itemsFetchingError(e.message));
  }
};
