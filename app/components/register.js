"use client";
import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import axios from "axios";
import { ENDPOINT } from "../endpoint/endpoint";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  // ✅ Check localStorage on refresh
  useEffect(() => {
    const loginSuccess = localStorage.getItem("loginSuccess");
    if (loginSuccess === "true") {
      alert("OK ✅"); // show alert after refresh
      localStorage.removeItem("loginSuccess"); // clear flag
    }
  }, []);

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

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;

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
    if (password !== confirm_password) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    try {
      const res = await axios.post(ENDPOINT.Register, {
        first_name,
        last_name,
        email,
        phone,
        password,
        confirm_password,
      });

      if (res.status === 201) {
        // ✅ Save flag so alert shows after refresh
        localStorage.setItem("loginSuccess", "true");
        alert("Registration successful!"); // immediate alert
        window.location.reload(); // refresh page
      }
    } catch (err) {
      console.error("Error registering:", err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto p-8 mt-5"
    >
      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-sm">First Name</label>
        <input
          type="text"
          name="first_name"
          className="rounded-3xl p-3 w-full bg-gray-100"
          required
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label className="font-bold text-sm">Last Name</label>
        <input
          type="text"
          name="last_name"
          className="rounded-3xl p-3 w-full bg-gray-100"
          required
        />
      </div>

      <div className="flex flex-col gap-2 w-full md:col-span-2">
        <label className="font-bold text-sm">Email</label>
        <input
          type="email"
          name="email"
          className="rounded-3xl p-3 w-full bg-gray-100"
          required
        />
      </div>

      <div className="flex flex-col gap-2 w-full md:col-span-2">
        <label className="font-bold text-sm">Phone</label>
        <PhoneInput
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          defaultCountry="MM"
          international
          countryCallingCodeEditable={false}
          className="rounded-3xl p-3 w-full bg-gray-100"
          required
        />
        {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}
      </div>

      <div className="flex flex-col gap-2 w-full relative">
        <label className="font-bold text-sm">Password</label>
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-3xl p-3 w-full bg-gray-100 pr-10"
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

      <div className="flex flex-col gap-2 w-full relative">
        <label className="font-bold text-sm">Confirm Password</label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirm_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="rounded-3xl p-3 w-full bg-gray-100 pr-10"
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

      {error && (
        <p className="text-red-600 font-semibold text-center md:col-span-2">
          {error}
        </p>
      )}

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