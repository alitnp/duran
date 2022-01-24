import Image from 'next/image';

const CardPicture = ({ firstImage, secondImage, alt }) => {
	return (
		<div className='relative border'>
			<div className='absolute top-0 right-0 opacity-100 '>
				<div className='relative '>
					{secondImage && (
						<Image
							src={secondImage}
							width='180px'
							height='270px'
							objectFit='cover'
							draggable='false'
							alt={alt}
						/>
					)}
				</div>
			</div>
			<div
				className={`relative bg-d-bg-color transition-opacity duration-500 opacity-100 ${
					secondImage && 'group-hover:opacity-0'
				}`}
			>
				{firstImage && (
					<Image
						src={firstImage}
						width='180px'
						height='270px'
						objectFit='cover'
						draggable='false'
						alt={alt}
					/>
				)}
			</div>
		</div>
	);
};

export default CardPicture;
