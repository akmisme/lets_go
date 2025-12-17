"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <section>
      <Swiper
        pagination={{ type: "progressbar" }}
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-[100vh] md:h-[90vh] sm:h-[80vh] bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/assets/bagan.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative flex flex-col items-center justify-center h-full text-center px-4 gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Promotion
              </h1>

              <ul className="flex flex-wrap justify-center gap-3 text-base sm:text-lg">
                <li className="flex items-center gap-2">
                  ✅ <span>Black Friday</span> |
                </li>
                <li className="flex items-center gap-2">
                  ✅ <span>With Codes</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-[100vh] md:h-[90vh] sm:h-[80vh] bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/assets/chaungthar.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative flex flex-col items-center justify-center h-full text-center px-4 gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Promotion
              </h1>

              <ul className="flex flex-wrap justify-center gap-3 text-base sm:text-lg">
                <li className="flex items-center gap-2">
                  ✅ <span>Black Friday</span> |
                </li>
                <li className="flex items-center gap-2">
                  ✅ <span>With Codes</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;