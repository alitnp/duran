import Checkbox from 'components/UI/Checkbox/Checkbox';
import DInput from 'components/UI/DInput/DInput';
import { IoIosArrowDown } from 'react-icons/io';
import { BiFilterAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import DSelect from 'components/UI/DSelect/DSelect';
import DOption from 'components/UI/DOption/DOption';
import { useRouter } from 'next/router';
import qs from 'querystring';
import routes from 'utils/constants/routes';
import ResultFilterColors from 'components/Results/ResultFilerColors';

const FilterVertical = () => {
  //states
  const { searchResults } = useSelector((state) => state.result);
  console.log(searchResults);

  //hooks
  const router = useRouter();

  return (
    <div className='hidden w-40 ml-6 lg:block'>
      <div className='flex h-[34px] items-center border-b'>
        <BiFilterAlt />
        فیلترها
      </div>

      {searchResults?.AvailableCategories && (
        <div className='mt-4'>
          <div className='flex items-center justify-between mb-2 border-b'>
            <p className='mb-0'>دسته بندی</p>
          </div>
          <DSelect
            value={router.query.cid || ''}
            onChange={(e) =>
              router.push({
                pathname: routes.result.pathname,
                query: { ...router.query, cid: e },
              })
            }
          >
            {searchResults?.AvailableCategories.map((item) => {
              return (
                <DOption key={item.Value} value={item.Value}>
                  {item.Text}
                </DOption>
              );
            })}
          </DSelect>
        </div>
      )}
      {searchResults?.AvailableCollections && (
        <div className='mt-4'>
          <div className='flex items-center justify-between mb-2 border-b'>
            <p className='mb-0'>گروه</p>
          </div>
          <DSelect
            value={router.query.mid || ''}
            onChange={(e) =>
              router.push({
                pathname: routes.result.pathname,
                query: { ...router.query, mid: e },
              })
            }
          >
            {searchResults?.AvailableCollections.map((item) => {
              return (
                <DOption key={item.Value} value={item.Value}>
                  {item.Text}
                </DOption>
              );
            })}
          </DSelect>
        </div>
      )}
      <ResultFilterColors
        options={searchResults?.PagingFilteringContext?.SpecificationFilter}
      />
      {/* <div className='flex items-center justify-between mt-6 mb-2 border-b'>
        <p className='mb-0'>سایز</p>
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
      </div> */}

      <div className='flex items-center justify-between mt-6 border-b'>
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
