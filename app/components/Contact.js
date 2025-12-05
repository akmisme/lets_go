"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contact = () => {
  const [value, setValue] = useState("");

  return (
    <div className="mt-10 mx-auto pb-5">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="100"
        className="flex gap-10 mx-20 max-xl:flex-col max-md:mx-auto"
      >
        <form className="flex flex-col mx-auto">
          <div className="flex flex-col md:flex-row gap-5 mb-5 mx-auto">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-base" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="border border-gray-400 rounded-3xl outline-none w-full max-w-md py-2 px-7"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-base" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="border border-gray-400 rounded-3xl outline-none w-full max-w-md py-2 px-7"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Phone + Subject */}
          <div className="flex flex-col md:flex-row gap-5 mb-5 mx-auto">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-base" htmlFor="phone">
                Phone
              </label>
              <PhoneInput
                placeholder="Enter phone number"
                className="border border-gray-400 rounded-3xl outline-none w-full max-w-md p-2"
                value={value}
                onChange={setValue}
                defaultCountry="US"
                international
                countryCallingCodeEditable={false}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-base" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="border border-gray-400 rounded-3xl outline-none w-full max-w-md py-2 px-7"
                placeholder="Enter your subject"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex gap-5 mb-5 mx-auto w-full max-w-2xl">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-bold text-base" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 border border-gray-400 outline-none rounded-md resize-none overflow-auto p-2"
                placeholder="Enter your message"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col mt-5 gap-2 mx-auto w-full max-w-md">
            <button
              className="bg-blue-500 hover:bg-[#936521] shadow-md transition-all ease-in-out duration-500 rounded-3xl p-2 cursor-pointer text-white"
              type="submit"
            >
              Send
            </button>
            <button
              className="bg-[#D8AF53] hover:bg-red-700 shadow-md transition-all ease-in-out duration-500 rounded-3xl p-2 cursor-pointer text-white"
              type="reset"
            >
              Clear
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center pb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.6743300391713!2d96.13152027461558!3d16.842504818274506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195e4c8eabd11%3A0xceb012d50969af9f!2sYolo%20Digital%20Marketing%20Company!5e0!3m2!1sen!2smm!4v1764660612346!5m2!1sen!2smm"
            width="650"
            height="500"
            className="rounded-md shadow-md max-xl:w-full"
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
