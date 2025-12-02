import React from "react";

const Contact = () => {
  return (
    <div className="my-10 mx-auto pb-10">
      <h1 className="text-2xl font-bold text-center mb-5">Contact Us</h1>
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
              className="max-h-32 h-32 w-165 spin border border-gray-400 outline-0 focus:border-[#D8AF53] focus:border-dashed rounded-md resize-none overflow-auto transition-all ease-in-out duration-500"
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
    </div>
  );
};

export default Contact;
