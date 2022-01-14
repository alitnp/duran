const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
	items: [
		{
			firstImage: '/image/shoes/jordan-2.jpg',
			secondImage: '/image/shoes/jordan-1.webp',
			persianName: 'نایکی - جردن ۱ رترو',
			englishName: 'NIKE - Jordan 1 Retro',
			sizes: '40',
			categories: 'مردانه',
			price: 2200000,
			quantity: 1,
			id: 1,
		},
		{
			firstImage: '/image/shoes/jordan-2.jpg',
			secondImage: '/image/shoes/jordan-1.webp',
			persianName: 'نایکی - جردن ۱ رترو',
			englishName: 'NIKE - Jordan 1 Retro',
			sizes: '40',
			categories: 'مردانه',
			price: 2200000,
			quantity: 1,
			id: 2,
		},
	],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addItemToCart: (state, { payload }) => {
			state.items.push(payload);
		},
		removeItemFromCart: (state, { payload }) => {
			state.items.splice(payload, 1);
		},
		increaseCartItemQuantity: (state, { payload }) => {
			state.items[payload].quantity += 1;
		},
		decreaseCartItemQuantity: (state, { payload }) => {
			if (state.items[payload].quantity === 1) return;
			state.items[payload].quantity -= 1;
		},
	},
});

export const {
	addItemToCart,
	removeItemFromCart,
	increaseCartItemQuantity,
	decreaseCartItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
