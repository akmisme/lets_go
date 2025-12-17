"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";

const Contact = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const pathname = usePathname();
  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const contactus = currentLocale === "mm" ? mm.contact : en.contact;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(value)) {
      setError("Invalid phone number format or length.");
      return;
    }

    setError("");
    console.log("Form submitted with:", { value });
  };

  return (
    <div className="mt-10 mx-auto pb-5">
      {contactus.map((contact, index)=>(
      <h1 key={index} className="text-3xl font-bold text-center mb-10">{contact.title1}</h1>
      ))}
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="100"
        className="flex flex-col xl:flex-row gap-10 w-full max-w-7xl mx-auto px-5 items-start xl:items-stretch"
      >
        {/* ✅ FORM */}
        {contactus.map((contact, index)=>(
        <form
          key={index}
          className="flex flex-col w-full xl:w-1/2 bg-white shadow-md rounded-xl p-8"
          onSubmit={handleSubmit}
        >
          {/* ✅ Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm" htmlFor="name">
                {contact.subtitle1}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none"
                placeholder={contact.placeholder1}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm" htmlFor="email">
                {contact.subtitle2}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none"
                placeholder={contact.placeholder2}
                required
              />
            </div>
          </div>

          {/* ✅ Phone + Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm" htmlFor="phone">
                {contact.subtitle3}
              </label>
              <PhoneInput
                id="phone"
                placeholder="Enter phone number"
                className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none"
                value={value}
                onChange={setValue}
                defaultCountry="MM"
                international
                countryCallingCodeEditable={false}
                focusInputOnCountrySelection
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm" htmlFor="subject">
                {contact.subtitle4}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none"
                placeholder={contact.placeholder3}
                required
              />
            </div>
          </div>

          {/* ✅ Message */}
          <div className="flex flex-col gap-2 mb-5 w-full">
            <label className="font-bold text-sm" htmlFor="message">
              {contact.subtitle5}
            </label>
            <textarea
              id="message"
              name="message"
              className="h-32 rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none resize-none"
              placeholder={contact.placeholder4}
              required
            />
          </div>

          {/* ✅ Error */}
          {error && (
            <span className="text-red-500 text-sm text-center">{error}</span>
          )}

          {/* ✅ Buttons */}
          {contactus.map((contact, index)=>(
          <div key={index} className="flex flex-col mt-5 gap-3 w-full max-w-md mx-auto">
            <button
              className="bg-[#936521] hover:bg-[#D8AF53] shadow-md transition-all duration-300 rounded-3xl p-2 text-white"
              type="submit"
            >
              {contact.btn1}
            </button>

            <button
              className="bg-gray-300 hover:bg-red-600 shadow-md transition-all duration-300 rounded-3xl p-2 text-black hover:text-white"
              type="reset"
              onClick={() => {
                setValue("");
                setError("");
              }}
            >
              {contact.btn2}
            </button>
          </div>
          ))}
        </form>
        ))}

        {/* ✅ MAP — PERFECTLY ALIGNED */}
        <div className="flex justify-center items-stretch w-full xl:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13948.529776221692!2d96.14214415188654!3d16.832370232953423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195e4c8eabd11%3A0xceb012d50969af9f!2sYolo%20Digital%20Marketing%20Company!5e1!3m2!1sen!2smm!4v1765165031535!5m2!1sen!2smm"
            className="rounded-md shadow-md w-full aspect-video max-md:aspect-[4/5]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
