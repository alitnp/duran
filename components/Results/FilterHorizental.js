import Checkbox from 'components/UI/Checkbox/Checkbox';
import DInput from 'components/UI/DInput/DInput';
import { persianNum } from 'helpers/persianTools';
import { useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';

const FilterHorizen = () => {
	//states
	const [open, setOpen] = useState(false);

	//function
	const toggleOpen = () => setOpen(!open);

	return (
		<div className='lg:hidden'>
			<div
				className={`border p-2 overflow-hidden rounded-md border-d-border-gray transition-all duration-500 ease-in-out mb-4 ${
					open ? 'max-h-[1000px]' : 'max-h-10'
				}`}
			>
				<div
					className='flex items-center justify-between cursor-pointer hover:bg-gray-100'
					onClick={toggleOpen}
				>
					<div className='flex items-center'>
						<BiFilterAlt className='ml-1' />
						فیلترها
					</div>
					<IoIosArrowDown />
				</div>
				<div className='mt-4'>
					<Checkbox label='مردانه' name='men2' checked />
					<Checkbox label='زنانه' name='women2' />
					<Checkbox label='کودک' name='kids2' />
				</div>
				<div className='flex items-center justify-between mt-8 border-b'>
					<p>سایز</p>
					<IoIosArrowDown />
				</div>
				<div className='grid grid-cols-3'>
					{[...Array(6).keys()].map((item, index) => {
						return (
							<div
								className={`flex cursor-pointer items-center justify-center py-1 text-sm border ${
									item === 2 && 'bg-d-text text-white'
								}`}
							>
								{persianNum(index + 37)}
							</div>
						);
					})}
				</div>
				<div className='flex items-center justify-between mt-8 border-b'>
					<p>رنگ ها</p>
					<IoIosArrowDown />
				</div>
				<div className='grid grid-cols-6 mt-2 sm:grid-cols-8 gap-y-2'>
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
		</div>
	);
};

export default FilterHorizen;
