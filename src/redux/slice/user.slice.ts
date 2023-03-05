import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  fav: [],
  totalPurchase: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state: any, action: any) => {
      state.cart.push(action.payload);
    },
    // remove from cart
    removeFromCart: (state: any, action: any) => {
      state.cart = state.cart.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
    //add value to totaladd value to total
    addToTotalPurchase: (state: any, action: any) => {
      state.totalPurchase.push(action.payload);
    },

    //remove value to total
    removeToTotalPurchase: (state: any, action: any) => {
      state.totalPurchase = state.totalPurchase.filter(
        (item: any) => item.price !== action.payload.id
      );
    },

  },
});

export const { addToCart, removeFromCart, addToTotalPurchase,  removeToTotalPurchase} =
  userSlice.actions;
export default userSlice.reducer;
