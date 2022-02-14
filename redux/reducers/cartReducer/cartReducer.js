import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartMenuOpen: false,
  items: [],
  tempAddToCart: null,
  needAnimation: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCartIsCartMenuOpen: (state, { payload }) => {
      state.isCartMenuOpen = payload;
    },
    addItemToCart: (state, { payload }) => {
      state.items.push(payload);
    },
    removeItemFromCart: (state, { payload }) => {
      state.items.splice(payload, 1);
    },
    increaseCartItemQuantity: (state, { payload }) => {
      state.items[payload].quantity += 1;
    },
    decreaseCartItemQuantity: (state, { payload }) => {
      if (state.items[payload].quantity === 1) return;
      state.items[payload].quantity -= 1;
    },
    setCartTempAddToCart: (state, { payload }) => {
      state.tempAddToCart = payload;
    },
    setCartNeedAnimation: (state, { payload }) => {
      state.needAnimation = payload;
    },
  },
});

export const {
  setCartIsCartMenuOpen,
  addItemToCart,
  removeItemFromCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  setCartTempAddToCart,
  setCartNeedAnimation,
} = cartSlice.actions;
export default cartSlice.reducer;
