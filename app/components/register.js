"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  // ✅ Global phone validation (live)
  const handlePhoneChange = (value) => {
    setPhone(value);

    if (!value) {
      setPhoneError("Phone number is required");
      return;
    }

    if (!isValidPhoneNumber(value)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  // ✅ Password strength rule
  const validatePassword = (pwd) => {
    const regex = /^(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(phone)) {
      setError("Please enter a valid phone number");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include one special character (!@#$%^&*)."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    alert("Registration successful!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto p-8 mt-5"
    >
      {/* ✅ First Name */}
      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-sm">First Name</label>
        <input
          type="text"
          className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none"
          placeholder="Enter Your First Name"
          required
        />
      </div>

      {/* ✅ Last Name */}
      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-sm">Last Name</label>
        <input
          type="text"
          className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none"
          placeholder="Enter Your Last Name"
          required
        />
      </div>

      {/* ✅ Email (full width) */}
      <div className="flex flex-col gap-2 w-full md:col-span-2">
        <label className="font-bold text-sm">Email (Optional)</label>
        <input
          type="email"
          className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none"
          placeholder="Enter Your Email"
        />
      </div>

      {/* ✅ Phone (full width) */}
      <div className="flex flex-col gap-2 w-full md:col-span-2">
        <label className="font-bold text-sm">Phone</label>
        <PhoneInput
          value={phone}
          onChange={handlePhoneChange}
          defaultCountry="MM"
          international
          isValidPhoneNumber
          countryCallingCodeEditable={false}
          className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none"
          placeholder="Enter Your Phone Number"
          required
        />
        {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}
      </div>

      {/* ✅ Password */}
      <div className="flex flex-col gap-2 w-full relative">
        <label className="font-bold text-sm">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none pr-10"
          placeholder="Enter Your Password"
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

      {/* ✅ Confirm Password */}
      <div className="flex flex-col gap-2 w-full relative">
        <label className="font-bold text-sm">Confirm Password</label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="rounded-3xl p-3 w-full bg-gray-100 focus:ring-2 focus:ring-[#936521] outline-none pr-10"
          placeholder="Confirm Your Password"
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-4 top-[43px] text-gray-600"
        >
          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* ✅ Error Message (full width) */}
      {error && (
        <p className="text-red-600 font-semibold text-center md:col-span-2">
          {error}
        </p>
      )}

      {/* ✅ Submit (full width) */}
      <button
        type="submit"
        className="bg-[#936521] text-white px-4 py-2 rounded-md hover:bg-[#D8AF53] transition-all duration-300 md:col-span-2 cursor-pointer"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
