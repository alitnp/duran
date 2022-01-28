import CardPicture from './CardPicture';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Separator } from '../../../utils/helpers/persianTools';
import { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import {
	addItemToCart,
	isInCart,
} from 'redux/reducers/cartReducer/cartReducer';
import { useSelector } from 'react-redux';
import endpointUrls from 'utils/constants/enpointUrls';

const ProductCardRow = ({ info, className, noSize, noCategory }) => {
	//states
	const [liked, setLiked] = useState(false);
	const [showAnimation, setShowAnimation] = useState();
	const { items } = useSelector((state) => state.cart);
	const [showAddToCartDialog, ShowAddToCartDialog] = useState(true);

	//hooks
	const dispatch = useDispatch();

	//functions
	const addToCart = (e) => {
		setShowAnimation({ x: e.clientX, y: e.clientY });
		setTimeout(() => {
			setShowAnimation(null);
		}, 1200);
		dispatch(addItemToCart({ ...info, quantity: 1 }));
	};
	const isInCart = () => items.some((shoe) => shoe.id === info.id);

	return (
		<div
			className={`relative overflow-hidden group shrink-0 select-none ${className} `}
		>
			<div className='absolute z-10 w-1/2 px-2 py-1 text-lg transition-all duration-300 -translate-x-1/2 bg-white rounded-md shadow-md group-hover:top-2 -top-8 left-1/2 text-d-text'>
				<div className='relative flex items-center justify-evenly'>
					{!isInCart() ? (
						<FiShoppingCart className='cursor-pointer ' onClick={addToCart} />
					) : (
						<FiShoppingCart className='cursor-pointer fill-d-secondary' />
					)}

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
					{/* <FiSearch className='cursor-pointer' /> */}
					{showAddToCartDialog && (
						<div className='absolute hidden p-2 text-sm rounded-md shadow-md bg-d-bg-color top-8'>
							asdfsaf
						</div>
					)}
				</div>
			</div>
			<CardPicture
				firstImage={
					info?.DefaultPictureModel.ImageUrl &&
					endpointUrls.baseUrl + info?.DefaultPictureModel.ImageUrl
				}
				alt={info?.DefaultPictureModel.AlternateText}
				secondImage={
					info?.SecondPictureModel.ImageUrl &&
					endpointUrls.baseUrl + info?.SecondPictureModel.ImageUrl
				}
			/>
			<div>
				<Link href={`/product?id=${info?.Id}`}>
					<div className='cursor-pointer group'>
						<p className='mt-1 font-medium text-center group-hover:underline'>
							{info?.Name}
						</p>
						<p className='font-medium text-center group-hover:underline'>
							{info?.SeName}
						</p>
					</div>
				</Link>
				{!noCategory && (
					<p className='mt-2 text-xs text-d-faded-text'>{info?.categories}</p>
				)}
				{!noSize && (
					<p className='text-xs text-d-faded-text'>
						{info?.sizes &&
							info?.sizes.map((item, index) => {
								if (index === 0) return item;
								return ' - ' + item;
							})}
					</p>
				)}
				<p className='mt-2 font-medium text-center'>
					{Separator(info?.ProductPrice?.PriceValue) + ' تومان'}
				</p>
			</div>
			{showAnimation && (
				<div
					className='fixed z-50 p-2 text-xl rounded-full shadow-xl bg-d-secondary add-item-to-cart'
					style={{ top: showAnimation.y, left: showAnimation.x }}
				>
					<FiShoppingCart />
				</div>
			)}
		</div>
	);
};

export default ProductCardRow;
