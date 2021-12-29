import Image from 'next/image';

const CardPicture = ({ firstImage, secondImage }) => {
	return (
		<div className='relative '>
			<div className='absolute top-0 right-0 opacity-100 '>
				<div className='relative '>
					{secondImage && (
						<Image
							src={secondImage}
							width='180px'
							height='270px'
							objectFit='cover'
							draggable='false'
						/>
					)}
				</div>
			</div>
			<div className='relative transition-opacity duration-500 opacity-100 group-hover:opacity-0 '>
				{firstImage && (
					<Image
						src={firstImage}
						width='180px'
						height='270px'
						objectFit='cover'
						draggable='false'
					/>
				)}
			</div>
		</div>
	);
};

export default CardPicture;
