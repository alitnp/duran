import { useEffect, useRef, useState } from "react";
import { BackgroundColorTheif } from "utils/helpers/background-color-theif";
import Image from "next/image";
import endpointUrls from "utils/constants/endpointUrls";

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
        className={`relative w-full h-96 ${!rgb.length && "bg-d-gray"}`}
        style={{ backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` }}
      >
        <img
          src={endpointUrls.baseUrl + images[slide].ImageUrl}
          alt=""
          ref={imageRef}
          className="object-contain w-full h-full "
          onLoad={(e) => {
            e?.type === "load" && getColor();
          }}
        />
      </div>
      <div className="flex justify-center w-full h-16 border-t border-gray-300 gap-x-4 bg-d-gray">
        {images.map((image, index) => {
          if (image.IsFeaturePicture) return null;
          return (
            <div
              className="cursor-pointer "
              onClick={() => setSlide(index)}
              key={index}
            >
              <div
                className={`w-full h-full border ${
                  slide === index && "border-d-border-gray bg-d-bg-color"
                }`}
              >
                <img
                  src={endpointUrls.baseUrl + image.ThumbImageUrl}
                  alt={image.AlternateText}
                  className="w-full h-full"
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
