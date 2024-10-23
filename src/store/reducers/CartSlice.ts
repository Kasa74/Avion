import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItems {
    id: number;
    name: string;
    price: number;
    category: string;
    height: number;
    width: number;
    depth: number;
    designer: string;
    description: string
    img: string;
    count: number;
}

interface CartState {
    cartItems: ICartItems[],
    isLoading: boolean,
    error: string
}

const initialState:CartState = {
    cartItems: [],
    isLoading: false,
    error: ""
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartFetching(state){
            state.isLoading = true;
        },
        cartFetchingSuccess(state, action:PayloadAction<ICartItems[]>){
            state.isLoading = false;
            state.cartItems = action.payload
        },
        cartFetchingError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        cartAddItem(state, action: PayloadAction<ICartItems>){
            const cartItemId = state.cartItems.findIndex(item => item.id === action.payload.id);
            if(cartItemId !== -1){
                state.cartItems[cartItemId].count += action.payload.count
            } else {
                state.cartItems =  [...state.cartItems, action.payload]
            }
        },
        cartItemPlus(state, action:PayloadAction<ICartItems>) {
            const cartItemId = state.cartItems.findIndex(item => item.id === action.payload.id);

            state.cartItems[cartItemId].count += 1
        },
        cartItemMinus(state, action:PayloadAction<ICartItems>) {
            const cartItemId = state.cartItems.findIndex(item => item.id === action.payload.id);

            state.cartItems[cartItemId].count -= 1

            if(state.cartItems[cartItemId].count === 0){
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            } 

        },
        setCartItemCount(state, action: PayloadAction<ICartItems>){
            const cartItemId = state.cartItems.findIndex(item => item.id === action.payload.id);

            state.cartItems[cartItemId].count = action.payload.count
            if(state.cartItems[cartItemId].count === 0) {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        }
    }
})

export default cartSlice.reducer