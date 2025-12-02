"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    // ✅ Continue with form submission logic
    console.log("Form submitted:", { password, confirmPassword });
    alert("Registration successful!");
  };

  return (
    <div className="flex flex-col gap-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto gap-5 pb-10"
      >
        <div className="flex gap-5 items-center justify-center">
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-base" htmlFor="first_name">
              First Name
            </label>
            <input
              id="first_name"
              type="text"
              className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] 
                         focus:border-dashed w-80 max-md:w-60 p-1 transition-all ease-in-out duration-500"
              placeholder="Enter Your First Name"
              required
            />
          </div>
          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-base" htmlFor="last_name">
              Last Name
            </label>
            <input
              id="last_name"
              type="text"
              className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] 
                         focus:border-dashed w-80 max-md:w-60 p-1 transition-all ease-in-out duration-500"
              placeholder="Enter Your Last Name"
              required
            />
          </div>
        </div>

        <div className="flex gap-5 items-center justify-center">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-base" htmlFor="email">
              Email (Optional)
            </label>
            <input
              id="email"
              type="email"
              className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] 
                         focus:border-dashed w-80 max-md:w-60 p-1 transition-all ease-in-out duration-500"
              placeholder="Enter Your Email"
            />
          </div>
          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-base" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] 
                         focus:border-dashed w-80 max-md:w-60 p-1 transition-all ease-in-out duration-500"
              placeholder="eg. +95 1234567890"
              required
            />
          </div>
        </div>

        <div className="flex gap-5 items-center justify-center">
          {/* Password */}
          <div className="flex flex-col gap-2 w-80 max-md:w-60">
            <label className="font-bold text-base" htmlFor="password">
              Password
            </label>
            <div className="relative w-full">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] 
                           focus:border-dashed w-full p-2 pr-10 transition-all ease-in-out duration-500"
                placeholder="Enter Your Password"
                required
                pattern="^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
                title="Password must be at least 8 characters long and include at least one special character (!@#$%^&*)."
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2 w-80 max-md:w-60">
            <label className="font-bold text-base" htmlFor="cf_password">
              Confirm Password
            </label>
            <div className="relative w-full">
              <input
                id="cf_password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-400 rounded-4xl outline-0 focus:border-[#D8AF53] 
                           focus:border-dashed w-full p-2 pr-10 transition-all ease-in-out duration-500"
                placeholder="Enter Your Confirm Password"
                required
                pattern="^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
                title="Password must be at least 8 characters long and include at least one special character (!@#$%^&*)."
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-600 font-semibold text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          className="bg-[#936521] text-white mt-5 px-4 py-2 rounded-md hover:bg-[#D8AF53] 
                     transition-all ease-in-out duration-300 cursor-pointer"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
