import { persianNum, Separator } from 'helpers/persianTools';
import Image from 'next/image';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import {
	decreaseCartItemQuantity,
	increaseCartItemQuantity,
	removeItemFromCart,
} from 'redux/reducers/cartReducer/cartReducer';
import Tooltip from 'components/UI/Tooltip/Tooltip';

const CartItem = ({ info, index }) => {
	//hooks
	const dispatch = useDispatch();

	//functions
	const handleDelete = () => dispatch(removeItemFromCart(index));
	const handleIncrease = () => dispatch(increaseCartItemQuantity(index));
	const handleDecrease = () => dispatch(decreaseCartItemQuantity(index));

	return (
		<div className='flex p-2 ml-6 text-sm border rounded-md h-fit border-d-border-gray'>
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
				{/* <p>سایز : {persianNum(info.sizes)}</p> */}
				<p>قیمت : {Separator(persianNum(info.price))}</p>
				<div className='flex items-center mt-auto select-none'>
					<div className='flex items-center ml-auto '>
						<div
							className='ml-2 transition-all duration-500 ease-out rounded cursor-pointer bg-gray-200/70 hover:bg-gray-200 text-d-text'
							onClick={handleIncrease}
						>
							<HiPlus />
						</div>
						<p className='text-lg '>{persianNum(info.quantity)}</p>
						<div
							className='mr-2 transition-all duration-500 ease-out rounded cursor-pointer bg-gray-200/70 hover:bg-gray-200 text-d-text'
							onClick={handleDecrease}
						>
							<HiMinus />
						</div>
					</div>
					<div
						className='text-lg cursor-pointer hover:text-red-300'
						onClick={handleDelete}
					>
						<Tooltip title='حذف این مورد'>
							<FiTrash2 />
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
