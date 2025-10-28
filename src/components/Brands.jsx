import React from "react";

// Example brand logos (replace with actual images)
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
    { img: brand5, name: "M Sand Suppliers" }
  ];

  // Duplicate for infinite scroll effect
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 lg:py-24 bg-white from-blue-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-700 rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            TRUSTED PARTNERS
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industry Leaders
            <span className="block bg-gradient-to-r from-blue-700 to-white bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Partnering with top construction brands to deliver exceptional quality materials and services
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
            <div className="text-sm text-gray-600">Trusted Partners</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
            <div className="text-sm text-gray-600">Projects Done</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
            <div className="text-sm text-gray-600">Quality Assured</div>
          </div>
        </div>

        {/* Animated Brand Logos */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex animate-scroll space-x-12 py-8">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-40 h-28 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-4 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600 text-sm">ISO certified materials from trusted suppliers</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Quick turnaround with reliable logistics</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Partnerships</h3>
            <p className="text-gray-600 text-sm">Long-term relationships built on reliability</p>
          </div>
        </div>
      </div>

      {/* CSS Animation
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
          animation: scroll 25s linear infinite;
          width: fit-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style> */}
    </section>
  );
};

export default Brands;
