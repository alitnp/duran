import { createSlice } from '@reduxjs/toolkit';

const initialState = { newProducts: null };

export const homeReducer = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setHomeNewProducts: (state, { payload }) => {
			state.newProducts = payload;
		},
	},
});

export const { setHomeNewProducts } = homeReducer.actions;
export default homeReducer.reducer;
