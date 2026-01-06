"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { usePathname } from "next/navigation";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";

const Popularexp = () => {
  const pathname = usePathname();

  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const popular = currentLocale === "mm" ? mm.home : en.home;
  return (
    <section>
      <section className="mt-10">
        {popular.map((pop, index) => (
          <h1 key={index} className="text-center text-2xl font-bold mb-5">
            {pop.title2}
          </h1>
        ))}
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000, // 3 seconds between slides
            disableOnInteraction: false, // keep autoplay running after user interaction
            pauseOnMouseEnter: true, // pause when hovering (desktop)
          }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1260: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <div className="relative overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/assets/promobanner/bagan.jpg"
                alt="#"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
                <h3 className="text-lg font-bold">Title</h3>
                <p className="text-sm line-clamp-2">Paragraph</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/assets/promobanner/inle.jpg"
                alt="#"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
                <h3 className="text-lg font-bold">Title</h3>
                <p className="text-sm line-clamp-2">Paragraph</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/assets/promobanner/chaungtha.jpg"
                alt="#"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
                <h3 className="text-lg font-bold">Title</h3>
                <p className="text-sm line-clamp-2">Paragraph</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/assets/promobanner/ngwesaung.jpg"
                alt="#"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
                <h3 className="text-lg font-bold">Title</h3>
                <p className="text-sm line-clamp-2">Paragraph</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/assets/promobanner/chaungtha.jpg"
                alt="#"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
                <h3 className="text-lg font-bold">Title</h3>
                <p className="text-sm line-clamp-2">Paragraph</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-[#936521] text-3xl">
            &#10094;
          </div>
          <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-[#936521] text-3xl">
            &#10095;
          </div>
        </Swiper>
      </section>
    </section>
  );
};

export default Popularexp;
