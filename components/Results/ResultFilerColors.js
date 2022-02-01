import { useRouter } from 'next/router';
import { BiFilterAlt } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import routes from 'utils/constants/routes';

const ResultFilterColors = ({ options }) => {
  //hooks
  const router = useRouter();

  if (!options) return null;

  const notFilteredColors = options?.NotFilteredItems.filter(
    (item) => item.SpecificationAttributeName === 'Color'
  );
  const filteredColors = options?.AlreadyFilteredItems.filter(
    (item) => item.SpecificationAttributeName === 'Color'
  );
  const getValue = (string) => {
    const splitted = string.split(/[?&=]+/);
    const index = splitted.findIndex((item) => item === 'color');
    return splitted[index + 1];
  };

  return (
    <>
      <div className='flex items-center justify-between mt-6 border-b'>
        <p className='mb-0'>رنگ ها</p>
        <IoIosArrowDown />
      </div>
      <div className='flex flex-wrap mt-2 gap-x-2 gap-y-2'>
        {filteredColors.map((item) => {
          const value = getValue(item.FilterUrl);
          return (
            <div
              className={`cursor-pointer border flex items-center gap-x-2  px-2 text-xs hover:bg-slate-50 border-d-border-gray`}
              key={value}
              onClick={() =>
                router.push({
                  pathname: routes.result.pathname,
                  query: { ...router.query, color: value },
                })
              }
            >
              <BiFilterAlt />
              {item.SpecificationAttributeOptionName}
            </div>
          );
        })}
        {notFilteredColors.map((item) => {
          const value = getValue(item.FilterUrl);
          return (
            <div
              className={`cursor-pointer border  px-2 text-xs hover:bg-slate-50`}
              key={value}
              onClick={() =>
                router.push({
                  pathname: routes.result.pathname,
                  query: { ...router.query, color: value },
                })
              }
            >
              {item.SpecificationAttributeOptionName}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ResultFilterColors;
