"use client";
import React from "react";
import Image from "next/image";

export default function TourCard() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="100"
      className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
    >
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-lg:gap-5 p-3">
        {/* Left: Image */}
        <div className="space-y-4">
          <Image
            src="/assets/promobanner/bagan.jpg"
            alt="Golden Buddha"
            width={450}
            height={300}
            className="rounded-md object-cover h-full w-full"
          />
        </div>

        {/* Right: Tour Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-yellow-700 mb-2">
              Bagan Package
            </h2>
            <p className="text-sm text-gray-500 mb-4">7 Days · Private Tour</p>
            <div className="grid grid-cols-2 gap-1">
              {/* Destinations */}
              <p className="text-sm text-gray-700 mb-2">📍 Bagan</p>

              {/* Languages */}
              <p className="text-sm text-gray-700 mb-2">
                🗣️ English · German · +3 languages
              </p>

              {/* Date */}
              <p className="text-sm text-gray-700 mb-2">📅 Date · 01-12-1999</p>

              {/* Age Range */}
              <p className="text-sm text-gray-700 mb-2">
                🎂 Age Range · All Age Welcome
              </p>

              {/* Passengers */}
              <p className="text-sm text-gray-700 mb-2">👥 Passengers · 10</p>
            </div>

            {/* Price */}
            <div className="text-lg font-semibold text-green-600 mb-2">
              US$829{" "}
              <span className="line-through text-gray-400 text-sm">US$975</span>{" "}
              <span className="text-sm text-red-500">15% off</span>
            </div>
          </div>

          {/* Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9448.405178748544!2d94.85407358736853!3d21.171711769954342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b5e50393d8ca61%3A0x371a4717c3e89981!2sOld%20Bagan!5e0!3m2!1sen!2smm!4v1764746686022!5m2!1sen!2smm"
              height={200}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-md max-lg:w-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4 items-center max-lg:justify-center">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition cursor-pointer">
                View Tour
              </button>
            <button className="border border-yellow-500 text-yellow-600 px-4 py-2 rounded hover:bg-yellow-50 transition cursor-pointer">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
