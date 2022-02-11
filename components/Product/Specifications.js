const Specifications = ({ desc }) => {
	return (
		<div className='p-4 mt-3 mb-2 border-d-border-gray bg-d-gray'>
			<div className=''>
				<p className='font-semibold '>توضیحات</p>
				<div
					className='text-sm'
					dangerouslySetInnerHTML={{ __html: desc }}
				></div>
			</div>
			{/* <div className=''>
				<span className='font-semibold'>مشخصات</span>
				<div className='group '>
					<div className='flex justify-between px-1 py-1 text-sm bg-gray-100'>
						<span>دسته بندی</span>
						<span>{category}</span>
					</div>
					<div className='flex justify-between px-1 py-1 text-sm '>
						<span>مدل</span>
						<span>{model}</span>
					</div>
					<div className='flex justify-between px-1 py-1 text-sm bg-gray-100'>
						<span>رنگ</span>
						<span>{color}</span>
					</div>
					<div className='flex justify-between px-1 py-1 text-sm '>
						<span>کشور ساخت</span>
						<span>{madeIn}</span>
					</div>
					<div className='flex justify-between px-1 py-1 text-sm bg-gray-100'>
						<span>جنس</span>
						<span>{material}</span>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Specifications;
