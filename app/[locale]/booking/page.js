"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import en from "../../../messages/en.json";
import mm from "../../../messages/mm.json";
import { usePathname } from "next/navigation";

const Booking = () => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // NRC State, District, Type, Number
  const [StateCode, setStateCode] = useState("");
  const [TownShip, setTownShip] = useState("");
  const [CitizenShipType, setCitizenShipType] = useState("");
  const [nrcNumber, setNrcNumber] = useState("");
  const [nrcError, setNrcError] = useState("");

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const Citizen = currentLocale === "mm" ? mm.Citizen : en.Citizen;

  // Build NRC string
  const buildNRC = () => {
    if (!StateCode || !TownShip || !CitizenShipType || !nrcNumber) return "";
    return `${StateCode}/${TownShip}(${CitizenShipType})${nrcNumber}`;
  };

  // Validate NRC
  const validateNRC = () => {
    const regex = /^[0-9]{1,2}\/[A-Za-z]{3,6}\([A-Z]\)[0-9]{6}$/;
    return regex.test(buildNRC());
  };

  // Phone handlers
  const handlePhoneChange = (value) => {
    setPhone(value);
    setPhoneError("");
  };

  const handleBlur = () => {
    if (phone && !isValidPhoneNumber(phone)) {
      setPhoneError("Invalid phone number");
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number");
      return;
    }

    if (!validateNRC()) {
      setNrcError("Invalid NRC format. Example: 12/KaMaNa(N)123456");
      return;
    }

    setNrcError("");

    console.log("Form submitted");
    console.log("NRC:", buildNRC());
  };

  return (
    <section className="py-16 bg-gray-100 text-sm">
      <h1 className="text-4xl font-semibold text-center mb-12 tracking-tight">
        Booking Form
      </h1>
      <div className="grid grid-cols-2 bg-white mb-5 text-justify mx-auto max-w-2xl p-4 shadow-md rounded-2xl">
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-3xl font-bold">Bagan Package</h1>
          <h1>Destination - Bagan, Myanmar</h1>
          <h1>Date - 12-23-2025</h1>
          <h1>Price - 500 MMK</h1>
        </div>
        <div>
          <img src="/assets/promobanner/bagan.jpg" className="rounded-2xl"/>
        </div>
      </div>
      <form
        className="max-w-xl mx-auto max-md:mx-5 bg-white shadow-lg rounded-2xl p-10 space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-[#936521] outline-none transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Email</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-[#936521] outline-none transition"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Phone</label>
          <PhoneInput
            id="phone"
            className="rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-[#936521] outline-none transition"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={handleBlur}
            defaultCountry="MM"
            international
            countryCallingCodeEditable={false}
          />
          {phoneError && (
            <p className="text-red-600 text-sm mt-1">{phoneError}</p>
          )}
        </div>

        {/* ✅ NRC Section */}
        <div className="grid grid-cols-3 gap-3">
          {/* ✅ State */}
          <select
            value={StateCode}
            onChange={(e) => setStateCode(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 cursor-pointer"
          >
            <option value="">State</option>
            {Object.entries(Citizen.StateCode).map(([code, label]) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>

          {/* ✅ District */}
          <select
            value={TownShip}
            onChange={(e) => setTownShip(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 cursor-pointer"
          >
            <option value="">District</option>
            {StateCode &&
              Citizen.TownShip[StateCode] &&
              Object.entries(Citizen.TownShip[StateCode]).map(
                ([code, label]) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                )
              )}
          </select>

          {/* ✅ Type */}
          <select
            value={CitizenShipType}
            onChange={(e) => setCitizenShipType(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 bg-gray-50 cursor-pointer"
          >
            <option value="">Type</option>
            {Object.entries(Citizen.CitizenShipType).map(([code, label]) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* NRC Number */}
        <input
          type="text"
          placeholder="123456"
          maxLength={6}
          value={nrcNumber}
          onChange={(e) => setNrcNumber(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 bg-gray-50"
        />

        {/* Preview */}
        <div className="p-3 bg-gray-100 rounded-xl text-gray-700 text-sm">
          <span className="font-medium cursor-pointer">Preview:</span>{" "}
          {buildNRC() || "—"}
        </div>

        {nrcError && <p className="text-red-600 text-sm">{nrcError}</p>}

        {/* Buttons */}
        <div className="pt-4 flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-[#936521] text-white py-3 rounded-xl font-medium hover:bg-[#7a5220] transition cursor-pointer"
          >
            Book
          </button>
          <button
            type="reset"
            className="flex-1 border border-gray-400 py-3 rounded-xl font-medium hover:bg-gray-200 transition cursor-pointer"
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default Booking;
