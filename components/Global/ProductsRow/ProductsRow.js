import ProductCardRow from 'components/Global/ProductCard/ProductCard';
import isTouchScreen from 'utils/hooks/isTouchScreen';
import useScreenWidth from 'utils/hooks/useScreenWidth';
import { useEffect, useRef, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';

const ProductsRow = ({ name, className, list, allLink }) => {
  //states
  const [noRight, setNoRight] = useState(false);
  const [noLeft, setNoLeft] = useState(false);
  const [hideArrows, setHideArrows] = useState(false);

  //hooks
  const rowRef = useRef();
  const isTouch = isTouchScreen();
  const screenWidth = useScreenWidth();

  //effects
  useEffect(() => {
    setArrowKeys(rowRef);
  }, []);
  useEffect(() => {
    if (isTouch && screenWidth < 768) setHideArrows(true);
  }, [isTouch, screenWidth]);

  //functions
  const setArrowKeys = (ref) => {
    const {
      current: { scrollLeft, clientWidth, scrollWidth },
    } = ref;
    scrollLeft > -2 && scrollLeft < 2 ? setNoRight(true) : setNoRight(false);
    scrollLeft * -1 + clientWidth > scrollWidth - 5
      ? setNoLeft(true)
      : setNoLeft(false);
  };
  const scrollRight = () => {
    rowRef.current.scrollLeft += rowRef.current.clientWidth;
  };
  const scrollLeft = () => {
    rowRef.current.scrollLeft -= rowRef.current.clientWidth;
  };

  return (
    <>
      <div className={`flex mb-2 ${className}`}>
        <h4 className='ml-4 border-b-2 border-d-primary pl-4 font-semibold pb-[5px] whitespace-nowrap mb-0'>
          {name}
        </h4>
        <div className='w-full text-left border-b cursor-pointer border-d-border-gray text-d-primary'>
          {allLink && (
            <Link href={allLink} passHref>
              <a >
                <span className='text-d-primary'>
                  همه
                </span>
              </a>
            </Link>
          )}
        </div>
      </div>
      <div className='relative mb-16'>
        <div
          className='flex mb-8 overflow-x-auto scroll-smooth snap-x horizental-scroll scrol hidden-scroll-bar'
          ref={rowRef}
          onScroll={() => setArrowKeys(rowRef)}
        >
          {list &&
            list.map((item, idx) => (
              <ProductCardRow
                key={idx}
                info={item}
                className={`${idx !== 0 && 'mr-6'} snap-start`}
              />
            ))}
          {!noRight && !hideArrows && (
            <div
              onClick={scrollRight}
              className='absolute flex items-center justify-center p-2 -translate-y-1/2 bg-white rounded-full shadow-md cursor-pointer top-1/2 right-2'
            >
              <MdArrowForwardIos />
            </div>
          )}
          {!noLeft && !hideArrows && (
            <div
              onClick={scrollLeft}
              className='absolute flex items-center justify-center p-2 -translate-y-1/2 bg-white rounded-full shadow-md cursor-pointer top-1/2 left-2'
            >
              <MdArrowForwardIos className='-scale-100' />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsRow;
