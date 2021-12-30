import CardPicture from './CardPicture';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { persianNum, Separator } from '../../../helpers/persianTools';
import { useState } from 'react';
import Link from 'next/link';

const ProductCardRow = ({ info, className, noSize, noCategory }) => {
	//states
	const [liked, setLiked] = useState(true);
	return (
		<div
			className={`relative overflow-hidden group shrink-0 select-none ${className}`}
		>
			<div className='absolute z-10 flex w-1/2 px-2 py-1 text-lg transition-all duration-300 -translate-x-1/2 bg-white rounded-md shadow-md justify-evenly group-hover:top-2 -top-8 left-1/2 text-d-text'>
				<FiShoppingCart className='cursor-pointer ' />
				{!liked && (
					<AiOutlineHeart
						className='cursor-pointer '
						onClick={() => setLiked(true)}
					/>
				)}
				{liked && (
					<AiFillHeart
						className='cursor-pointer fill-red-600'
						onClick={() => setLiked(false)}
					/>
				)}
				<FiSearch className='cursor-pointer' />
			</div>
			<CardPicture
				firstImage={info.firstImage}
				secondImage={info.secondImage}
			/>
			<div>
				<Link href={`/product?id=${info?.id}`}>
					<div className='cursor-pointer group'>
						<p className='mt-1 font-medium group-hover:underline'>
							{info.persianName}
						</p>
						<p className='font-medium group-hover:underline'>
							{info.englishName}
						</p>
					</div>
				</Link>
				{!noCategory && (
					<p className='mt-2 text-xs text-d-faded-text'>{info.categories}</p>
				)}
				{!noSize && (
					<p className='text-xs text-d-faded-text'>
						{info.sizes.map((item, index) => {
							if (index === 0) return persianNum(item);
							return ' - ' + persianNum(item);
						})}
					</p>
				)}
				<p className='mt-2  font-medium text-center'>
					{Separator(persianNum(info.price)) + ' تومان'}
				</p>
			</div>
		</div>
	);
};

export default ProductCardRow;
