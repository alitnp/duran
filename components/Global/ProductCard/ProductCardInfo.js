import Link from 'next/link';
import { Separator } from 'utils/helpers/persianTools';

const ProductCardInfo = ({ info }) => {
  //functions
  const getAttributes = (attribureName) =>
    info.ProductAttributeModels.find((item) => item.Name === attribureName);

  return (
    <div>
      <Link href={`/product?id=${info?.Id}`}>
        <div className='cursor-pointer group'>
          <p className='mt-1 mb-0 font-medium group-hover:underline'>
            {info?.NameFa}
          </p>
          <p className='mb-0 font-medium group-hover:underline'>
            {info?.NameEn}
          </p>
        </div>
      </Link>
      {getAttributes('Size') && (
        <div className='flex flex-wrap text-xs gap-x-1'>
          {getAttributes('Size').Values.map((item, index) => (
            <p className='mb-0'>
              {index !== 0 && <span className='ml-1'>-</span>}
              <span>{item.Name}</span>
            </p>
          ))}
        </div>
      )}
      {getAttributes('Color') && (
        <div className='flex flex-wrap text-xs gap-x-1 gap-y-0'>
          {getAttributes('Color').Values.map((item, index) => (
            <p className='mb-0'>
              {index !== 0 && <span className='ml-1'>-</span>}
              <span>{item.Name}</span>
            </p>
          ))}
        </div>
      )}
      <p className='mt-2 font-medium text-center'>
        {Separator(info?.ProductPrice?.PriceValue * 10000) + ' تومان'}
      </p>
    </div>
  );
};

export default ProductCardInfo;
