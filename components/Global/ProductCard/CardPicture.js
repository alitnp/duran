import LoadingSpin from "components/UI/LoadingSpin/LoadingSpin";
import Image from "next/image";
import Link from "next/link";
import routes from "utils/constants/routes";

const CardPicture = ({ firstImage, secondImage, alt, loading, id }) => {
  return (
    <Link href={`${routes.product.path}?id=${id}`} passHref>
      <a className="relative flex justify-center aspect-[1/1] cursor-pointer">
        <div className="absolute top-0 right-0 flex justify-center w-full h-full opacity-100">
          <div className="relative transition-all duration-500 opacity-0 group-hover:opacity-100">
            {secondImage && (
              <img
                src={secondImage}
                draggable="false"
                className="object-contain"
                alt={alt}
              />
            )}
          </div>
        </div>
        <div
          className={`relative  transition-opacity flex justify-center  duration-500 opacity-100  ${
            secondImage && "group-hover:opacity-0"
          }`}
        >
          {firstImage && (
            <img
              src={firstImage}
              draggable="false"
              className="object-contain"
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
      </a>
    </Link>
  );
};

export default CardPicture;
