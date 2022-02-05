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
  },
});

export const { setBrandsLoading, setBrandsList } = brandsReducer.actions;
export default brandsReducer.reducer;
