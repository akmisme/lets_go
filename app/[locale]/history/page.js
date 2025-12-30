import React from "react";
import { PackageCheck, CircleX, RotateCw } from "lucide-react";

export default function History() {
  return (
    <section className="mt-30 bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <div className="flex flex-col shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold text-gray-800">
              Bagan Package
            </p>
            <span className="flex items-center gap-1 px-2 py-1 text-sm font-medium bg-green-500 text-white rounded-md">
              <PackageCheck className="w-4 h-4" />
              Confirmed
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 text-gray-600 mb-4">
            <p>
              <span className="font-medium">Destination:</span> Bagan, Myanmar
            </p>
            <p>
              <span className="font-medium">Total:</span> 200,000 MMK
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              View Voucher
            </button>
          </div>
        </div>
        {/* Card */}
        <div className="flex flex-col shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold text-gray-800">
              Bagan Package
            </p>
            <span className="flex items-center gap-1 px-2 py-1 text-sm font-medium bg-red-500 text-white rounded-md">
              <CircleX className="w-4 h-4"/>
              Cancelled
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 text-gray-600 mb-4">
            <p>
              <span className="font-medium">Destination:</span> Bagan, Myanmar
            </p>
            <p>
              <span className="font-medium">Total:</span> 200,000 MMK
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              View Voucher
            </button>
          </div>
        </div>
        {/* Card */}
        <div className="flex flex-col shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold text-gray-800">
              Bagan Package
            </p>
            <span className="flex items-center gap-1 px-2 py-1 text-sm font-medium bg-yellow-500 text-white rounded-md">
              <RotateCw className="w-4 h-4"/>
              Pending
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 text-gray-600 mb-4">
            <p>
              <span className="font-medium">Destination:</span> Bagan, Myanmar
            </p>
            <p>
              <span className="font-medium">Total:</span> 200,000 MMK
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              View Voucher
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}