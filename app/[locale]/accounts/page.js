"use client";
import LogoutButton from "@/app/components/logout";
import React, { useState } from "react";

export default function Accounts() {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 mt-20 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-[#936521] shadow-md"
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
          John Doe
        </h2>
        <p className="text-center text-gray-500 mb-6">+95 9 123 456 789</p>

        {/* Account Details */}
        <div className="divide-y divide-gray-200">
          {[
            { label: "First Name", value: "john" },
            { label: "Last Name", value: "doe" },
            { label: "Email", value: "john.doe@example.com" },
            { label: "Address", value: "Yangon, Myanmar" },
            { label: "Member Since", value: "Dec 2023" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between py-3 text-sm sm:text-base"
            >
              <span className="font-medium text-gray-600">{item.label}</span>
              <span className="text-gray-800">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-between">
          <button
            onClick={() => setOpenLogin(true)}
            className="w-full sm:w-auto px-5 py-2 bg-[#936521] text-white rounded-lg hover:bg-[#D8AF53] transition-all duration-200"
          >
            Edit Profile
          </button>

          <LogoutButton/>
        </div>
      </div>

      {/* Custom Popup */}
      {openLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenLogin(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Edit Profile
            </h3>
            <form className="space-y-5">
              {/* Profile Image */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Profile Image
                </label>
                <input
                  type="file"
                  className="w-full border rounded px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-[#936521] outline-none"
                />
              </div>

              {/* First & Last Name side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[#936521] outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[#936521] outline-none"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[#936521] outline-none"
              />

              {/* Address */}
              <textarea
                placeholder="Address"
                className="w-full border rounded px-3 py-2 resize-none h-24 focus:ring-2 focus:ring-[#936521] outline-none"
              />

              {/* Save Button */}
              <button
                type="submit"
                className="w-full bg-[#936521] text-white py-2 rounded-lg hover:bg-[#D8AF53] transition-colors duration-200"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
