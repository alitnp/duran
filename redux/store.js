import { configureStore } from '@reduxjs/toolkit';
import cart from 'redux/reducers/cartReducer/cartReducer';
import home from 'redux/reducers/homeReducer/homeReducer';
import user from 'redux/reducers/userReducer/userReducer';
import result from 'redux/reducers/resultReducer/resultReducer';
import brands from 'redux/reducers/brandsReducer/brandsReducer';
import request from './reducers/requestReducer/requestReducer';


export const store = configureStore({
  reducer: { cart, user, home, result, brands, request },
});
