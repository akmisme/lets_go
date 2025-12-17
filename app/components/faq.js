"use client";
import React from "react";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";
import { usePathname } from "next/navigation";

const FAQ = () => {
  const pathname = usePathname();
  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const contactus = currentLocale === "mm" ? mm.contact : en.contact;
  return (
    <section className="mt-10 pb-5">
      {contactus.map((contact, index)=>(
      <h1 key={index} className="mb-5 font-bold text-2xl mx-20 max-xl:mx-5">{contact.title2}</h1>
      ))}
      <div className="grid grid-cols-3 gap-5 mx-20 max-xl:grid-cols-2 max-md:grid-cols-1 max-xl:mx-5">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-5 bg-white p-4 rounded-md"
        >
          <h1 className="font-bold text-base">
            How to ask for more tour details?
          </h1>
          <p className="text-base">
            On TourRadar, you can request more information by navigating to the
            tour detail page and using the “Contact Operator” button. This will
            put you in contact with the operator of the tour via TourRadar.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-5 bg-white p-4 rounded-md"
        >
          <h1 className="font-bold text-base">
            How to ask for more tour details?
          </h1>
          <p className="text-base">
            On TourRadar, you can request more information by navigating to the
            tour detail page and using the “Contact Operator” button. This will
            put you in contact with the operator of the tour via TourRadar.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-5 bg-white p-4 rounded-md"
        >
          <h1 className="font-bold text-base">
            How to ask for more tour details?
          </h1>
          <p className="text-base">
            On TourRadar, you can request more information by navigating to the
            tour detail page and using the “Contact Operator” button. This will
            put you in contact with the operator of the tour via TourRadar.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-5 bg-white p-4 rounded-md"
        >
          <h1 className="font-bold text-base">
            How to ask for more tour details?
          </h1>
          <p className="text-base">
            On TourRadar, you can request more information by navigating to the
            tour detail page and using the “Contact Operator” button. This will
            put you in contact with the operator of the tour via TourRadar.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-5 bg-white p-4 rounded-md"
        >
          <h1 className="font-bold text-base">
            How to ask for more tour details?
          </h1>
          <p className="text-base">
            On TourRadar, you can request more information by navigating to the
            tour detail page and using the “Contact Operator” button. This will
            put you in contact with the operator of the tour via TourRadar.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="flex flex-col gap-5 bg-white p-4 rounded-md"
        >
          <h1 className="font-bold text-base">
            How to ask for more tour details?
          </h1>
          <p className="text-base">
            On TourRadar, you can request more information by navigating to the
            tour detail page and using the “Contact Operator” button. This will
            put you in contact with the operator of the tour via TourRadar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
