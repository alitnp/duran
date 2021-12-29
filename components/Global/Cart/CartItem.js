import { persianNum } from 'helpers/persianTools';
import Image from 'next/image';
import { HiPlus, HiMinus } from 'react-icons/hi';

const CartItem = ({ info }) => {
	const test = {
		firstImage: '/image/shoes/jordan-2.jpg',
		secondImage: '/image/shoes/jordan-1.webp',
		persianName: 'نایکی - جردن ۱ رترو',
		englishName: 'NIKE - Jordan 1 Retro',
		sizes: '40',
		categories: 'مردانه',
		price: 2200000,
	};

	return (
		<div className='flex p-2 ml-6 text-sm border rounded-md  h-fit border-d-border-gray'>
			<div className='relative ml-2 '>
				<Image
					src={info.firstImage}
					width='80px'
					height='120px'
					objectFit='cover'
				/>
			</div>
			<div className='flex flex-col'>
				<p>{info.persianName}</p>
				<p>{info.englishName}</p>
				<p>سایز : {persianNum(info.sizes)}</p>
				<div className='flex items-center mt-auto'>
					<p className=''>تعداد :</p>
					<div className='flex items-center mr-auto '>
						<div className='ml-2 bg-gray-200 rounded cursor-pointer text-d-text'>
							<HiPlus />
						</div>
						<p className='text-lg '>۱</p>
						<div className='mr-2 bg-gray-200 rounded cursor-pointer text-d-text'>
							<HiMinus />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
