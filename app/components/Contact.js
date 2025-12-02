import React from "react";

const Contact = () => {
  return (
    <div className="mt-10 mx-auto pb-5">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>
      <div className="flex gap-10 mx-20 max-xl:flex-col max-md:mx-auto">
        <form className="flex flex-col">
          <div className="flex max-[321px]:flex-col gap-5 mb-5 mx-auto">
            <div className="flex flex-col gap-5">
              <label className="font-bold text-base" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-80 max-md:w-40 p-1 transition-all ease-in-out duration-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="font-bold text-base" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-80 max-md:w-40 p-1 transition-all ease-in-out duration-500"
                placeholder="Enter your Email"
                required
              />
            </div>
          </div>
          <div className="flex max-[321px]:flex-col gap-5 mb-5 mx-auto">
            <div className="flex flex-col gap-5">
              <label className="font-bold text-base" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-80 max-md:w-40 p-1 transition-all ease-in-out duration-500"
                placeholder="eg. +95 1234567890"
                required
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="font-bold text-base" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-80 max-md:w-40 p-1 transition-all ease-in-out duration-500"
                placeholder="Enter your Subject"
                required
              />
            </div>
          </div>
          <div className="flex gap-5 mb-5 mx-auto">
            <div className="flex flex-col gap-5">
              <label className="font-bold text-base" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="max-h-32 h-32 w-165 max-md:w-80 spin border border-gray-400 outline-0 focus:border-[#D8AF53] focus:border-dashed rounded-md resize-none overflow-auto transition-all ease-in-out duration-500"
                placeholder="Enter Your Message"
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-2 mx-auto">
            <button
              className="bg-blue-500 w-80 hover:bg-[#936521] shadow-md transition-all ease-in-out duration-500 rounded-4xl p-2 cursor-pointer"
              type="submit"
            >
              Send
            </button>
            <button
              className="bg-[#D8AF53] w-80 hover:bg-red-700 shadow-md transition-all ease-in-out duration-500 rounded-4xl p-2 cursor-pointer"
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
