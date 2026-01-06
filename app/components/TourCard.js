"use client";
import React from "react";
import Image from "next/image";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";

export default function TourCard() {
  const pathname = usePathname();

  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const package_title =
    currentLocale === "mm" ? mm.package_title : en.package_title;

  // ✅ All data extracted here
  const tour = {
    image: "/assets/promobanner/bagan.jpg",
    title: "Bagan Package",
    subtitle: "7 Days · Private Tour",
    details: {
      destination: "Bagan",
      languages: "English, German, +3",
      date: "01-12-1999",
      ageRange: "All Ages",
      passengers: "10",
    },
    price: {
      current: "US$829",
      old: "US$975",
      discountText: "15% OFF Limited Time",
    },
    buttons: {
      view: "View Tour",
      brochure: "Download Brochure",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9448.405178748544!2d94.85407358736853!3d21.171711769954342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b5e50393d8ca61%3A0x371a4717c3e89981!2sOld%20Bagan!5e0!3m2!1sen!2smm!4v1764746686022!5m2!1sen!2smm",
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
          <img
            class="rounded-base"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
          <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
            Streamlining your design process today.
          </h5>
        <p class="mb-6 text-body">
          In today’s fast-paced digital landscape, fostering seamless
          collaboration among Developers and IT Operations.
        </p>
        <a
          href="#"
          class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Read more
          <svg
            class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>

      {/* ✅ HERO IMAGE */}
      <div className="relative w-full h-[260px]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
        />

        {/* ✅ Promotion Badge */}
        <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-semibold px-4 py-1.5 rounded-lg shadow-lg">
          {tour.price.discountText}
        </div>

        {/* ✅ Floating Title */}
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-xl">
          <h2 className="text-xl font-bold">{tour.title}</h2>
          <p className="text-xs opacity-90">{tour.subtitle}</p>
        </div>
      </div>

      {/* ✅ CONTENT */}
      <div className="p-6 grid grid-cols-4 md:grid-cols-2 gap-8">
        {/* ✅ LEFT SIDE: DETAILS */}
        <div className="space-y-4">
          {package_title.map((pack, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-y-2 text-gray-700 text-sm"
            >
              <p>📍 {pack.title1}</p>
              <p className="font-medium">{tour.details.destination}</p>

              <p>🗣️ {pack.title2}</p>
              <p>{tour.details.languages}</p>

              <p>📅 {pack.title3}</p>
              <p>{tour.details.date}</p>

              <p>🎂 {pack.title4}</p>
              <p>{tour.details.ageRange}</p>

              <p>👥 {pack.title5}</p>
              <p>{tour.details.passengers}</p>

              <p>📋 {pack.title6}</p>
              <p>BLACKFRIDAY2025</p>
            </div>
          ))}

          {/* ✅ PRICE */}
          <div className="pt-2">
            <p className="text-3xl font-extrabold text-green-600">
              {tour.price.current}
              <span className="text-gray-400 text-base line-through ml-2">
                {tour.price.old}
              </span>
            </p>
            <p className="text-red-500 font-semibold text-sm">
              {tour.price.discountText}
            </p>
          </div>

          {/* ✅ BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button className="bg-yellow-500 text-white px-5 py-2.5 rounded-xl hover:bg-yellow-600 transition font-semibold shadow cursor-pointer">
              {tour.buttons.view}
            </button>
            <button className="border border-yellow-500 text-yellow-600 px-5 py-2.5 rounded-xl hover:bg-yellow-50 transition font-semibold shadow cursor-pointer">
              {tour.buttons.brochure}
            </button>
          </div>
        </div>

        {/* ✅ RIGHT SIDE: MAP */}
        <div>
          <iframe
            src={tour.map}
            className="rounded-xl w-full aspect-video shadow"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
