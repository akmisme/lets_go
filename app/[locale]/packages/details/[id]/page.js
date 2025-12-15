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
  const [cardType, setCardType] = useState("mastercard");

  // Mastercard state
  const [mcNumber, setMcNumber] = useState("");
  const [mcExpiry, setMcExpiry] = useState("");
  const [mcCvv, setMcCvv] = useState("");

  // Visa state
  const [visaNumber, setVisaNumber] = useState("");
  const [visaExpiry, setVisaExpiry] = useState("");
  const [visaCvv, setVisaCvv] = useState("");

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
        <div className="flex flex-col gap-8 mx-auto my-6 w-full max-w-md">
          {/* TITLE */}
          <h1 className="text-center text-3xl font-bold text-[#936521]">
            Payment Types
          </h1>

          {/* CARD TYPE SWITCH */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCardType("mastercard")}
              className={`px-5 py-2 rounded-3xl font-semibold transition-all duration-300 ${
                cardType === "mastercard"
                  ? "bg-[#936521] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Mastercard
            </button>

            <button
              onClick={() => setCardType("visa")}
              className={`px-5 py-2 rounded-3xl font-semibold transition-all duration-300 ${
                cardType === "visa"
                  ? "bg-[#936521] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Visa
            </button>
          </div>

          {/* ✅ MASTERCARD FORM */}
          {cardType === "mastercard" && (
            <form className="bg-gray-100 p-6 rounded-3xl shadow-md border border-gray-300 space-y-5">
              <h2 className="text-xl font-semibold text-[#936521]">
                Mastercard Payment
              </h2>

              {/* CARD NUMBER */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  maxLength={19}
                  value={mcNumber}
                  onChange={(e) =>
                    setMcNumber(
                      e.target.value
                        .replace(/\D/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim()
                    )
                  }
                  placeholder="1234 5678 9012 3456"
                  className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                />
              </div>

              {/* EXPIRY + CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-medium text-gray-700">
                    Expiry (MM/YY)
                  </label>
                  <input
                    type="text"
                    maxLength={5}
                    value={mcExpiry}
                    onChange={(e) =>
                      setMcExpiry(
                        e.target.value
                          .replace(/\D/g, "")
                          .replace(/(\d{2})(\d{1,2})/, "$1/$2")
                      )
                    }
                    placeholder="08/27"
                    className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium text-gray-700">CVV</label>
                  <input
                    type="password"
                    maxLength={3}
                    value={mcCvv}
                    onChange={(e) =>
                      setMcCvv(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="123"
                    className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                  />
                </div>
              </div>

              <button className="w-full bg-[#936521] text-white py-3 rounded-3xl font-semibold hover:bg-[#D8AF53] transition-all duration-300">
                Pay Now
              </button>
            </form>
          )}

          {/* ✅ VISA FORM */}
          {cardType === "visa" && (
            <form className="bg-gray-100 p-6 rounded-3xl shadow-md border border-gray-300 space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  className="w-14"
                  alt="Visa"
                />
                <h2 className="text-xl font-semibold text-[#936521]">
                  Visa Payment
                </h2>
              </div>

              {/* CARD NUMBER */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  maxLength={19}
                  value={visaNumber}
                  onChange={(e) =>
                    setVisaNumber(
                      e.target.value
                        .replace(/\D/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim()
                    )
                  }
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                />
              </div>

              {/* EXPIRY + CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-medium text-gray-700">Expiry</label>
                  <input
                    type="text"
                    maxLength={5}
                    value={visaExpiry}
                    onChange={(e) =>
                      setVisaExpiry(
                        e.target.value
                          .replace(/\D/g, "")
                          .replace(/(\d{2})(\d{1,2})/, "$1/$2")
                      )
                    }
                    placeholder="MM/YY"
                    className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium text-gray-700">CVV</label>
                  <input
                    type="password"
                    maxLength={3}
                    value={visaCvv}
                    onChange={(e) =>
                      setVisaCvv(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="***"
                    className="rounded-3xl p-3 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-[#936521]"
                  />
                </div>
              </div>

              <button className="w-full bg-[#936521] text-white py-3 rounded-3xl font-semibold hover:bg-[#D8AF53] transition-all duration-300">
                Continue
              </button>
            </form>
          )}
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
