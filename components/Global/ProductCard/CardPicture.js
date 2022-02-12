import LoadingSpin from "components/UI/LoadingSpin/LoadingSpin";
import Image from "next/image";

const CardPicture = ({ firstImage, secondImage, alt, loading }) => {
  return (
    <div className="relative flex justify-center h-[220px] min-w-[220px]">
      <div className="absolute top-0 right-0 flex justify-center w-full h-full opacity-100">
        <div className="relative flex justify-center w-full h-full mx-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
          {secondImage && (
            <Image
              src={secondImage}
              layout="fill"
              objectFit="contain"
              draggable="false"
              objectPosition="center center"
              alt={alt}
            />
          )}
        </div>
      </div>
      <div
        className={`relative  transition-opacity flex w-full h-full justify-center  duration-500 opacity-100  ${
          secondImage && "group-hover:opacity-0"
        }`}
      >
        {firstImage && (
          <Image
            src={firstImage}
            layout="fill"
            objectFit="contain"
            draggable="false"
            objectPosition="center center"
            alt={alt}
          />
        )}
      </div>
      {loading && (
        <div className="absolute top-0 left-0 flex items-end justify-end w-full h-full p-2 ">
          <div className="p-1 bg-white rounded-md shadow-md">
            <LoadingSpin />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPicture;
