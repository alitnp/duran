import { createSlice } from '@reduxjs/toolkit';

const initialState = { loading: false, brandsList: null };

export const brandsReducer = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setBrandsLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setBrandsList: (state, { payload }) => {
      state.brandsList = payload;
    },
    addProductsToBrand: (state, { payload }) => {
      const { index, products } = payload;
      state.brandsList[index].Products = products;
    },
  },
});

export const { setBrandsLoading, setBrandsList, addProductsToBrand } =
  brandsReducer.actions;
export default brandsReducer.reducer;
