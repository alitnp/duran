import Image from 'next/image';

const RedIcon = ({ onClick }) => {
	return (
		<div
			onClick={onClick}
			className='absolute flex items-center justify-center -translate-y-1/2 cursor-pointer select-none w-9 md:w-11 md-h-11 h-9 bg-d-primary md:-left-11 -left-9 top-1/2'
		>
			<div className='relative w-5 h-5 md:w-6 md:h-6'>
				<Image src='/icons/cart.png' layout='fill' objectFit='contain' />
			</div>
		</div>
	);
};

export default RedIcon;
