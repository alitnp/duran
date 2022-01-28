import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	newProducts: null,
	bestSellers: null,
	categories: null,
	brands: null,
};

export const homeReducer = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setHomeNewProducts: (state, { payload }) => {
			state.newProducts = payload;
		},
		setHomeCategories: (state, { payload }) => {
			state.categories = payload;
		},
		setHomeBrands: (state, { payload }) => {
			state.brands = payload;
		},
		setHomeBestSellers: (state, { payload }) => {
			state.bestSellers = payload;
		},
	},
});

export const {
	setHomeNewProducts,
	setHomeCategories,
	setHomeBrands,
	setHomeBestSellers,
} = homeReducer.actions;
export default homeReducer.reducer;
