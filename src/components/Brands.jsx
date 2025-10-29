import React from "react";
import { motion } from "framer-motion";

// Brand logos
import brand1 from "../assets/Bricks.jpeg";
import brand2 from "../assets/Cement.jpeg";
import brand3 from "../assets/image11.jpg";
import brand4 from "../assets/Steelbar.jpeg";
import brand5 from "../assets/MSand.jpeg";

const Brands = () => {
  const brands = [
    { img: brand1, name: "Premium Bricks" },
    { img: brand2, name: "Cement Solutions" },
    { img: brand3, name: "Construction Materials" },
    { img: brand4, name: "Steel Industries" },
    { img: brand5, name: "M Sand Suppliers" },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-20 px-6 md:px-16 bg-white dark:bg-zinc-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Our Clients
        </h2>
      </motion.div>

    
      <div className="relative overflow-hidden">
       
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-zinc-900 dark:to-transparent z-10 pointer-events-none" />

        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-zinc-900 dark:to-transparent z-10 pointer-events-none" />

        {/* Scrolling Logos */}
        <div className="flex animate-scroll space-x-16 py-10">
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="w-44 h-32 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl flex items-center justify-center p-5 group-hover:border-gray-300 dark:group-hover:border-zinc-700 transition-all duration-300">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
