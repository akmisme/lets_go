import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center py-10 gap-8">
        <h1 className="text-4xl max-xl:text-2xl">Subscribe For Newsletter</h1>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Your Email Address"
            required
            className="p-2 pr-50 border border-gray-200 rounded-4xl max-xl:pr-0 outline-none focus:border-[#D8AF53] px-5"
          />
          <button
            className="bg-[#936521] p-2 rounded-4xl text-white cursor-pointer hover:bg-[#D8AF53]"
            value="submit"
          >
            <span className="text-sm">SIGN UP</span>
          </button>
        </form>
      </div>
      <section className="bg-[#936521] px-10 pt-5 mx-auto">
        <div className="grid grid-cols-4 max-md:grid-cols-1 max-[1025px]:grid-cols-2 mb-26 gap-5 mx-auto border-b-1 border-gray-400 pb-5">
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-white font-bold text-md">
              Contact Golden Yellow
            </h1>
            <ul className="list-none flex flex-col gap-2 mb-5">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-400 ease-in-out delay-100 duration-300 text-[12px]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-400 ease-in-out delay-100 duration-300 text-[12px]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="bg-[#D8AF53] p-1 rounded-4xl text-black hover:text-white cursor-pointer lucide lucide-facebook-icon lucide-facebook transition ease-in-out duration-300"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="bg-[#D8AF53] p-1 rounded-4xl text-black hover:text-white cursor-pointer lucide lucide-youtube-icon lucide-youtube transition ease-in-out duration-300"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="bg-[#D8AF53] p-1 rounded-4xl text-black hover:text-white cursor-pointer lucide lucide-youtube-icon lucide-youtube transition ease-in-out duration-300"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-white font-bold text-md">
              About Golden Yellow
            </h1>
            <ul className="list-none flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-400 ease-in-out delay-100 duration-300 text-[12px]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-400 ease-in-out delay-100 duration-300 text-[12px]"
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-400 ease-in-out delay-100 duration-300 text-[12px]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-white font-bold text-md">Other Services</h1>
            <ul className="list-none flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-400 ease-in-out delay-100 duration-300 text-[12px]"
                >
                  Others
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-white font-bold text-md">Payment Methods</h1>
            <div className="flex gap-5">
              <Image src="/assets/visa.svg" alt="#" height={50} width={50}/>
              <Image src="/assets/mastercard.svg" alt="#" height={35} width={35}/>
              <Image src="/assets/UnionPay_logo.svg" alt="#" height={35} width={35}/>
            </div>
            <div className="flex gap-5">
              <Image src="/assets/JCB_logo.svg" alt="#" height={35} width={35}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-white -mt-25">
          <p>&copy; Copyright. All right Reserverd.</p>
          <p>Developed By AKM.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
