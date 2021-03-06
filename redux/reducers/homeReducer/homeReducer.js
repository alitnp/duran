import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  newProducts: null,
  bestSellers: null,
  featured: null,
  categories: null,
  brands: null,
  needRedirect: null,
  slides: null,
  provinceList: null,
  categoriesProducts: null,
};

export const homeReducer = createSlice({
  name: "home",
  initialState,
  reducers: {
    setUserLoading: (state, { payload }) => {
      state.loading = payload;
    },
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
    setHomeFeatured: (state, { payload }) => {
      state.featured = payload;
    },
    setNeedRedirect: (state, { payload }) => {
      state.needRedirect = payload;
    },
    setHomeSlides: (state, { payload }) => {
      state.slides = payload;
    },
    setHomeProvineList: (state, { payload }) => {
      state.provinceList = payload;
    },
    setHomeCategoriesProducts: (state, { payload }) => {
      state.categoriesProducts = payload;
    },
  },
});

export const {
  setUserLoading,
  setHomeNewProducts,
  setHomeCategories,
  setHomeBrands,
  setHomeBestSellers,
  setHomeFeatured,
  setNeedRedirect,
  setHomeSlides,
  setHomeProvineList,
  setHomeCategoriesProducts,
} = homeReducer.actions;
export default homeReducer.reducer;
