import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { loggedIn: false, userDetail: null, userWishlist: [] },
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
  },
});

export const { setLoggedIn, setUserDetail, setUserWishlist } =
  userSlice.actions;
export default userSlice.reducer;
