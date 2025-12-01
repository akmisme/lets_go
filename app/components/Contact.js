import React from "react";

const Contact = () => {
  return (
    <section className="my-10 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-5">Contact Us</h1>
      <form className="mx-5">
        <div className="flex max-[321px]:flex-col gap-5 mb-5">
          <div className="flex flex-col gap-5">
            <label className="font-bold text-base">Name</label>
            <input
              type="text"
              className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-fit max-md:w-40 p-1 transition-all ease-in-out duration-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="font-bold text-base">Email</label>
            <input
              type="email"
              className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-fit max-md:w-40 p-1 transition-all ease-in-out duration-500"
              placeholder="Enter your Email"
              required
            />
          </div>
        </div>
        <div className="flex max-[321px]:flex-col gap-5 mb-5">
          <div className="flex flex-col gap-5">
            <label className="font-bold text-base">Phone</label>
            <input
              type="number"
              className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-fit max-md:w-40 p-1 transition-all ease-in-out duration-500"
              placeholder="Enter your Phone"
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="font-bold text-base">Subject</label>
            <input
              type="text"
              className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-fit max-md:w-40 p-1 transition-all ease-in-out duration-500"
              placeholder="Enter your Subject"
              required
            />
          </div>
        </div>
        <div className="flex gap-5 mb-5">
          <div className="flex flex-col gap-5 w-full">
            <label className="font-bold text-base">Message</label>
            <textarea
              className="max-h-32 h-32 spin border border-gray-400 outline-0 focus:border-[#D8AF53] focus:border-dashed rounded-md resize-none overflow-auto transition-all ease-in-out duration-500"
              placeholder="Enter Your Message"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <button className="bg-blue-500 hover:bg-[#936521] shadow-md transition-all ease-in-out duration-500 rounded-4xl p-2" type="submit">
            Send
          </button>
          <button className="bg-[#D8AF53] hover:bg-red-700 shadow-md transition-all ease-in-out duration-500 rounded-4xl p-2" type="reset">
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
