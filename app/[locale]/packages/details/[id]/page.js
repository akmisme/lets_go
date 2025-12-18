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
      {/* Swiper Section */}
      <div className="grid gap-5 mx-20 h-auto grid-cols-2 max-xl:grid-cols-1 max-xl:w-auto max-xl:mx-5 bg-white shadow-md rounded-md">
        <div className="flex h-auto w-auto m-6">
          <Swiper
            pagination={{ type: "progressbar" }}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="mySwiper max-h-auto w-100"
          >
            <SwiperSlide>
              <img src="/assets/promobanner/bagan.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/promobanner/mandalay.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/promobanner/chaungtha.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/promobanner/ngwesaung.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/promobanner/inle.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/promobanner/kalaw.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/promobanner/hpa-an.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/promobanner/taunggyi.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/promobanner/yangon.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col gap-5 mx-20 max-xl:mx-5 my-6 w-full">
          <h1 className="text-3xl font-bold text-[#936521]">Bagan Package</h1>
          <p>
            Duration - <span className="text-yellow-500">12-16-2025</span> to{" "}
            <span className="text-yellow-500">12-20-2025</span>
          </p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 text-sm gap-3 w-fit">
            <p>📍 Destination - Bagan Myanmar</p>
            <p>🗣️ Languages - German +3 languages</p>
            <p>📅 Date - 12-16-2025</p>
            <p>🎂 Age Range - All Age Welcome</p>
            <p>👥 Passengers - 20</p>
            <p>📋 Promotion Code - FRIDAY2025</p>
          </div>
          <div className="bg-gray-100 rounded-3xl shadow-md border border-gray-300 flex flex-col p-5 max-w-140">
            <h1 className="text-base font-bold">My Test Box</h1>
            <p className="text-sm leading-relaxed indent-10">My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box My Test Box</p>
          </div>
          <div className="flex gap-4 pt-4 w-fit">
            <button className="bg-yellow-500 text-white px-5 py-2.5 rounded-xl hover:bg-yellow-600 transition font-semibold shadow cursor-pointer">
              Booking
            </button>
            <button className="border border-yellow-500 text-yellow-600 px-5 py-2.5 rounded-xl hover:bg-yellow-50 transition font-semibold shadow cursor-pointer">
              Download Brochure
            </button>
          </div>
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

          <p>
            {cat.hotel} - {cat.star}
          </p>
          <p>{cat.meal}</p>
        </div>
      ))}
    </section>
  );
}
