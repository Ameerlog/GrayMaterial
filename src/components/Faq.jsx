"use client";
import React, { useState, memo } from "react";
import { FiChevronDown } from "react-icons/fi"; 
import { faqs } from "../db/faq";

const FAQItem = memo(function FAQItem({ idx, isOpen, toggle, question, answer }) {
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => toggle(idx)}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${idx}`}
        className="w-full flex justify-between items-center p-4 text-left text-lg sm:text-xl font-medium text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors"
      >
        {question}
        <FiChevronDown
          className={`ml-2 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>

      <div
        id={`faq-panel-${idx}`}
        role="region"
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-40 sm:max-h-60 p-4" : "max-h-0 p-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
});

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={faq.question}
              idx={idx}
              isOpen={openIndex === idx}
              toggle={toggle}
              {...faq}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
