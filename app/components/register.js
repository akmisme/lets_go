"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <form className="flex flex-col mx-auto gap-5 pb-10">
        {/* First Name */}
        <div className="flex gap-5 items-center justify-center">
          <label className="font-bold text-base" htmlFor="phone">
            First Name
          </label>
          <input
            id="phone"
            type="phone"
            className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-80 max-md:w-60 p-1 transition-all ease-in-out duration-500"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        {/* Last Name */}
        <div className="flex gap-5 items-center justify-center">
          <label className="font-bold text-base" htmlFor="phone">
            Last Name
          </label>
          <input
            id="phone"
            type="phone"
            className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-80 max-md:w-60 p-1 transition-all ease-in-out duration-500"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        {/* Phone */}
        <div className="flex gap-5 items-center justify-center">
          <label className="font-bold text-base" htmlFor="phone">
            Last Name
          </label>
          <input
            id="phone"
            type="phone"
            className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-80 max-md:w-60 p-1 transition-all ease-in-out duration-500"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        {/* Email */}
        <div className="flex gap-5 items-center justify-center">
          <label className="font-bold text-base" htmlFor="phone">
            Last Name
          </label>
          <input
            id="phone"
            type="phone"
            className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-80 max-md:w-60 p-1 transition-all ease-in-out duration-500"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        {/* Password */}
        <div className="flex gap-5 items-center justify-center relative">
          <label className="font-bold text-base" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-80 max-md:w-60 p-1 transition-all ease-in-out duration-500"
            placeholder="Enter Your Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {/* Password */}
        <div className="flex gap-5 items-center justify-center relative">
          <label className="font-bold text-base" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] focus:border-dashed w-80 max-md:w-60 p-1 transition-all ease-in-out duration-500"
            placeholder="Enter Your Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Submit */}
        <button
          className="bg-[#936521] text-white px-4 py-2 rounded-md hover:bg-[#D8AF53] transition-all ease-in-out duration-300 cursor-pointer"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
