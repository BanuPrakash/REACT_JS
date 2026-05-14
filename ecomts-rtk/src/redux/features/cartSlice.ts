import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Product } from "../../model/types";

type CartState = {
    cartItems: CartItem[],
    total: number,
    quantity: number
}

const initialState:CartState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<Product>) => {
      state.cartItems.push({...action.payload, qty: 1, amount: action.payload.price})
      state.total += state.total + action.payload.price;
      state.quantity++;
    },
    increment: (state, action:PayloadAction<number>) => {
     const item = state.cartItems.find(item => item.id === action.payload);
     if(item?.qty) {
        item.qty++;
        item.amount = item.price * item.qty;
        state.total = state.cartItems.map(item => item.amount).reduce((v1, v2) => v1+ v2, 0.0)
     }
    },
    clearCart: (state) => {
        state.cartItems = [];
        state.total = 0;
        state.quantity = 0;
    },
  },
});

export const cartReducer = cartSlice.reducer // used for root reducer
export const {addToCart, clearCart, increment} = cartSlice.actions // used by react view components
