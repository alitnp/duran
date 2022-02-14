import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Slider() {
  //states
  const { slides } = useSelector((state) => state.home);

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
        modules={[Autoplay, Pagination]}
        className="h-72"
      >
        <SwiperSlide className="relative flex items-center justify-center">
          <Image
            src="/image/slides/slide1.png"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center">
          <Image
            src="/image/slides/slide2.png"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
