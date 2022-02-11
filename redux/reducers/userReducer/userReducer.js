import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { loggedIn: false, userDetail: null, userWishlist: null, userAddresses: null },
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
  },
});

export const { setLoggedIn, setUserDetail, setUserWishlist, setUserAddresses } =
  userSlice.actions;
export default userSlice.reducer;
