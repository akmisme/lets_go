"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const SearchSection = () => {
  const router = useRouter();
  const [today, setToday] = useState("");
  const [open, setOpen] = useState(false);
  const [Passenger, setPassenger] = useState("1");
  const [showDropdown, setShowDropdown] = useState(false);
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");

  const dropdownRef = useRef(null);
  const passengerRef = useRef(null);

  const destinations = [
    "Bagan, Myanmar",
    "Mandalay, Myanmar",
    "Yangon, Myanmar",
    "Taunggyi, Myanmar",
    "Kalaw, Myanmar",
    "Hpa-an, Myanmar",
    "Inle Lake, Myanmar",
    "Ngwesaung, Myanmar",
    "Chaung Thar, Myanmar",
  ];

  useEffect(() => {
    const now = new Date();
    const iso = now.toISOString().slice(0, 10);
    setToday(iso);
    setDate(iso);

    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        passengerRef.current &&
        !passengerRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredDestinations = destinations.filter((dest) =>
    dest.toLowerCase().includes(query.toLowerCase())
  );

  const adjust = (setter, value) => {
    setter((prev) => Math.max(0, prev + value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/filterpage?destination=${encodeURIComponent(
        query
      )}&date=${date}&passenger=${Passenger}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        relative z-10 bg-white shadow-2xl p-8 rounded-3xl 
        max-w-7xl mx-auto -mt-24
        grid gap-6
        xl:grid-cols-5
        lg:grid-cols-5
        md:grid-cols-4
        sm:grid-cols-2
        grid-cols-1
        border border-gray-100
      "
    >
      {/* Destination */}
      <div className="relative col-span-2" ref={dropdownRef}>
        <label className="text-sm font-semibold text-gray-700 mb-1 block">
          Destination
        </label>

        <div className="relative">
          <input
            type="text"
            placeholder="Search city, region, landmark..."
            className="
              w-full border p-3 rounded-xl 
              focus:ring-2 focus:ring-[#936521] outline-none
              transition-all duration-200
            "
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowDropdown(true);
            }}
          />
        </div>

        {showDropdown && query && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl mt-2 z-50 max-h-60 overflow-y-auto">
            <ul className="divide-y divide-gray-100">
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((dest, index) => (
                  <li
                    key={index}
                    className="p-3 hover:bg-gray-100 cursor-pointer transition"
                    onClick={() => {
                      setQuery(dest);
                      setShowDropdown(false);
                    }}
                  >
                    {dest}
                  </li>
                ))
              ) : (
                <li className="p-3 text-gray-500">No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Date */}
      <div>
        <label className="text-sm font-semibold text-gray-700 mb-1 block">
          Date
        </label>
        <input
          type="date"
          value={date}
          min={today}
          onChange={(e) => setDate(e.target.value)}
          className="
            w-full border p-3 rounded-xl cursor-pointer 
            focus:ring-2 focus:ring-[#936521] outline-none
            transition-all duration-200
          "
        />
      </div>

      {/* Passengers */}
      <div className="relative" ref={passengerRef}>
        <label className="text-sm font-semibold text-gray-700 mb-1 block">
          Passengers
        </label>
        <input
          readOnly
          onClick={() => setOpen(!open)}
          value={`${Passenger} Passenger${Passenger !== 1 ? "s" : ""}`}
          className="
            w-full border p-3 rounded-xl cursor-pointer 
            focus:ring-2 focus:ring-[#936521] outline-none
            transition-all duration-200
          "
        />

        {open && (
          <div className="absolute top-full left-0 z-50 mt-2 w-full bg-white border rounded-xl shadow-xl p-4">
            <div className="flex justify-center items-center gap-6">
              <button
                type="button"
                onClick={() => adjust(setPassenger, -1)}
                className="
                  w-10 h-10 bg-gray-200 rounded-full 
                  text-lg font-bold hover:bg-gray-300 transition
                "
              >
                −
              </button>

              <span className="text-lg font-semibold">{Passenger}</span>

              <button
                type="button"
                onClick={() => adjust(setPassenger, 1)}
                className="
                  w-10 h-10 bg-gray-200 rounded-full 
                  text-lg font-bold hover:bg-gray-300 transition
                "
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="
                mt-4 w-full bg-[#936521] text-white py-2 rounded-xl 
                hover:bg-[#D8AF53] transition font-semibold
              "
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* Submit */}
      <div className="flex items-end">
        <button
          type="submit"
          className="
            w-full bg-[#936521] text-white py-3 rounded-xl 
            hover:bg-[#D8AF53] transition font-semibold shadow-md
          "
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchSection;
