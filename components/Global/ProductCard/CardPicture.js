import LoadingSpin from 'components/UI/LoadingSpin/LoadingSpin';
import Image from 'next/image';

const CardPicture = ({ firstImage, secondImage, alt, loading }) => {
  return (
    <div className='relative '>
      <div className='absolute top-0 right-0 opacity-100 '>
        <div className='relative p-2 bg-d-gray'>
          {secondImage && (
            <Image
              src={secondImage}
              width='180px'
              height='270px'
              objectFit='cover'
              draggable='false'
              alt={alt}
            />
          )}
        </div>
      </div>
      <div
        className={`relative bg-d-gray p-2 transition-opacity duration-500 opacity-100 ${
          secondImage && 'group-hover:opacity-0'
        }`}
      >
        {firstImage && (
          <Image
            src={firstImage}
            width='180px'
            height='270px'
            objectFit='cover'
            draggable='false'
            alt={alt}
          />
        )}
      </div>
      {loading && (
        <div className='absolute top-0 left-0 flex items-end justify-end w-full h-full p-2 '>
          <div className='p-1 bg-white rounded-md shadow-md'>
            <LoadingSpin />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPicture;
