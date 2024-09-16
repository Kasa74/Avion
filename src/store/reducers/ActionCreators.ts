import { AppDispatch } from "../store";
import { IUser, userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await fetch(
      "https://65e848554bb72f0a9c4ed3e6.mockapi.io/users"
    );
    if (!response.ok) {
      throw new Error("Response is not ok");
    }
    const data: IUser[] = await response.json();
  } catch (e) {}
};
