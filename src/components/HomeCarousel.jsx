import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SliderData } from "../productData/sliderdata";

const HomeCarousel = () => {
  return (
    <div className="w-full h-[500px] bg-white">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {SliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex items-center justify-between h-[500px] px-8">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
              <img
                src={item.cover}
                alt={item.title}
                className="w-[400px] h-[400px] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
