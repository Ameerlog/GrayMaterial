


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// Your images
import hero1 from "../assets/Hero.webp";
import hero2 from "../assets/images/b6mpn0np7q7qmucsbmnl.webp";
import hero3 from "../assets/images/b6mpn0np7q7qmucsbmnl.webp";

const slides = [
  {
    image: hero1,
    title: "Top-Quality Construction Materials Delivered",
    subtitle:
      "Bridging supply and demand for construction needs with over 15 years of experience.",
    stats: ["15+ Years Experience", "1000+ Projects"],
    accent: "from-blue-400 to-blue-600",
  },
  {
    image: hero2,
    title: "Building Dreams with Reliable Supply",
    subtitle:
      "We provide consistent, trustworthy supply chains for all your construction projects.",
    stats: ["On-time Delivery", "Nationwide Network"],
    accent: "from-emerald-400 to-green-600",
  },
  {
    image: hero3,
    title: "Innovative Solutions for Modern Construction",
    subtitle:
      "Delivering materials and methods that drive efficiency and quality.",
    stats: ["Cutting-edge Tech", "Eco-Friendly Materials"],
    accent: "from-purple-400 to-indigo-600",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background image */}
            <div className="relative h-screen w-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title} 
                
                className="absolute inset-0 h-full w-full object-cover scale-110 animate-kenburns"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white animate-fadeInUp">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-gray-200 animate-fadeInUp delay-200">
                  {slide.subtitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  {slide.stats.map((stat, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-white/10 text-white backdrop-blur-sm text-sm md:text-base"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <a
                  href="/products"
                  className="mt-8 inline-block rounded-xl px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation */}
      <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((slide, index) => (
          <div key={index} className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              key={activeIndex} // re-render on slide change
              className={`h-full bg-gradient-to-r ${slides[activeIndex].accent}`}
              style={{
                animation:
                  index === activeIndex ? "progress 6s linear forwards" : "none",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
