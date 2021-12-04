import Image from 'next/image';

const Featured = ({ image, english, persian }) => {
	return (
		<div className='relative border' style={{ aspectRatio: '2/1' }}>
			<Image
				src={image}
				layout='fill'
				objectFit='cover'
				objectPosition='center center'
				priority
			/>
			<div
				className='absolute flex flex-col items-start justify-end w-full h-full p-4 '
				style={{
					background:
						'linear-gradient(0deg, rgba(0,0,0) 0%, rgba(0,0,0,0) 30%)',
				}}
			>
				<p className='text-d-bg-color'>{english}</p>
				<p className='text-d-bg-color'>{persian}</p>
			</div>
		</div>
	);
};

export default Featured;
