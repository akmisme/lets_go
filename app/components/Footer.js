import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center p-10 gap-8">
        <h1 className="text-4xl max-xl:text-2xl">Subscribe For Newsletter</h1>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Your Email Address"
            required
            className="p-2 pr-50 border border-gray-300 rounded-4xl max-xl:pr-0 outline-none focus:border-[#936521] px-5"
          />
          <button
            className="bg-[#936521] p-2 rounded-4xl text-white cursor-pointer hover:bg-[#D8AF53]"
            value="submit"
          >
            <span className="text-sm">
              SIGN UP
            </span>
          </button>
        </form>
      </div>
      <section className="bg-[#936521] p-8">
        <div className="container grid xl:grid-cols-3 content-center gap-4 max-xl:grid-cols-1">
          <div className="container flex flex-col items-center justify-center gap-3 xl:border-r border-white max-xl:border-r-0 max-xl:border-b border-white">
            <h1 className="text-white font-bold text-2xl">Group Affiliation</h1>
            <Image src="/assets/logo.avif" alt="Logo" width={300} height={300} />
            <p className="border-r-4 border-white"></p>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 xl:border-r border-white max-xl:border-r-0 max-xl:border-b border-white">
            <h1 className="text-white font-bold text-2xl">Get in Touch</h1>
            <div className="flex flex-col gap-1.5 justify-center items-center">
              <h4 className="text-white font-bold">Myanmar Office Address</h4>
              <p className="text-white align-middle">
                The Campus 1 Office Park, Rain Tree Drive, Pun Hlaing Estate,
                Hlaing Thayar Township, Yangon 11401, Myanmar.
              </p>
            </div>
            <div className="flex flex-col gap-1.5 justify-center items-center">
              <h4 className="text-white font-bold">Singapore Office Address</h4>
              <p className="text-white align-middle mb-2">
                63 Mohamed Sultan Road, #02-14, Sultan-Link, Singapore 239002.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mb-26 gap-8 max-xl:mb-2">
            <h1 className="text-white font-bold text-2xl">Site Map</h1>
            <div className="flex flex-col items-center justify-center gap-5 text-white">
              <Link
                href="#"
                className="hover:text-gray-400 ease-in-out delay-100 duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="hover:text-gray-400 ease-in-out delay-100 duration-300"
              >
                Disclaimer
              </Link>
              <Link
                href="#"
                className="hover:text-gray-400 ease-in-out delay-100 duration-300"
              >
                Personal Data Policy Statement
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-950 p-5 text-white flex items-center justify-center">
        <p className="max-xl:text-sm">
          Copyright &copy; 2025{" "}
          <Link href="#" className="text-[#B30602]">
            Yolo Digital Marketing Agency
          </Link>
          . All Right Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
