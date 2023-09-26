import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

export const cookieSlice = createSlice({
  name: "CookieDough",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      state.cart.push(newItem);
    },
    removeItemFromCart: (state, action) => {
      const itemToRemove = action.payload;
      state.cart = state.cart.filter((item) => item !== itemToRemove);
    },
  },
});
