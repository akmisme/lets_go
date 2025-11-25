import React from "react";
import Image from "next/image";

const Popularexp = () => {
  return (
    <section>
      <section className="mt-10">
        <h1 className="text-center text-2xl font-bold">Popular Experiences</h1>
        <div className="grid grid-cols-4 max-md:grid-cols-1 px-5 mx-auto gap-4 mt-10 justify-center">
          <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-4xl p-3 gap-2">
            <Image
              src="/assets/promobanner/bagan.jpg"
              className="rounded-4xl"
              alt="#"
              height={300}
              width={300}
            />
            <h1>Title</h1>
            <p>Paragraph</p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-4xl p-5 gap-2">
            <Image
              src="/assets/promobanner/bagan.jpg"
              className="rounded-4xl"
              alt="#"
              height={300}
              width={300}
            />
            <h1>Title</h1>
            <p>Paragraph</p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-4xl p-5 gap-2">
            <Image
              src="/assets/promobanner/bagan.jpg"
              className="rounded-4xl"
              alt="#"
              height={300}
              width={300}
            />
            <h1>Title</h1>
            <p>Paragraph</p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-4xl p-5 gap-2">
            <Image
              src="/assets/promobanner/bagan.jpg"
              className="rounded-4xl"
              alt="#"
              height={300}
              width={300}
            />
            <h1>Title</h1>
            <p>Paragraph</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Popularexp;
