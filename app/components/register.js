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
      className="flex flex-col gap-5 w-full max-w-md mx-auto pb-6"
    >
      {/* ✅ First Name */}
      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-base">First Name</label>
        <input
          type="text"
          className="border border-gray-400 rounded-3xl p-3 w-full"
          placeholder="Enter Your First Name"
          required
        />
      </div>

      {/* ✅ Last Name */}
      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-base">Last Name</label>
        <input
          type="text"
          className="border border-gray-400 rounded-3xl p-3 w-full"
          placeholder="Enter Your Last Name"
          required
        />
      </div>

      {/* ✅ Email */}
      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-base">Email (Optional)</label>
        <input
          type="email"
          className="border border-gray-400 rounded-3xl p-3 w-full"
          placeholder="Enter Your Email"
        />
      </div>

      {/* ✅ Phone (GLOBAL VALIDATION) */}
      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-base">Phone</label>
        <PhoneInput
          value={phone}
          onChange={handlePhoneChange}
          defaultCountry="MM"
          international
          countryCallingCodeEditable={false}
          className="border border-gray-400 rounded-3xl p-3 w-full"
          placeholder="Enter Your Phone Number"
          required
        />
        {phoneError && (
          <p className="text-red-600 text-sm">{phoneError}</p>
        )}
      </div>

      {/* ✅ Password */}
      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-base">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-3xl p-3 w-full pr-10"
            placeholder="Enter Your Password"
            required
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

      {/* ✅ Confirm Password */}
      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-base">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-400 rounded-3xl p-3 w-full pr-10"
            placeholder="Confirm Your Password"
            required
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

      {/* ✅ Error Message */}
      {error && (
        <p className="text-red-600 font-semibold text-center">{error}</p>
      )}

      {/* ✅ Submit */}
      <button
        type="submit"
        className="bg-[#936521] text-white px-4 py-2 rounded-md hover:bg-[#D8AF53] transition-all duration-300"
      >
        Register
      </button>
    </form>
  );
};

export default Register;