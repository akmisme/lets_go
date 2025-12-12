"use client";
import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";
import { isValidPhoneNumber } from "libphonenumber-js";

const Log = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedPhone = localStorage.getItem("rememberedPhone");
    const savedPassword = localStorage.getItem("rememberedPassword");

    if (savedPhone) {
      setPhone(savedPhone);
      setRemember(true);
    }
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);

  useEffect(() => {
    if (phone && !isValidPhoneNumber(phone)) {
      setError("Invalid phone number");
    } else {
      setError("");
    }
  }, [phone]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(phone)) {
      setError("Please enter a valid phone number");
      return;
    }

    setError("");

    if (remember) {
      localStorage.setItem("rememberedPhone", phone);
      localStorage.setItem("rememberedPassword", password);
    } else {
      localStorage.removeItem("rememberedPhone");
      localStorage.removeItem("rememberedPassword");
    }

    alert(`Logging in as ${phone}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full pb-4 mt-10">
      {/* Phone */}
      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-base" htmlFor="phone">
          Phone
        </label>
        <PhoneInput
          id="phone"
          className="border border-gray-400 rounded-3xl p-3 w-full"
          value={phone}
          onChange={setPhone}
          defaultCountry="MM"
          international
          countryCallingCodeEditable={false}
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2 w-full relative">
        <label className="font-bold text-base" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 rounded-3xl p-3 w-full"
          placeholder="Enter Your Password"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-[43px]"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Remember Me */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label htmlFor="remember">Remember Me</label>
      </div>

      {/* Error */}
      {error && (
        <span className="text-red-500 text-sm text-center">{error}</span>
      )}

      {/* Submit */}
      <button
        className="bg-[#936521] text-white px-4 py-2 rounded-md hover:bg-[#D8AF53] transition-all duration-300"
        type="submit"
      >
        Login
      </button>

      <div className="text-center pt-2">
        <Link
          href="#"
          className="text-[#936521] hover:text-[#D8AF53] cursor-pointer"
        >
          Forget Password
        </Link>
      </div>
    </form>
  );
};

export default Log;