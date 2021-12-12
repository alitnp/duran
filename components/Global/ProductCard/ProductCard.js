import Image from 'next/image';

const ProductCard = ({ info }) => {
	return (
		<div className='relative group'>
			<div className='absolute top-0 right-0 opacity-100 '>
				<div className='relative border w-52 h-72'>
					{info?.secondImage && (
						<Image
							src={info.secondImage}
							layout='fill'
							objectFit='cover'
							objectPosition='center center'
						/>
					)}
				</div>
			</div>
			<div className='relative transition-opacity duration-500 bg-red-400 border opacity-100 w-52 h-72 group-hover:opacity-0'>
				{info?.firstImage && (
					<Image
						src={info.firstImage}
						layout='fill'
						objectFit='cover'
						objectPosition='center center'
					/>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
