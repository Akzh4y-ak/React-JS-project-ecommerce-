import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { SliderData } from "../productData/sliderdata";

const HomeCarousel = () => {
  return (
    <div className="w-full bg-[#e0e0e0] py-12"> {/* Darker background */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="w-full"
      >
        {SliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 lg:px-8 min-h-[400px] gap-10">

              {/* Text Section */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-md">
                  {item.desc}
                </p>
                <button className="bg-[#d9d9d9] hover:bg-[#cfcfcf] text-[#333] text-sm px-6 py-2 rounded-full transition">
                  Visit Collections
                </button>
              </div>

              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src={item.cover}
                  alt={item.title}
                  className={`h-auto object-contain ${item.imageSize ||
                    "w-[180px] sm:w-[220px] md:w-[250px] lg:w-[280px]"
                    }`}
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
