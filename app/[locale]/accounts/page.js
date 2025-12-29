"use client";
import React, { useState } from "react";
import Popup from "@/app/components/popup";
// import your Log component if needed
// import Log from "@/app/components/Log";

export default function Accounts() {
  // state to control popup visibility
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 mt-20">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full mx-20">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-[#936521]"
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          John Doe
        </h2>
        <p className="text-center text-gray-500 mb-6">+95 9 123 456 789</p>

        {/* Account Details */}
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">First Name</span>
            <span className="text-gray-800">john</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Last Name</span>
            <span className="text-gray-800">doe</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Email</span>
            <span className="text-gray-800">john.doe@example.com</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Address</span>
            <span className="text-gray-800">Yangon, Myanmar</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Member Since</span>
            <span className="text-gray-800">Dec 2023</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setOpenLogin(true)}
            className="px-4 py-2 bg-[#936521] text-white rounded hover:bg-[#D8AF53] transition-all ease-in-out delay-100 cursor-pointer"
          >
            Edit Profile
          </button>

          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all ease-in-out delay-100 cursor-pointer">
            Logout
          </button>
        </div>
      </div>

      {/* Popup */}
      <Popup isOpen={openLogin} onClose={() => setOpenLogin(false)}>
        <div className="p-2">
          <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
          {/* form */}
          <form className="space-y-4">
            {/* Profile Image */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Profile Image
              </label>
              <input
                type="file"
                className="w-full border rounded px-3 py-2 bg-gray-50"
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
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[#936521] outline-none"
              />
            </div>

            {/* Address */}
            <div>
              <textarea
                placeholder="Address"
                className="w-full border rounded px-3 py-2 resize-none h-24 focus:ring-2 focus:ring-[#936521] outline-none"
              />
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-[#936521] text-white py-2 rounded-lg hover:bg-[#D8AF53] transition-colors duration-200"
            >
              Save Changes
            </button>
          </form>
        </div>
      </Popup>
    </section>
  );
}
