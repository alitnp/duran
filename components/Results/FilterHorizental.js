import ResultsFilters from 'components/Results/ResultsFilters';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import DInput from 'components/UI/DInput/DInput';
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
        <ResultsFilters />
      </div>
    </div>
  );
};

export default FilterHorizen;
