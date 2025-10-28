import React from "react";
import { Truck, Phone, ShieldCheck, Tag } from "lucide-react";

const technology = [
  {
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    title: "Direct Site Delivery",
    description:
      "We handle reliable transportation and deliver materials directly to your construction site without vehicle tracking complexity.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Strict Quality Checks",
    description:
      "All our materials are tested and verified to ensure consitent quality that meets construction standards.",
  },
  {
    icon: <Phone className="w-6 h-6 text-blue-600" />,
    title: "24/7 Customer support",
    description:
      "Our support team is always active and reachable via phone to assist,clarify, and support your building needs.",
  },
  {
    icon: <Tag className="w-6 h-6 text-blue-600" />,
    title: "Special Discounts",
    description:
      "We connect directly with customers to provide the best prices and offer exclusive construction material discounts.",
  },
];
const Technology = () => {
  return (
    <section className="bg-white dark:bg-zinc-900 py-16 px-4" id="technology">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-zinc-900 dark:text-white">
          Why Choose Gray Material?
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-300 mb-12 max-w-2xl mx-auto">
          At Gray Material®, we blend efficiency and authenticity by delivering
          verified materials directly to your site, ensuring quality, pricing
          transparency, and always-on customer support - all designed to meet
          the real-world needs of contractors and builders.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {technology.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-xl shadow text-center"
            >
              <div className="flex justify-center mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">
                {tech.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
