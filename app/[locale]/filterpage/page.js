"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SearchSection from "@/app/components/SearchSection";

export default function FilterPage() {
  const params = useSearchParams();
  const destination = params.get("destination");
  const date = params.get("date");
  const passenger = params.get("passenger");

  const trips = [
    { destination: "Bagan, Myanmar", date: "2025-12-29", passenger: "2" },
    { destination: "Mandalay, Myanmar", date: "2025-12-10", passenger: "1" },
    { destination: "Yangon, Myanmar", date: "2025-12-09", passenger: "3" },
    { destination: "Inle Lake, Myanmar", date: "2025-12-11", passenger: "2" },
    { destination: "Ngwesaung, Myanmar", date: "2025-12-09", passenger: "1" },
  ];

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (destination && date && passenger) {
      const filtered = trips.filter(
        (trip) =>
          trip.destination.toLowerCase().includes(destination.toLowerCase()) &&
          trip.date === date &&
          trip.passenger === passenger
      );
      setResults(filtered);
    }
  }, [destination, date, passenger]);

  return (
    <main className="mt-30 py-10 bg-gray-100 min-h-screen">
      {/* Search Section */}
      <div className="pt-20 mx-5">
        <SearchSection />
      </div>
      <h1 className="text-gray-500 font-bold text-2xl md:text-3xl text-center mb-10 px-4 mt-5">
        Searched... {destination}, {date}, {passenger}
      </h1>

      {results.length > 0 ? (
        <ul className="space-y-10 px-4">
          {results.map((r, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="1500"
              className="
                max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden
                transition-all duration-300 hover:shadow-2xl
              "
            >
              {/* ✅ HERO IMAGE */}
              <div className="relative w-full h-[220px] sm:h-[260px]">
                <Image
                  src="/assets/promobanner/bagan.jpg"
                  alt="Bagan Tour"
                  fill
                  className="object-cover"
                />

                {/* ✅ Floating Title */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-xl">
                  <h2 className="text-lg sm:text-xl font-bold">
                    Bagan Package
                  </h2>
                  <p className="text-xs opacity-90">7 Days · Private Tour</p>
                </div>
              </div>

              {/* ✅ CONTENT */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* ✅ LEFT SIDE */}
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-y-3 text-gray-700 text-sm sm:text-base">
                    <p>📍 Destination</p>
                    <p className="font-medium">{r.destination}</p>

                    <p>🗣️ Languages</p>
                    <p>English, German, +3</p>

                    <p>📅 Date</p>
                    <p>{r.date}</p>

                    <p>🎂 Age Range</p>
                    <p>All Ages</p>

                    <p>👥 Passengers</p>
                    <p>{r.passenger}</p>

                    <p>📋 Promotion Code</p>
                    <p>BLACKFRIDAY2025</p>
                  </div>

                  {/* ✅ PRICE */}
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-green-600">
                      US$829
                      <span className="text-gray-400 text-base line-through ml-2">
                        US$975
                      </span>
                    </p>
                    <p className="text-red-500 font-semibold text-sm">
                      15% OFF Limited Time
                    </p>
                  </div>

                  {/* ✅ BUTTONS */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button className="bg-yellow-500 text-white px-5 py-2.5 rounded-xl hover:bg-yellow-600 transition font-semibold shadow cursor-pointer">
                      View Tour
                    </button>
                    <button className="border border-yellow-500 text-yellow-600 px-5 py-2.5 rounded-xl hover:bg-yellow-50 transition font-semibold shadow cursor-pointer">
                      Download Brochure
                    </button>
                  </div>
                </div>

                {/* ✅ RIGHT SIDE: MAP */}
                <div className="w-full">
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
          ))}
        </ul>
      ) : (
        <p className="text-red-500 text-center text-lg px-4">
          No results found for "{destination}, {date}, {passenger}"
        </p>
      )}
    </main>
  );
}