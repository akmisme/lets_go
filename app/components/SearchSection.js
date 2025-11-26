"use client";
import Image from "next/image";
import React from "react";

const SearchSection = () => {
  return (
      <form className="relative z-0 bg-white shadow-lg p-6 rounded-lg max-w-6xl mx-auto -mt-16 grid grid-cols-1 md:grid-cols-6 gap-4">
        <input
          type="text"
          placeholder="City, airport, region, landmark or property name"
          className="col-span-2 border p-3 rounded-md cursor-pointer"
        />
        <input type="date" defaultValue="xxxx-xx-xx" className="border p-3 rounded-md cursor-pointer" />
        <select className="border p-3 rounded-md cursor-pointer">
          <option>2 adults</option>
          <option>4 adults</option>
        </select>
        <button className="bg-[#936521] text-white px-6 py-3 rounded-md hover:bg-[#D8AF53] cursor-pointer">Search</button>
      </form>
  );
}

export default SearchSection;
