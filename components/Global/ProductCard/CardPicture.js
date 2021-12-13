import Image from 'next/image';

const CardPicture = ({ firstImage, secondImage }) => {
	return (
		<div className='relative '>
			<div className='absolute top-0 right-0 opacity-100 '>
				<div className='relative border w-52 h-72'>
					{secondImage && (
						<Image
							src={secondImage}
							layout='fill'
							objectFit='cover'
							objectPosition='center center'
							draggable='false'
						/>
					)}
				</div>
			</div>
			<div className='relative transition-opacity duration-500 bg-red-400 opacity-100 w-52 h-72 group-hover:opacity-0 '>
				{firstImage && (
					<Image
						src={firstImage}
						layout='fill'
						objectFit='cover'
						objectPosition='center center'
						className='border'
						draggable='false'
					/>
				)}
			</div>
		</div>
	);
};

export default CardPicture;
