"use client";
import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";
import { isValidPhoneNumber } from "libphonenumber-js";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";

const Log = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const pathname = usePathname();
  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const login = currentLocale === "mm" ? mm.login : en.login;

  // ✅ Prevent auto-validation
  const [touched, setTouched] = useState(false);

  // ✅ Load saved login
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

  // ✅ Validate only when needed
  const validatePhone = () => {
    if (!phone || !isValidPhoneNumber(phone)) {
      setError("Invalid phone number");
    } else {
      setError("");
    }
  };

  // ✅ When typing or changing country
  const handlePhoneChange = (value) => {
    setPhone(value);
    if (touched) validatePhone(); // ✅ validate only after first blur
  };

  // ✅ When leaving the field
  const handleBlur = () => {
    setTouched(true);
    validatePhone();
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    validatePhone();

    if (!isValidPhoneNumber(phone)) return;

    // ✅ Save login if checked
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full max-w-md mx-auto rounded-xl p-8 mt-10"
    >

      {/* Phone */}
      {login.map((log, index)=>(
      <div key={index} className="flex flex-col gap-2 w-full">
        <label className="font-bold text-base" htmlFor="phone">
          {log.title1}
        </label>

        <PhoneInput
          id="phone"
          className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={handleBlur} // ✅ validate only when leaving field
          defaultCountry="MM"
          international
          isValidPhoneNumber={true}
          countryCallingCodeEditable={false}
        />
      </div>
      ))}
      {/* Password */}
      {login.map((log, index)=>(
      <div key={index} className="flex flex-col gap-2 w-full relative">
        <label className="font-bold text-base" htmlFor="password">
          {log.title2}
        </label>

        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none"
          placeholder={log.placeholder}
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-[43px] text-gray-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      ))}

      {/* Remember Me */}
      {login.map((log, index)=>(
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label htmlFor="remember">{log.svp}</label>
      </div>
      ))}

      {/* Error */}
      {error && (
        <span className="text-red-500 text-sm text-center">{error}</span>
      )}
      
      {/* Submit */}
      {login.map((log, index)=>(
      <button
        className="bg-[#936521] text-white px-4 py-2 rounded-md hover:bg-[#D8AF53] transition-all duration-300"
        type="submit"
      >
        {log.btn}
      </button>
      ))}

      {login.map((log, index)=>(
      <div className="text-center pt-2">
        <Link
          href="#"
          className="text-[#936521] hover:text-[#D8AF53] cursor-pointer"
        >
          {log.fgt}
        </Link>
      </div>
      ))}
    </form>
  );
};

export default Log;
