import React from "react";
import Image from "next/image";

const Tranding = () => {
  return (
    <section>
      <section className="mt-10">
        <h1 className="text-center text-2xl font-bold">Tranding Now</h1>
        <div className="grid grid-cols-4 max-md:grid-cols-1 max-[1025px]:grid-cols-2 px-5 mx-auto gap-4 mt-10 justify-center">
          <div className="relative overflow-hidden shadow-lg group cursor-pointer">
            <Image
              src="/assets/promobanner/bagan.jpg"
              alt="#"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
              <h3 className="text-lg font-bold">Title</h3>
              <p className="text-sm line-clamp-2">Paragraph</p>
            </div>
          </div>
          <div className="relative overflow-hidden shadow-lg group cursor-pointer">
            <Image
              src="/assets/promobanner/bagan.jpg"
              alt="#"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
              <h3 className="text-lg font-bold">Title</h3>
              <p className="text-sm line-clamp-2">Paragraph</p>
            </div>
          </div>
          <div className="relative overflow-hidden shadow-lg group cursor-pointer">
            <Image
              src="/assets/promobanner/bagan.jpg"
              alt="#"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
              <h3 className="text-lg font-bold">Title</h3>
              <p className="text-sm line-clamp-2">Paragraph</p>
            </div>
          </div>
          <div className="relative overflow-hidden shadow-lg group cursor-pointer">
            <Image
              src="/assets/promobanner/bagan.jpg"
              alt="#"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
              <h3 className="text-lg font-bold">Title</h3>
              <p className="text-sm line-clamp-2">Paragraph</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Tranding;