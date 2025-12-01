"use client";
import React, {useState} from "react";
import Accordion from "./accordian";

const faq = [
    {title: "How are you?", content: "I am fine."},
    {title: "How are you?", content: "I am fine."},
    {title: "How are you?", content: "I am fine."},
    {title: "How are you?", content: "I am fine."},
    {title: "How are you?", content: "I am fine."}
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="mx-auto mt-10">
        <h1 className="mb-5 font-bold text-2xl text-center">FAQ</h1>
      <div className="flex flex-col">
        <div className="container w-80 mx-auto flex flex-col justify-center items-center gap-5">
          {faq.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
