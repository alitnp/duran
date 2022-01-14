import { persianNum } from 'helpers/persianTools';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

const RedIcon = ({ onClick, count }) => {
	return (
		<div
			onClick={onClick}
			className='absolute -translate-y-1/2 cursor-pointer select-none w-9 md:w-11 md-h-11 h-9 md:-left-11 -left-9 top-3/4'
		>
			<div className='flex items-center justify-center w-full h-full bg-d-primary '>
				<div className='relative flex items-center justify-center w-5 h-5 text-lg md:w-6 md:h-6'>
					<FiShoppingCart />
				</div>

				<div
					className={`absolute  items-center justify-center w-5 h-5 text-sm rounded-full -left-2 -top-2 bg-d-secondary text-d-text transition-all duration-700 ease-out flex ${
						count ? 'scale-100' : 'scale-0'
					}`}
				>
					{persianNum(count)}
				</div>
			</div>
		</div>
	);
};

export default RedIcon;
