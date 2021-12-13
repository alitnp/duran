import ProductCard from 'components/Global/ProductCard/ProductCard';
import { useEffect, useRef, useState } from 'react';

const shoes = [
	{
		firstImage: '/image/shoes/jordan-2.jpg',
		secondImage: '/image/shoes/jordan-1.webp',
		persianName: 'نایکی - جردن ۱ رترو',
		englishName: 'NIKE - Jordan 1 Retro',
		sizes: ['39', '40', '41', '42'],
		categories: 'مردانه',
		price: 2200000,
	},
	{
		firstImage: '/image/shoes/jordan-2.jpg',
		secondImage: '/image/shoes/jordan-1.webp',
		persianName: 'نایکی - جردن ۱ رترو',
		englishName: 'NIKE - Jordan 1 Retro',
		sizes: ['39', '40', '41', '42'],
		categories: 'مردانه',
		price: 2200000,
	},
	{
		firstImage: '/image/shoes/jordan-2.jpg',
		secondImage: '/image/shoes/jordan-1.webp',
		persianName: 'نایکی - جردن ۱ رترو',
		englishName: 'NIKE - Jordan 1 Retro',
		sizes: ['39', '40', '41', '42'],
		categories: 'مردانه',
		price: 2200000,
	},
	{
		firstImage: '/image/shoes/jordan-2.jpg',
		secondImage: '/image/shoes/jordan-1.webp',
		persianName: 'نایکی - جردن ۱ رترو',
		englishName: 'NIKE - Jordan 1 Retro',
		sizes: ['39', '40', '41', '42'],
		categories: 'مردانه',
		price: 2200000,
	},
	{
		firstImage: '/image/shoes/jordan-2.jpg',
		secondImage: '/image/shoes/jordan-1.webp',
		persianName: 'نایکی - جردن ۱ رترو',
		englishName: 'NIKE - Jordan 1 Retro',
		sizes: ['39', '40', '41', '42'],
		categories: 'مردانه',
		price: 2200000,
	},
];

const ProductsRow = () => {
	const ref = useRef();

	return (
		<div
			className='flex pb-4 mb-8 overflow-x-auto snap-x horizental-scroll'
			ref={ref}
		>
			{shoes.map((item, idx) => (
				<ProductCard
					key={idx}
					info={item}
					className={`${idx !== 0 && 'mr-6'} snap-start`}
				/>
			))}
		</div>
	);
};

export default ProductsRow;
