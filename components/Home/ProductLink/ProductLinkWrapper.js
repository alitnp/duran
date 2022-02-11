import LinkInput from 'components/Home/ProductLink/LinkInput';
import Image from 'next/image';

const ProductLinkWrapper = () => {


	return (
		<div className='flex items-center py-28 '>
			<LinkInput />
			<div
				className='relative hidden w-full h-full mr-auto md:block'
				style={{ height: '500px', maxWidth: '50%' }}
			>
				<Image src='/image/link-input.jpg' layout='fill' objectFit='cover' />
			</div>
		</div>
	);
};

export default ProductLinkWrapper;
