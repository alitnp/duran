import Checkbox from 'components/UI/Checkbox/Checkbox';
import DInput from 'components/UI/DInput/DInput';
import { IoIosArrowDown } from 'react-icons/io';
import { BiFilterAlt } from 'react-icons/bi';

const FilterVertical = () => {
	return (
		<div className='hidden w-40 ml-6 lg:block'>
			<div className='flex border-b'>
				<BiFilterAlt />
				فیلترها
			</div>
			<div className='mt-4'>
				<Checkbox label='مردانه' name='men' checked />
				<Checkbox label='زنانه' name='women' />
				<Checkbox label='کودک' name='kids' />
			</div>
			<div className='flex items-center justify-between mt-8 border-b'>
				<p>سایز</p>
				<IoIosArrowDown />
			</div>
			<div className='grid grid-cols-3'>
				{[...Array(6).keys()].map((item, index) => {
					return (
						<div
							key={index}
							className={`flex cursor-pointer items-center justify-center py-1 text-sm border ${
								item === 2 && 'bg-d-text text-white'
							}`}
						>
							{index + 37}
						</div>
					);
				})}
			</div>
			<div className='flex items-center justify-between mt-8 border-b'>
				<p>رنگ ها</p>
				<IoIosArrowDown />
			</div>
			<div className='grid grid-cols-4 mt-2 gap-y-2'>
				<div className='w-6 h-6 border border-gray-400 rounded-full cursor-pointer bg-sky-600'></div>
				<div className='w-6 h-6 bg-teal-600 border border-gray-400 rounded-full cursor-pointer'></div>
				<div className='w-6 h-6 bg-indigo-600 border border-gray-400 rounded-full cursor-pointer'></div>
				<div className='w-6 h-6 bg-pink-600 border border-gray-400 rounded-full cursor-pointer'></div>
				<div className='w-6 h-6 bg-black border border-gray-400 rounded-full cursor-pointer'></div>
				<div className='w-6 h-6 bg-white border border-gray-400 rounded-full cursor-pointer'></div>
			</div>
			<div className='flex items-center justify-between mt-8 border-b'>
				<p>قیمت</p>
				<IoIosArrowDown />
			</div>
			<div>
				<DInput label='از :' className='flex-wrap' inputClassName='mr-0' />
				<DInput label='تا :' className='flex-wrap' inputClassName='mr-0' />
			</div>
		</div>
	);
};

export default FilterVertical;
