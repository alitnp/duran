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
	const [dragging, setDragging] = useState(false);
	const [startDragingPoint, setStartDragingPoint] = useState();
	const [currentMousePoint, setCurrentMousePoint] = useState();
	const [lastMoveAmount, setLastMoveAmount] = useState(0);
	const ref = useRef();

	useEffect(() => {
		const maxScroll = ref.current.scrollWidth - ref.current.clientWidth;
		const moveAmount = startDragingPoint - currentMousePoint;

		if (dragging) {
			console.log(moveAmount);
			// console.log(startDragingPoint - currentMousePoint);
			// console.log(ref.current.scrollLeft);
			const currentMoveShouldBe = (ref.current.scrollLeft =
				ref.current.scrollLeft);
		}
	});

	return (
		<div
			className='flex pb-4 mb-8 overflow-x-auto horizental-scroll '
			// onScroll={(e) => console.log(ref.current.scrollLeft)}
			onMouseDown={(e) => {
				setStartDragingPoint(e.clientX);
				setDragging(true);
			}}
			onMouseUp={() => {
				setDragging(false);
				setLastMoveAmount(0);
			}}
			onMouseLeave={() => setDragging(false)}
			onMouseMove={(e) => setCurrentMousePoint(e.clientX)}
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
