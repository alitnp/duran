import ProductCard from 'components/Global/ProductCard/ProductCard';
import { useEffect, useRef, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

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

const ProductsRow = ({ name }) => {
	//states
	const [noRight, setNoRight] = useState(false);
	const [noLeft, setNoLeft] = useState(false);

	//hooks
	const rowRef = useRef();

	//effects
	useEffect(() => {
		setArrowKeys(rowRef);
	}, []);

	//functions
	const setArrowKeys = (ref) => {
		const {
			current: { scrollLeft, clientWidth, scrollWidth },
		} = ref;
		scrollLeft > -2 && scrollLeft < 2 ? setNoRight(true) : setNoRight(false);
		scrollLeft * -1 + clientWidth > scrollWidth - 5
			? setNoLeft(true)
			: setNoLeft(false);
	};
	const scrollRight = () => {
		rowRef.current.scrollLeft += rowRef.current.clientWidth;
	};
	const scrollLeft = () => {
		rowRef.current.scrollLeft -= rowRef.current.clientWidth;
	};

	return (
		<>
			<div className='mb-2 flex'>
				<h4 className='ml-4 border-b-2 border-d-primary pl-4 font-semibold pb-[5px]'>
					{name}
				</h4>
				<div className='border-b border-d-border-gray w-full text-left text-d-primary'>
					همه
				</div>
			</div>
			<div className='relative mb-16'>
				<div
					className='flex scroll-smooth mb-8 overflow-x-auto snap-x horizental-scroll  scrol hidden-scroll-bar'
					ref={rowRef}
					onScroll={() => setArrowKeys(rowRef)}
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
		</>
	);
};

export default ProductsRow;
