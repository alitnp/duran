import Button from 'components/UI/Button/Button';
import { persianNum, Separator } from 'helpers/persianTools';
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const BuyBox = ({ persianName, englishName, sizes, price }) => {
	//states
	const [liked, setLiked] = useState(false);

	return (
		<div className='pb-4 mb-4 border-b border-d-border-gray'>
			<div className='border-b pb-2 mb-2'>
				<h1 className='font-bold text-xl mb-2'>{persianName}</h1>
				<h1 className='font-bold text-xl'>{englishName}</h1>
			</div>
			<div className='flex justify-between'>
				<span>تومان</span>
				<span>{Separator(persianNum(price))}</span>
			</div>
			<div className='flex flex-col'>
				<span>انتخاب سایز:</span>
				<div className='flex gap-x-2 justify-end mt-2'>
					{sizes.map((item, index) => {
						return (
							<div
								key={index}
								className='border border-d-border-gray w-8 h-8 flex items-center justify-center'
							>
								{persianNum(item)}
							</div>
						);
					})}
				</div>
			</div>
			<div className='flex justify-between items-center gap-x-4 mt-4'>
				<Button text='خرید محصول' />
				<div className='text-2xl flex items-center'>
					<FiShoppingCart className='ml-2' />
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
				</div>
			</div>
		</div>
	);
};

export default BuyBox;
