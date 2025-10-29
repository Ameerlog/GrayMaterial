"use client";
import React, { memo } from "react";
import { faqs } from "../db/faq";

const FAQItem = memo(function FAQItem({ question, answer }) {
  return (
    <div className="bg-gray-800/40 dark:bg-zinc-800/40 border border-white/10 rounded-xl backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer">
      <div className="p-5 flex justify-between items-center">
        <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-gray-100 transition-colors duration-300">
          {question}
        </h3>
      </div>

      <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-in-out px-5 pb-5">
        <p className="text-gray-300 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
});

export default function FAQ() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950 py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-12 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

