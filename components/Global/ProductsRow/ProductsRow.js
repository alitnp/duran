import ProductCard from 'components/Global/ProductCard/ProductCard';
import { useEffect, useRef, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import style from './style.module.css';

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
	//states
	const [noRight, setNoRight] = useState(false);
	const [noLeft, setNoLeft] = useState(false);

	//hooks
	const ref = useRef();

	//effects
	useEffect(() => {
		setArrowKeys();

		console.log(
			ref.current.scrollWidth,
			ref.current.clientWidth,
			ref.current.scrollLeft
		);
	}, []);

	//functions
	const setArrowKeys = () => {
		console.log(
			ref.current.scrollWidth,
			ref.current.clientWidth,
			ref.current.scrollLeft
		);
		ref.current.scrollLeft > -2 && ref.current.scrollLeft < 2
			? setNoRight(true)
			: setNoRight(false);
		ref.current.scrollLeft * -1 + ref.current.clientWidth >
		ref.current.scrollWidth - 5
			? setNoLeft(true)
			: setNoLeft(false);
	};
	const scrollRight = () => {
		ref.current.scrollLeft += ref.current.clientWidth;
	};
	const scrollLeft = () => {
		ref.current.scrollLeft -= ref.current.clientWidth;
	};

	return (
		<div className='relative'>
			<div
				className={`flex scroll-smooth mb-8 overflow-x-auto snap-x horizental-scroll  scrol ${style.productsRow}`}
				ref={ref}
				onScroll={setArrowKeys}
			>
				{shoes.map((item, idx) => (
					<ProductCard
						key={idx}
						info={item}
						className={`${idx !== 0 && 'mr-6'} snap-start`}
					/>
				))}
				{!noRight && (
					<div
						onClick={scrollRight}
						className='absolute bg-white rounded-full p-2 flex items-center justify-center shadow-md top-1/2 -translate-y-1/2 cursor-pointer right-2'
					>
						<MdArrowForwardIos />
					</div>
				)}
				{!noLeft && (
					<div
						onClick={scrollLeft}
						className='absolute bg-white rounded-full p-2 flex items-center justify-center shadow-md top-1/2 -translate-y-1/2 cursor-pointer left-2'
					>
						<MdArrowForwardIos className='-scale-100' />
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductsRow;
