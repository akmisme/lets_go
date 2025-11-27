"use client";
import React, { useState, useEffect } from "react";

const SearchSection = () => {
  const [today, setToday] = useState("");
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");

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

  const handleSelect = (destination) => {
    setSelectedDestination(destination);
    setShowDropdown(false);
  };

  useEffect(() => {
    const now = new Date();
    const iso = now.toISOString().slice(0, 10); // "YYYY-MM-DD"
    setToday(iso);
  }, []);

  const adjust = (setter, value) => {
    setter((prev) => Math.max(0, prev + value));
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative z-0 bg-white shadow-lg p-6 rounded-lg max-w-7xl mx-auto -mt-16 grid max-[769px]:grid-cols-2 min-[769px]:grid-cols-5 gap-6"
    >
      <input
        type="text"
        placeholder="City, airport, region, landmark or property name"
        className="col-span-2 border p-3 rounded-md cursor-pointer"
        value={selectedDestination}
        onClick={() => setShowDropdown(true)}
        readOnly
      />
      {showDropdown && (
        <div className="absolute top-5 left-5 w-120 bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-10">
          <ul className="divide-y divide-gray-200">
            {destinations.map((dest, index) => (
              <li
                key={index}
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(dest)}
              >
                {dest}
              </li>
            ))}
          </ul>
        </div>
      )}
      <input
        type="date"
        defaultValue={today}
        min={today}
        className="border p-3 rounded-md cursor-pointer"
      />
      <div className="relative max-w-md mx-auto">
        <input
          readOnly
          onClick={() => setOpen(!open)}
          value={`${adults} Adult${
            adults !== 1 ? "s" : ""
          } · ${children} Child${children !== 1 ? "ren" : ""}`}
          className="w-full border p-3 rounded-md cursor-pointer"
        />

        {open && (
          <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg p-4">
            {[
              { label: "Adult", value: adults, setter: setAdults },
              {
                label: "Child",
                value: children,
                setter: setChildren,
              },
            ].map(({ label, value, setter }) => (
              <div
                key={label}
                className="flex justify-between items-center mb-3"
              >
                <span>{label}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => adjust(setter, -1)}
                    className="w-8 h-8 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span>{value}</span>
                  <button
                    onClick={() => adjust(setter, 1)}
                    className="w-8 h-8 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full bg-[#936521] text-white py-2 rounded-md hover:bg-[#D8AF53] transition"
            >
              Done
            </button>
          </div>
        )}
      </div>
      <button className="bg-[#936521] text-white px-0 py-3 rounded-md hover:bg-[#D8AF53] cursor-pointer">
        Search
      </button>
    </form>
  );
};

export default SearchSection;
