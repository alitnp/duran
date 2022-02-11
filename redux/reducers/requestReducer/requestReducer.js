import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  requestList: null,


};

export const requestReducer = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequestLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setRequestList: (state, { payload }) => {
      state.requestList = payload;
    }
  },
});

export const {
  setRequestLoading,
  setRequestList
} = requestReducer.actions;
export default requestReducer.reducer;
