import Image from 'next/image';

const RedIcon = ({ onClick }) => {
	return (
		<div
			onClick={onClick}
			className='absolute flex items-center justify-center -translate-y-1/2 cursor-pointer select-none w-11 h-11 bg-d-primary -left-11 top-1/2'
		>
			<Image
				src='/icons/cart.png'
				width='24px'
				height='24px'
				objectFit='contain'
			/>
		</div>
	);
};

export default RedIcon;
