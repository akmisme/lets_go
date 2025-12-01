"use client";
import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const Log = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  // Load saved Phone & password if "remember me" was checked
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (remember) {
      localStorage.setItem("rememberedPhone", phone);
      localStorage.setItem("rememberedPassword", password); // ⚠️ insecure
    } else {
      localStorage.removeItem("rememberedPhone");
      localStorage.removeItem("rememberedPassword");
    }

    alert(`Logging in as ${phone} with password: ${password}`);
  };

  return (
    <div className="flex flex-col gap-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto gap-5 pb-10"
      >
        {/* Phone */}
        <div className="flex gap-5 items-center justify-center">
          <label className="font-bold text-base" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        {/* Remember Me */}
        <div className="flex gap-5">
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember"> Remember Me</label>
        </div>

        {/* Submit */}
        <button
          className="bg-[#936521] text-white px-4 py-2 rounded-md hover:bg-[#D8AF53] transition-all ease-in-out duration-300 cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="flex gap-5 mx-auto pb-10">
        <label className="text-[#936521] hover:text-[#D8AF53] cursor-pointer">
          <Link href="#" />
          Forget Password
        </label>
        <label>|</label>
        <label className="text-[#936521] hover:text-[#D8AF53] cursor-pointer">
          <Link href="/register" />
          Register
        </label>
      </div>
    </div>
  );
};

export default Log;
