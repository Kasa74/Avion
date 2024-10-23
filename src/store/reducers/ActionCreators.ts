

import { AppDispatch } from "../store";
import { IItems, itemsSlice } from "./ItemsSlice";
import { IUser, userSlice } from "./UserSlice";

const BASE_URL ='https://65e848554bb72f0a9c4ed3e6.mockapi.io'

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
    let url_items = BASE_URL + '/item'
    dispatch(itemsSlice.actions.itemsFetching());
    const response = await fetch(
      url_items
    );
    if(response.status === 200){
      const json: IItems[] = await response.json();
      dispatch(itemsSlice.actions.itemsFetchingSuccess(json));

    } else {
      throw new Error('Failed to load resources')
    }

  } catch (e: any) {
    dispatch(itemsSlice.actions.itemsFetchingError(e.message));
  }
};

export const fetchOneItem = (id:number) => async (dispatch: AppDispatch) => {
  try {
    let url_item =new URL(BASE_URL + '/item');
    url_item.searchParams.append('id', String(id))
    dispatch(itemsSlice.actions.itemsFetching());
    const response = await fetch(url_item)
    if(response.status === 200){
      const json:IItems[] = await response.json();
      dispatch(itemsSlice.actions.itemsFetchingSuccess(json))
    } else {
      throw new Error('Failed to load resources')
    }
  } catch(e:any) {
    dispatch(itemsSlice.actions.itemsFetchingError(e.message))
  }
}
