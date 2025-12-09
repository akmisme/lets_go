"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const SearchSection = () => {
  const router = useRouter();
  const [today, setToday] = useState("");
  const [open, setOpen] = useState(false);
  const [Passenger, setPassenger] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [query, setQuery] = useState("");   // ✅ user-typed search
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

  // ✅ Filter destinations based on typed query
  const filteredDestinations = destinations.filter((dest) =>
    dest.toLowerCase().includes(query.toLowerCase())
  );

  const adjust = (setter, value) => {
    setter((prev) => Math.max(0, prev + value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      destination: query,   // ✅ use typed query
      date,
      Passenger,
    };

    // Navigate to another page with query params
    router.push(
      `/filterpage?destination=${encodeURIComponent(
        formData.destination
      )}&date=${formData.date}&passenger=${formData.Passenger}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-white shadow-lg p-6 rounded-lg max-w-7xl mx-auto max-xl:mx-10 -mt-16 grid max-[769px]:grid-cols-2 min-[769px]:grid-cols-5 gap-6"
    >
      {/* Destination */}
      <div className="relative col-span-2" ref={dropdownRef}>
        <input
          type="text"
          placeholder="City, airport, region, landmark or property name"
          className="w-full border p-3 rounded-md"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
        />
        {showDropdown && query && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-50 max-h-60 overflow-y-auto">
            <ul className="divide-y divide-gray-200">
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((dest, index) => (
                  <li
                    key={index}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
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
      <input
        type="date"
        value={date}
        min={today}
        onChange={(e) => setDate(e.target.value)}
        className="border p-3 rounded-md cursor-pointer"
      />

      {/* Guests */}
      <div className="relative max-w-md mx-auto" ref={passengerRef}>
        <input
          readOnly
          onClick={() => setOpen(!open)}
          value={`${Passenger} Passenger${Passenger !== 1 ? "s" : ""}`}
          className="w-full border p-3 rounded-md cursor-pointer"
        />

        {open && (
          <div className="absolute top-full left-0 z-50 mt-2 w-full bg-white border rounded-md shadow-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center mx-auto gap-2 flex-col">
                <button
                  type="button"
                  onClick={() => adjust(setPassenger, -1)}
                  className="w-10 h-10 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
                >
                  −
                </button>
                <span>{Passenger}</span>
                <button
                  type="button"
                  onClick={() => adjust(setPassenger, 1)}
                  className="w-10 h-10 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-4 w-full bg-[#936521] text-white py-2 rounded-md hover:bg-[#D8AF53] transition"
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-[#936521] text-white px-0 py-3 rounded-md hover:bg-[#D8AF53] cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default SearchSection;