import Image from 'next/image';
import CardPicture from './CardPicture';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import Tooltip from './../Tootip/Tooltip';
import { persianNum, Separator } from '../../../helpers/persianTools';

const ProductCard = ({ info, className }) => {
	return (
		<div className={`relative overflow-hidden group shrink-0 ${className}`}>
			<div className='absolute z-10 flex w-1/2 px-2 py-1 text-lg transition-all duration-300 -translate-x-1/2 bg-white rounded-md shadow-md justify-evenly group-hover:top-2 -top-8 left-1/2'>
				<FiShoppingCart className='cursor-pointer' />
				<AiOutlineHeart className='cursor-pointer' />
				<FiSearch className='cursor-pointer' />
			</div>
			<CardPicture
				firstImage={info.firstImage}
				secondImage={info.secondImage}
			/>
			<div>
				<p className='mt-1 font-medium'>{info.persianName}</p>
				<p className='font-medium'>{info.englishName}</p>
				<p className='mt-2 text-xs text-d-faded-text'>{info.categories}</p>
				<p className='text-xs text-d-faded-text'>
					{info.sizes.map((item, index) => {
						if (index === 0) return persianNum(item);
						return ' - ' + persianNum(item);
					})}
				</p>
				<p className='mt-2 text-lg font-bold text-center'>
					{Separator(persianNum(info.price)) + ' تومان'}
				</p>
			</div>
		</div>
	);
};

export default ProductCard;
