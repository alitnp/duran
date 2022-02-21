import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    userDetail: null,
    userWishlist: null,
    userAddresses: null,
    loading: false,
    cartList: null,
    ordersList: null,
  },
  reducers: {
    setLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
    },
    setUserDetail: (state, { payload }) => {
      state.userDetail = payload;
    },
    setUserWishlist: (state, { payload }) => {
      state.userWishlist = payload;
    },
    setUserAddresses: (state, { payload }) => {
      state.userAddresses = payload;
    },
    setUserLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setUserCartList: (state, { payload }) => {
      state.cartList = payload;
    },
    setUserOrdersList: (state, { payload }) => {
      state.ordersList = payload;
    },
  },
});

export const {
  setLoggedIn,
  setUserDetail,
  setUserWishlist,
  setUserAddresses,
  setUserLoading,
  setUserCartList,
  setUserOrdersList,
} = userSlice.actions;
export default userSlice.reducer;
