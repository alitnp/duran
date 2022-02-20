import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
import endpointUrls from "utils/constants/endpointUrls";
import Button from "components/UI/Button/Button";

export default function Slider() {
  //states
  const { slides } = useSelector((state) => state.home);

  const getSlide = (info, index) => {
    return (
      <SwiperSlide
        key={index}
        className={`relative flex  gap-y-4 flex-col items-center justify-center  bg-d-gray ${
          info.SliderAlignType === "Right"
            ? "sm:flex-row"
            : "sm:flex-row-reverse"
        }`}
      >
        <img
          src={endpointUrls.baseUrl + info.PictureUrl}
          className="object-contain h-full sm:max-w-[60%]  max-h-[50%] sm:max-h-[unset]"
        />

        <div className={`mx-6  text-center   ${!info.ShowTitle && "hidden"}`}>
          <p className="mb-4 text-2xl font-black">{info.Name}</p>
          <Button text="نمایش" />
        </div>
      </SwiperSlide>
    );
  };
  const getCenterSlide = (info, index) => {
    return (
      <SwiperSlide
        key={index}
        className={`relative flex flex-col items-center justify-center  bg-d-gray ${
          info.SliderAlignType === "Right"
            ? "sm:flex-row"
            : "sm:flex-row-reverse"
        }`}
      >
        <div
          className={`mx-6 mb-12 text-center sm:mb-0 ${
            !info.ShowTitle && "hidden"
          }`}
        >
          <p className="mb-4 text-2xl font-black">{info.Name}</p>
          <Button text="نمایش" />
        </div>
        <img
          src={endpointUrls.baseUrl + info.PictureUrl}
          className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        />
      </SwiperSlide>
    );
  };

  if (!slides) return null;

  return (
    <div className="mb-10">
      <Swiper
        dir="rtl"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="sm:h-80 h-96"
      >
        {slides.map((item, index) => {
          if (item.SliderAlignType === "Center")
            return getCenterSlide(item, index);
          return getSlide(item, index);
        })}
      </Swiper>
    </div>
  );
}
