import Image from 'next/image';

const RedIcon = ({ onClick }) => {
	return (
		<div
			onClick={onClick}
			className='absolute -translate-y-1/2 cursor-pointer select-none w-9 md:w-11 md-h-11 h-9 md:-left-11 -left-9 top-1/2'
		>
			<div className='flex items-center justify-center w-full h-full bg-d-primary '>
				<div className='relative w-5 h-5 md:w-6 md:h-6'>
					<Image src='/icons/cart.png' layout='fill' objectFit='contain' />
				</div>
				<div className='absolute flex items-center justify-center w-5 h-5 text-sm rounded-full -left-2 -top-2 bg-d-secondary text-d-text'>
					۳
				</div>
			</div>
		</div>
	);
};

export default RedIcon;
