const Specifications = ({ desc, category, model, color, madeIn, material }) => {
	return (
		<>
			<div className=''>
				<span className='font-semibold'>توضیحات</span>
				<p className='text-sm'>{desc}</p>
			</div>
			<div className='pb-2 mb-2 border-b border-d-border-gray'>
				<span className='font-semibold'>مشخصات</span>
				<div className='group '>
					<div className='flex justify-between text-sm py-1 px-1 bg-gray-100'>
						<span>دسته بندی</span>
						<span>{category}</span>
					</div>
					<div className='flex justify-between text-sm py-1 px-1 '>
						<span>مدل</span>
						<span>{model}</span>
					</div>
					<div className='flex justify-between text-sm py-1 px-1 bg-gray-100'>
						<span>رنگ</span>
						<span>{color}</span>
					</div>
					<div className='flex justify-between text-sm py-1 px-1 '>
						<span>کشور ساخت</span>
						<span>{madeIn}</span>
					</div>
					<div className='flex justify-between text-sm py-1 px-1 bg-gray-100'>
						<span>جنس</span>
						<span>{material}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Specifications;
