"use client";
import React, { useState, useEffect } from "react";

const SearchSection = () => {
  const [today, setToday] = useState("");
  const [open, setOpen] = useState(false);
  const [Passenger, setPassenger] = useState(1); // start with 1 adult
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [date, setDate] = useState("");

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
    setDate(iso);
  }, []);

  const adjust = (setter, value) => {
    setter((prev) => Math.max(0, prev + value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      destination: selectedDestination,
      date,
      Passenger,
    };
    console.log("Form submitted:", formData);
    alert(`Searching for: ${JSON.stringify(formData, null, 2)}`);
    // 👉 Replace with API call or navigation logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-0 bg-white shadow-lg p-6 rounded-lg max-w-7xl mx-auto max-xl:mx-10 -mt-16 grid max-[769px]:grid-cols-2 min-[769px]:grid-cols-5 gap-6"
    >
      {/* Destination */}
      <div className="relative col-span-2">
        <input
          type="text"
          placeholder="City, airport, region, landmark or property name"
          className="w-full border p-3 rounded-md cursor-pointer"
          value={selectedDestination}
          onClick={() => setShowDropdown(true)}
          readOnly
        />
        {showDropdown && (
          <div className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-10">
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
      <div className="relative max-w-md mx-auto">
        <input
          readOnly
          onClick={() => setOpen(!open)}
          value={`${Passenger} Passenger${
            Passenger !== 1 ? "s" : ""
          }`}
          className="w-full border p-3 rounded-md cursor-pointer"
        />

        {open && (
          <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg p-4">
            {[
              { label: "Passenger", value: Passenger, setter: setPassenger },
            ].map(({ label, value, setter }) => (
              <div
                key={label}
                className="flex justify-between items-center mb-3"
              >
                <span>{label}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => adjust(setter, -1)}
                    className="w-8 h-8 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span>{value}</span>
                  <button
                    type="button"
                    onClick={() => adjust(setter, 1)}
                    className="w-8 h-8 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

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
