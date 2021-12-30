const ProductGrid = ({ children }) => {
	return (
		<div className='grid content-around justify-between grid-cols-2 gap-x-4 md:gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
			{children}
		</div>
	);
};

export default ProductGrid;