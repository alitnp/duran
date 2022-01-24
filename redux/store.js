import { configureStore } from '@reduxjs/toolkit';
import cart from 'redux/reducers/cartReducer/cartReducer';
import home from 'redux/reducers/homeReducer/homeReducer';
import user from 'redux/reducers/userReducer/userReducer';

export const store = configureStore({ reducer: { cart, user, home } });
