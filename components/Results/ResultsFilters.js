import DInput from 'components/UI/DInput/DInput';
import { BiFilterAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import DSelect from 'components/UI/DSelect/DSelect';
import DOption from 'components/UI/DOption/DOption';
import { useRouter } from 'next/router';
import routes from 'utils/constants/routes';
import ResultFilterColors from 'components/Results/ResultFilerColors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBrandsList } from 'redux/middlewares/brands/getBrandsList';
import { Separator } from 'utils/helpers/persianTools';

const ResultsFilters = () => {
  //states
  const { searchResults } = useSelector((state) => state.result);
  const { brandsList } = useSelector((state) => state.brands);

  //hooks
  const router = useRouter();
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    !brandsList && dispatch(getBrandsList());
  }, []);

  //functions
  const getPriceLimitOptions = () => {
    return [...Array(5).keys()].map((item) => {
      if (item === 0)
        return (
          <DOption key={item} value={''}>
            بدون محدودیت
          </DOption>
        );
      return (
        <DOption key={item} value={item * 500000}>
          {Separator(item * 500000)}
        </DOption>
      );
    });
  };

  return (
    <>
      {searchResults?.AvailableCategories && (
        <div className='mt-2'>
          <div className='flex items-center justify-between mb-1'>
            <p className='mb-0'>دسته بندی</p>
          </div>
          <DSelect
            value={router.query.cid || null}
            onChange={(e) =>
              router.push({
                pathname: routes.result.pathname,
                query: { ...router.query, cid: e },
              })
            }
            allowClear
            onClear={() =>
              router.push({
                pathname: routes.result.pathname,
                query: { ...router.query, cid: null },
              })
            }
            placeholder='همه'
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
      {brandsList && (
        <div className='mt-2'>
          <div className='flex items-center justify-between mb-1'>
            <p className='mb-0'>برند</p>
          </div>
          <DSelect
            value={router.query.bid || null}
            onChange={(e) =>
              router.push({
                pathname: routes.result.pathname,
                query: { ...router.query, bid: e },
              })
            }
            allowClear
            onClear={() =>
              router.push({
                pathname: routes.result.pathname,
                query: { ...router.query, bid: null },
              })
            }
            placeholder='همه'
          >
            <DOption value={''}>همه</DOption>
            {brandsList.map((item) => {
              return (
                <DOption key={item.Id} value={item.Id}>
                  {item.NameFa}
                </DOption>
              );
            })}
          </DSelect>
        </div>
      )}
      {searchResults?.AvailableCollections && (
        <div className='mt-2'>
          <div className='flex items-center justify-between mb-1'>
            <p className='mb-0'>گروه</p>
          </div>
          <DSelect
            value={router.query.mid || null}
            onChange={(e) =>
              router.push({
                pathname: routes.result.pathname,
                query: { ...router.query, mid: e },
              })
            }
            allowClear
            onClear={() =>
              router.push({
                pathname: routes.result.pathname,
                query: { ...router.query, mid: null },
              })
            }
            placeholder='همه'
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

      <div className='flex items-center justify-between mt-6'>
        <p className='mb-0'>قیمت</p>
        {/* <IoIosArrowDown /> */}
      </div>
      <div>
        <DSelect
          value={router.query.pf || null}
          onChange={(e) =>
            router.push({
              pathname: routes.result.pathname,
              query: { ...router.query, pf: e },
            })
          }
          onClear={() =>
            router.push({
              pathname: routes.result.pathname,
              query: { ...router.query, pf: null },
            })
          }
          placeholder='از'
          allowClear
        >
          {getPriceLimitOptions()}
        </DSelect>
        <DSelect
          value={router.query.pt || null}
          onChange={(e) =>
            router.push({
              pathname: routes.result.pathname,
              query: { ...router.query, pt: e },
            })
          }
          onClear={() =>
            router.push({
              pathname: routes.result.pathname,
              query: { ...router.query, pt: null },
            })
          }
          placeholder='تا'
          allowClear
        >
          {getPriceLimitOptions()}
        </DSelect>
      </div>
    </>
  );
};

export default ResultsFilters;
