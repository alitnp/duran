import Image from 'next/image';

const SocialLink = ({ image, to }) => {
	return (
		<a
			className='flex items-center justify-center w-10 h-10 mx-1 rounded-full cursor-pointer bg-zinc-700 hover:bg-zinc-500'
			href={to}
			target='_blank'
		>
			<Image
				src={image}
				width='18px'
				height='18px'
				objectFit='contain'
				objectPosition='center'
			/>
		</a>
	);
};

export default SocialLink;
