"use client";
import React from "react";
import Image from "next/image";

export default function TourCard() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      {/* ✅ HERO IMAGE */}
      <div className="relative w-full h-[260px]">
        <Image
          src="/assets/promobanner/bagan.jpg"
          alt="Bagan Tour"
          fill
          className="object-cover"
        />

        {/* ✅ Floating Title */}
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-xl">
          <h2 className="text-xl font-bold">Bagan Package</h2>
          <p className="text-xs opacity-90">7 Days · Private Tour</p>
        </div>
      </div>

      {/* ✅ CONTENT */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ✅ LEFT SIDE: DETAILS */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-sm">
            <p>📍 Destination</p><p className="font-medium">Bagan</p>
            <p>🗣️ Languages</p><p>English, German, +3</p>
            <p>📅 Date</p><p>01-12-1999</p>
            <p>🎂 Age Range</p><p>All Ages</p>
            <p>👥 Passengers</p><p>10</p>
          </div>

          {/* ✅ PRICE */}
          <div className="pt-2">
            <p className="text-3xl font-extrabold text-green-600">
              US$829
              <span className="text-gray-400 text-base line-through ml-2">
                US$975
              </span>
            </p>
            <p className="text-red-500 font-semibold text-sm">15% OFF Limited Time</p>
          </div>

          {/* ✅ BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button className="bg-yellow-500 text-white px-5 py-2.5 rounded-xl hover:bg-yellow-600 transition font-semibold shadow cursor-pointer">
              View Tour
            </button>
            <button className="border border-yellow-500 text-yellow-600 px-5 py-2.5 rounded-xl hover:bg-yellow-50 transition font-semibold shadow cursor-pointer">
              Download Brochure
            </button>
          </div>
        </div>

        {/* ✅ RIGHT SIDE: MAP */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9448.405178748544!2d94.85407358736853!3d21.171711769954342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b5e50393d8ca61%3A0x371a4717c3e89981!2sOld%20Bagan!5e0!3m2!1sen!2smm!4v1764746686022!5m2!1sen!2smm"
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