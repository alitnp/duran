import CartItem from 'components/Global/Cart/CartItem';
import RedIcon from 'components/Global/Cart/RedIcon';
import ProductCardRow from 'components/Global/ProductCard/ProductCard';
import Button from 'components/UI/Button/Button';
import { persianNum, Separator } from 'helpers/persianTools';
import Image from 'next/image';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const Cart = () => {
	//states
	const [open, setOpen] = useState(false);
	const { items } = useSelector((state) => state.cart);

	//functions
	const toggleCart = () => setOpen(!open);

	//constants
	const totalPrice = items.reduce((prev, curr) => {
		return prev + curr.price * curr.quantity;
	}, 0);

	return (
		<div
			className={`fixed top-0 z-50 w-10/12 h-full text-d-bg-color transition-right duration-500 ease-out ${
				open ? 'right-0' : '-right-[83.333333%] '
			}`}
		>
			<div
				className={`fixed top-0  w-full h-full abosulte opacity-0 cursor-pointer ${
					open ? 'left-0' : '-left-full'
				}`}
				onClick={toggleCart}
			/>
			<div className='relative flex w-full h-full pt-8 px-[5%] bg-zinc-700/80 backdrop-blur-md '>
				<div className='flex flex-col w-full mb-4 '>
					<div className='mb-4 text-3xl'>
						<RiCloseLine onClick={toggleCart} className='cursor-pointer' />
					</div>
					<div className='flex justify-between pb-2 border-b'>
						<p className='text-2xl font-medium'>سبد خرید</p>
						<Button text='پرداخت' className='text-black bg-d-secondary' />
					</div>
					<div className='flex justify-between mt-1 text-sm font-light'>
						<p>{`${persianNum(items.length)} محصول در سبد`}</p>
						<p>{`${Separator(persianNum(totalPrice))} تومان`}</p>
					</div>
					<div className='flex flex-wrap mt-6 overflow-y-auto gap-y-6 text-d-gray no-scrollbar'>
						{items.map((item, index) => (
							<CartItem key={index} info={item} index={index} />
						))}
					</div>
				</div>
				<RedIcon onClick={toggleCart} count={items.length} />
			</div>
		</div>
	);
};

export default Cart;
