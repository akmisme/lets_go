import React from "react";
import { PackageCheck } from "lucide-react";

export default function History() {
  return (
    <section className="mt-30 bg-gray-100 py-5">
      <div className="grid grid-cols-3 mx-20">
        <div className="flex flex-col shadow-md p-4 bg-white">
          <div className="flex gap-2">
            <p>Package Name - Bagan Package</p>
            <p className="p-1 bg-green-500 text-white flex gap-1">
              <PackageCheck />
              Comfirmed
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Destination - Bagan, Myanmar</p>
            <p>Total - 200000 MMK</p>
          </div>
          <div className="flex gap-2 text-center">
            <button type="submit" className="p-2">
              View Boucher
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
