import Image from 'next/image';
import Link from 'next/link';
import routes from 'utils/constants/routes';

const Featured = ({ image, english, persian, id }) => {
	return (
		<Link href={routes.product.path + "?id=" + id} passHref>
			<a className='relative border cursor-pointer' style={{ aspectRatio: '2/1' }}>
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
					<p className='mb-0 text-d-bg-color'>{english}</p>
					<p className='mb-0 text-d-bg-color'>{persian}</p>
				</div>
			</a>
		</Link>
	);
};

export default Featured;
