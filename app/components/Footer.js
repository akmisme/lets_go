import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center py-10 gap-8">
        <h1 className="text-3xl max-xl:text-2xl">Subscribe For Newsletter</h1>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Your Email Address"
            required
            className="border w-80 border-gray-200 rounded-4xl outline-none focus:border-[#D8AF53] focus:border-dashed px-2"
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
                  href="/contactus"
                  className="hover:text-gray-400 ease-in-out delay-100 duration-300 text-[12px]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
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
                  href="/aboutus"
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
                  href="https://yolodigitalmm.com/services/"
                  target="blank"
                  className="hover:text-gray-400 ease-in-out delay-100 duration-300 text-[12px]"
                >
                  Others
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-white font-bold text-md">Payment Methods</h1>
            <div className="grid grid-cols-5 gap-5">
              <Image
                src="/assets/payments/visa.svg"
                alt="#"
                height={50}
                width={50}
              />
              <img
                src="https://play-lh.googleusercontent.com/4HoG6Isj_iLTKyJEOLZgu0_kjWyPV2yQrubgQvcx2rWo8NyEOZRuQ_xAzZkUUopm4ak=w480-h960-rw"
                alt="#"
                height={10}
                width={45}
              />
              <img
                src="https://myanmarpay.com.mm/frontend/assets/images/logo_512.png"
                alt="#"
                height={40}
                width={40}
              />
              <img
                src="https://www.global.jcb/en/common/images/svg/jcb_emblem_logo.svg"
                alt="#"
                height={50}
                width={50}
              />
              <img
                src="https://www.myanmarpaymentunion.com/storage/images/logo/NwmqOfkCylSwGTP59aLZ3Rkk4zgdFO2S4CEf2pVh.png"
                alt="#"
                height={10}
                width={50}
              />
            </div>
            <div className="grid grid-cols-6 gap-5">
              <img
                src="https://play-lh.googleusercontent.com/Lgulng3ncFuuFVYTmT-JQxuZ_IQ9-iPCojY5lM6c3wK9uvSx_ZRqLGcq8dTQcez1HDvQiSvfmJHZN1EHg1oWfLk"
                alt="#"
                width={35}
                height={35}
              />
              <img
                src="https://play-lh.googleusercontent.com/cnKJYzzHFAE5ZRepCsGVhv7ZnoDfK8Wu5z6lMefeT-45fTNfUblK_gF3JyW5VZsjFc4=w480-h960-rw"
                alt="#"
                height={35}
                width={35}
              />
              <img
                src="https://play-lh.googleusercontent.com/P_6K82rdGqEB-m4lO5hIoebg0Jv5LwHnOqI2HsfzQfZUlkm1Z3ek4K5iG42gXeWJfoPL=w240-h480-rw"
                alt="#"
                height={35}
                width={35}
              />
              <img
                src="https://play-lh.googleusercontent.com/ErPz7wvjl-tmKkfsTDtxz4XepVocji0Mo0k9Somq7ydxA7y49JHU9EnGMUGDUY9Nveq-=w480-h960-rw"
                alt="#"
                height={35}
                width={35}
              />
              <img
                src="https://play-lh.googleusercontent.com/j1ZiQVB8jFi2sZslkh1vN419gvRIN5VGif6749zljhWldRjmC7_dOF_y1jcuq3rwnQ=w480-h960-rw"
                alt="#"
                height={35}
                width={35}
              />
              <img
                src="https://play-lh.googleusercontent.com/rPq4GMCZy12WhwTlanEu7RzxihYCgYevQHVHLNha1VcY5SU1uLKHMd060b4VEV1r-OQ=s96-rw"
                alt="#"
                height={35}
                width={35}
              />
            </div>
            <div className="grid grid-cols-6 gap-5">
              <img
                src="https://images.sftcdn.net/images/t_app-icon-m/p/51f8a011-69a7-45d5-a04d-6a04b2b614f4/201761240/citizens-pay-logo"
                alt="#"
                width={35}
                height={35}
              />
              <img
                src="https://cdn.aptoide.com/imgs/4/9/d/49ddd43ae89ab8eae49a835868f292af_icon.png?w=128"
                alt="#"
                height={35}
                width={35}
              />
              <img
                src="https://play-lh.googleusercontent.com/ANWthn072I2hrYpIPClF3T-vrMAZS8JQuoJv1-0yjyLcqiEe1h1sqMI0AmRdJR9f6KI=w480-h960-rw"
                alt="#"
                height={35}
                width={35}
              />
              <img
                src="https://play-lh.googleusercontent.com/sId6g1OxER7SOf5q_8cZbd_cR74bAWNVkIUS_v9e8mYUnLudtSy-jCCjJihN57CIqB9r3uYTJkQdtYMEpsQb=w480-h960-rw"
                alt="#"
                height={35}
                width={35}
              />
              <img
                src="https://images.sftcdn.net/images/t_app-icon-m/p/eabe484a-bd06-4653-8542-0be4332d91e2/400613827/yoma-bank-nextgen-logo"
                alt="#"
                height={35}
                width={35}
              />
              <img
                src="https://play-lh.googleusercontent.com/QABgyscEJFK7a0nPJNbB2T4IvWJnO-GCjks20NFPJzfj9iUCq905nySoLrxfksNJwVew=w480-h960-rw"
                alt="#"
                height={35}
                width={35}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm items-center text-white -mt-25 pb-5">
          <p>
            &copy; Copyright {new Date().getFullYear()}. All right Reserverd.
          </p>
          <p>
            Developed By{" "}
            <Link
              href="https://yolodigitalmm.com/"
              target="blank"
              className="text-[#D8AF53] hover:text-blue-600 transition-all ease-in-out delay-100 duration-300"
            >
              Yolo Digital Marketing Agency
            </Link>
            .
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
