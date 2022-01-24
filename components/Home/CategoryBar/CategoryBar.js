import Link from 'next/link';

const CategoryBar = () => {
	return (
		<div className='flex justify-center py-4 my-4 border-t border-b md:justify-between'>
			<div className='flex items-center'>
				<Link href='/'>
					<span>مردانه</span>
				</Link>
				<div className='w-1.5 h-1.5 mx-3 rounded-full bg-d-text' />
				<Link href='/'>
					<span>زنانه</span>
				</Link>
				<div className='w-1.5 h-1.5 mx-3 rounded-full bg-d-text' />
				<Link href='/'>
					<span>کودک</span>
				</Link>
			</div>
			<div className='items-center hidden md:flex '>
				<p className='mb-0 ml-2 text-xs text-d-faded-text'>
					کفشت رو پیدا نکردی؟
				</p>
				<Link href='/'>
					<p className='mb-0 text-d-primary'>سفارش کفش</p>
				</Link>
			</div>
		</div>
	);
};

export default CategoryBar;
