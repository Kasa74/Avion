import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IItem {
  id: number;
  name: string;
  price: number;
  category: string;
  height: number;
  width: number;
  depth: number;
  designer: string;
  description: string;
  img: string;
}

interface ItemsState {
  items: IItem[];
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
    itemsFetchingSuccess(state, action: PayloadAction<IItem[]>) {
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
