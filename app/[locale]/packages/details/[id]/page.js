"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FilterButton from "@/app/components/filterdays";

const categories = [
  {
    title: "Day 1: Yangon Arrival & City Tour",
    paragraph: [
      "Arrival at Yangon International airport and your guide will greet you...",
      "Next, drive along Kandawgyi Lake and take some great photos...",
      "Drive through downtown Yangon and enjoy colonial buildings...",
    ],
    hotel: "Inwa Hotel",
    star: "⭐⭐⭐",
    meal: "Meal - breakfast",
  },
  {
    title: "Day 2: Yangon Arrival & City Tour",
    paragraph: [
      "Arrival at Yangon International airport and your guide will greet you...",
      "Visit Chauk Htat Gyi Pagoda and Kandawgyi Lake...",
      "Drive through downtown Yangon and enjoy colonial buildings...",
    ],
    hotel: "Inwa Hotel",
    star: "⭐⭐⭐⭐",
    meal: "Meal - breakfast, lunch",
  },
  {
    title: "Day 3: Yangon Arrival & City Tour",
    paragraph: [
      "Arrival at Yangon International airport and your guide will greet you...",
      "Visit Chauk Htat Gyi Pagoda and Kandawgyi Lake...",
      "Drive through downtown Yangon and enjoy colonial buildings...",
    ],
    hotel: "Inwa Hotel",
    star: "⭐⭐⭐⭐⭐",
    meal: "Meal - breakfast, lunch, dinner",
  },
  {
    title: "Day 4: Yangon Arrival & City Tour",
    paragraph: [
      "Arrival at Yangon International airport and your guide will greet you...",
      "Visit Chauk Htat Gyi Pagoda and Kandawgyi Lake...",
      "Drive through downtown Yangon and enjoy colonial buildings...",
    ],
    hotel: "Inwa Hotel",
    star: "⭐",
    meal: "Meal - N/A",
  },
];

export default function PackageDetails() {
  const [activeCategory, setCategory] = useState("All");

  const filteredDays =
    activeCategory === "All"
      ? categories
      : categories.filter((c) => c.title === activeCategory);

  return (
    <section className="mt-30 py-5 bg-gray-100">
      <h1 className="text-center text-3xl font-bold mb-5">Package Details</h1>

      {/* Swiper Section */}
      <div className="grid gap-5 mx-auto w-350 h-full grid-cols-2 max-xl:grid-cols-1 max-xl:w-auto max-xl:mx-5 bg-white shadow-md">
        <div>
          <Swiper
            pagination={{ type: "progressbar" }}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="mySwiper"
          >
            <SwiperSlide><img src="/assets/promobanner/bagan.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/assets/promobanner/mandalay.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/assets/promobanner/chaungtha.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/assets/promobanner/ngwesaung.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/assets/promobanner/inle.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/assets/promobanner/kalaw.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/assets/promobanner/hpa-an.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/assets/promobanner/taunggyi.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/assets/promobanner/yangon.jpg" /></SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-col gap-5 p-2">
          <h1 className="text-justify font-bold">Bagan Package</h1>
          <p className="leading-relaxed indent-10 text-justify pr-5">
            The program is for our customers who can visit and enjoy the main
            tourist attraction destinations of Myanmar...
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 mx-auto w-350 mt-10 flex-wrap max-xl:w-auto max-xl:mx-5 max-lg:flex-col">
        <FilterButton
          category="All"
          activeCategory={activeCategory}
          onClick={setCategory}
        />

        {categories.map((cat, index) => (
          <FilterButton
            key={index}
            category={cat.title}
            activeCategory={activeCategory}
            onClick={setCategory}
          />
        ))}
      </div>

      {/* Filtered Content */}
      {filteredDays.map((cat, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-col mx-auto w-350 max-xl:w-auto max-xl:mx-5 mt-10 gap-5 text-base"
        >
          <h1 className="font-bold text-2xl">{cat.title}</h1>

          {cat.paragraph.map((p, i) => (
            <p key={i} className="leading-relaxed indent-10 text-justify">
              {p}
            </p>
          ))}

          <p>{cat.hotel} - {cat.star}</p>
          <p>{cat.meal}</p>
        </div>
      ))}
    </section>
  );
}