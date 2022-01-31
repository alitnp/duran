import { useEffect, useRef, useState } from 'react';
import { BackgroundColorTheif } from 'utils/helpers/background-color-theif';
import Image from 'next/image';
import endpointUrls from 'utils/constants/enpointUrls';

const ProductImages = ({ images }) => {
  //states
  const [rgb, setRgb] = useState([]);
  const [slide, setSlide] = useState(0);

  //ref
  const imageRef = useRef();

  //effects
  useEffect(() => {
    if (imageRef?.current?.naturalHeight !== 0) getColor();
  }, [imageRef.current?.naturalHeight]);

  //functions
  const getColor = () => {
    return;
    if (!imageRef?.current?.complete) return;
    const backgroundColorTheif = new BackgroundColorTheif();
    setRgb(backgroundColorTheif.getBackGroundColor(imageRef.current));
  };

  return (
    <>
      <div
        className={`relative w-full border h-96 ${!rgb.length && 'bg-d-gray'}`}
        style={{ backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` }}
      >
        <img
          src={endpointUrls.baseUrl + images[slide].ImageUrl}
          alt=''
          ref={imageRef}
          className='object-contain w-full h-full'
          onLoad={(e) => {
            e?.type === 'load' && getColor();
          }}
        />
      </div>
      <div className='flex justify-center w-full h-20 mb-4 gap-x-4'>
        {images.map((image, index) => {
          return (
            <div
              className='cursor-pointer '
              onClick={() => setSlide(index)}
              key={index}
            >
              <div
                className={` rounded-full  w-1/2 mx-auto relative -top-[2px] mb-1 ${
                  slide === index ? 'h-1 bg-d-text' : 'h-[2px] bg-d-faded-text'
                }`}
              ></div>
              <div className='w-full h-full border'>
                <img
                  src={endpointUrls.baseUrl + image.ThumbImageUrl}
                  alt={image.AlternateText}
                  className='w-full h-full'
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductImages;
