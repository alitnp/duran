import { createSlice } from '@reduxjs/toolkit';

const initialState = { loading: false, searchResults: null };

export const resultReducer = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResultLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setResultSearchResult: (state, { payload }) => {
      state.searchResults = payload;
    },
  },
});

export const { setResultLoading, setResultSearchResult } =
  resultReducer.actions;
export default resultReducer.reducer;
