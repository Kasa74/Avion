import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IItems {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
}

interface ItemsState {
  items: IItems[];
  isLoading: boolean;
  error: string;
}
const initialState: ItemsState = {
  items: [],
  isLoading: false,
  error: "",
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemsFetching(state) {
      state.isLoading = true;
    },
    itemsFetchingSuccess(state, action: PayloadAction<IItems[]>) {
      state.isLoading = false;
      state.error = "";
      state.items = action.payload;
    },
    itemsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default itemsSlice.reducer;
