"use client";
import React from "react";
import Image from "next/image";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Tranding = () => {
  const pathname = usePathname();

  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const tranding = currentLocale === "mm" ? mm.home : en.home;
  return (
    <section>
      <section className="mt-10">
        {tranding.map((trand, index) => (
          <h1 key={index} className="text-center text-2xl font-bold mb-5">
            {trand.title3}
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
                <h3 className="text-lg font-bold">Bagan</h3>
                <p className="text-sm line-clamp-2">
                  Bagan (formerly Pagan) is an ancient city in Myanmar, a UNESCO
                  World Heritage site famous for its vast plains dotted with
                  thousands of Buddhist temples, pagodas, and monasteries built
                  between the 9th and 13th centuries when it was the capital of
                  the Pagan Kingdom.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/assets/promobanner/yangon.jpg"
                alt="#"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
                <h3 className="text-lg font-bold">Yangon</h3>
                <p className="text-sm line-clamp-2">
                  Yangon (formerly Rangoon) is Myanmar's largest city, economic
                  heart, and a vibrant metropolis blending colonial history with
                  modern dynamism, famous for the iconic Shwedagon Pagoda,
                  bustling markets like Bogyoke Market, and colonial
                  architecture, while also reflecting the country's evolving
                  urban landscape, cultural blend, and ongoing social changes,
                  with many exploring its streets and daily life via walking or
                  the circular railway.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/assets/promobanner/taunggyi.jpg"
                alt="#"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
                <h3 className="text-lg font-bold">Taunggyi</h3>
                <p className="text-sm line-clamp-2">
                  Taunggyi is the cool, elevated capital of Myanmar's Shan
                  State, known as a cultural hub for diverse ethnic groups, its
                  pleasant climate, and as a gateway to Inle Lake, with famous
                  attractions like the Tazaungdaing Hot Air Balloon Festival,
                  vibrant markets, and unique pagodas, offering a mix of local
                  life, stunning scenery, and delicious Shan cuisine.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/assets/promobanner/kalaw.jpg"
                alt="#"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
                <h3 className="text-lg font-bold">Kalaw</h3>
                <p className="text-sm line-clamp-2">
                  Kalaw is a peaceful, cool-climate hill town in Myanmar's Shan
                  State, established by the British as a retreat, known for its
                  colonial architecture, pine trees, strong coffee, and vibrant
                  local markets.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/assets/promobanner/taunggyi.jpg"
                alt="#"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
                <h3 className="text-lg font-bold">Taunggyi</h3>
                <p className="text-sm line-clamp-2">
                  Taunggyi is the cool, elevated capital of Myanmar's Shan
                  State, known as a cultural hub for diverse ethnic groups, its
                  pleasant climate, and as a gateway to Inle Lake, with famous
                  attractions like the Tazaungdaing Hot Air Balloon Festival,
                  vibrant markets, and unique pagodas, offering a mix of local
                  life, stunning scenery, and delicious Shan cuisine.
                </p>
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

export default Tranding;
