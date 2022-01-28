import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: { loggedIn: false, userDetail: null },
	reducers: {
		setLoggedIn: (state, { payload }) => {
			state.loggedIn = payload;
		},
		setUserDetail: (state, { payload }) => {
			state.userDetail = payload;
		},
	},
});

export const { setLoggedIn, setUserDetail } = userSlice.actions;
export default userSlice.reducer;
