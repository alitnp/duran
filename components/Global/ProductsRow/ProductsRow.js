import ProductCard from 'components/Global/ProductCard/ProductCard';

const shoes = [
	{
		firstImage: '/image/shoes/jordan-2.jpg',
		secondImage: '/image/shoes/jordan-1.webp',
	},
];

const ProductsRow = () => {
	return (
		<div className='flex'>
			{shoes.map((item, idx) => (
				<>
					<ProductCard key={item.firstImage} info={item} />
					{idx !== shoes.length - 1 && <div className='w-4' />}
				</>
			))}
		</div>
	);
};

export default ProductsRow;
