import Button from 'components/UI/Button/Button';
import { Separator } from 'utils/helpers/persianTools';
import { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import routes from 'utils/constants/routes';

const BuyBox = ({
  englishBrand,
  persianBrand,
  persianName,
  englishName,
  sizes,
  price,
  colors,
}) => {
  //states
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();

  useEffect(() => {
    sizes && setSelectedSize(sizes.Values[0]);
  }, [sizes]);
  useEffect(() => {
    colors && setSelectedColor(colors.Values[0]);
  }, [colors]);

  return (
    <div className='sticky flex flex-col w-full pb-4 mb-4 border-b lg:min-h-[24rem] top-20 border-d-border-gray border p-2 rounded-md '>
      <div className='pb-2 mb-2 border-b'>
        <h1 className='mb-2 text-lg font-bold'>
          <Link href={routes.home.path} passHref>
            <span className='cursor-pointer hover:underline'>
              {persianBrand}
            </span>
          </Link>
          {' - '}
          {persianName}
        </h1>
        <h1 className='text-lg font-bold'>
          <Link href={routes.home.path} passHref>
            <span className='cursor-pointer hover:underline'>
              {englishBrand}
            </span>
          </Link>
          {' - '}
          {englishName}
        </h1>
      </div>
      <div className='flex justify-between pb-2 mb-2 border-b'>
        <span>قیمت</span>
        <span className='text-lg'>{Separator(price)} تومان</span>
      </div>
      <div className='flex flex-col pb-2 mb-2 border-b'>
        <span> سایز:</span>
        <div className='flex flex-row-reverse flex-wrap justify-end mt-2 mr-auto gap-x-2'>
          {sizes &&
            sizes.Values.map((item) => {
              return (
                <div
                  key={item.Id}
                  onClick={() => setSelectedSize(item)}
                  className={`flex items-center justify-center w-8 h-8 border border-d-border-gray cursor-pointer ${
                    item.Id === selectedSize?.Id && ' border-d-text underline'
                  }
`}
                >
                  {item.Name}
                </div>
              );
            })}
        </div>
      </div>
      <div className='flex flex-col pb-2 border-b'>
        <span> رنگ:</span>
        <div className='flex flex-row-reverse flex-wrap justify-end mt-2 mr-auto gap-x-2'>
          {colors &&
            colors.Values.map((item) => {
              return (
                <div
                  key={item.Id}
                  onClick={() => setSelectedColor(item)}
                  className={`flex items-center justify-center border border-d-border-gray cursor-pointer whitespace-nowrap p-2 ${
                    item.Id === selectedColor?.Id && ' border-d-text underline'
                  }
`}
                >
                  {item.Name}
                </div>
              );
            })}
        </div>
      </div>
      <div className='flex items-center justify-between mt-8 lg:mt-auto gap-x-4'>
        <Button text='خرید محصول' />
        <div className='flex items-center text-2xl'>
          <FiShoppingCart className='ml-2' />
          {!liked && (
            <AiOutlineHeart
              className='cursor-pointer '
              onClick={() => setLiked(true)}
            />
          )}
          {liked && (
            <AiFillHeart
              className='cursor-pointer fill-red-600'
              onClick={() => setLiked(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyBox;
