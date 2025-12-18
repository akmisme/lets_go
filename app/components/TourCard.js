"use client";
import React from "react";
import Image from "next/image";
import CopyTextButton from "./CopyButton";

export default function TourCard() {
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
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✅ LEFT SIDE: DETAILS */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-sm">
            <p>📍 Destination</p>
            <p className="font-medium">{tour.details.destination}</p>

            <p>🗣️ Languages</p>
            <p>{tour.details.languages}</p>

            <p>📅 Date</p>
            <p>{tour.details.date}</p>

            <p>🎂 Age Range</p>
            <p>{tour.details.ageRange}</p>

            <p>👥 Passengers</p>
            <p>{tour.details.passengers}</p>

            <p>📋 Promotion Code</p>
            <p>BLACKFRIDAY2025</p>
          </div>

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