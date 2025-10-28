// // FeaturesCarousel.jsx
// import React, { useEffect, useRef } from "react";
// import { register } from "swiper/element/bundle";

// import image1 from "../assets/image1.jpeg";
// import image2 from "../assets/image2.jpeg";
// import image3 from "../assets/image3.jpeg";
// // Register Swiper custom elements
// register();

// const FeaturesCarousel = () => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     // Configure Swiper
//     const swiperEl = swiperRef.current;

//     const params = {
//       slidesPerView: 1,
//       spaceBetween: 30,
//       centeredSlides: true,
//       loop: true,
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//       },
//       pagination: {
//         clickable: true,
//       },
//       breakpoints: {
//         640: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//       },
//     };

//     // Assign parameters to Swiper element
//     Object.assign(swiperEl, params);

//     // Initialize Swiper
//     swiperEl.initialize();
//   }, []);

//   // Feature data
//   const features = [
//     {
//       id: 1,
//       title: "Fast Charging",
//       description:
//         "Charge your EV battery to 80% in just 30 minutes with our ultra-fast charging technology.",
//       image: image1,
//     },
//     {
//       id: 2,
//       title: "Smart Monitoring",
//       description:
//         "Track your charging status, battery health and energy consumption in real-time with our app.",
//       image: image2,
//     },
//     {
//       id: 3,
//       title: "Wide Coverage",
//       description:
//         "Access our charging stations across the country with one unified account and payment system.",
//       image: image3,
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

//         <swiper-container ref={swiperRef} init="false">
//           {features.map((feature) => (
//             <swiper-slide key={feature.id}>
//               <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 m-2 h-full">
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-full h-40 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className="text-gray-700">{feature.description}</p>
//               </div>
//             </swiper-slide>
//           ))}
//         </swiper-container>
//       </div>
//     </div>
//   );
// };

// export default FeaturesCarousel;

// FeaturesCarousel.jsx
import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";

// Register Swiper custom elements
register();

const FeaturesCarousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Configure Swiper
    const swiperEl = swiperRef.current;

    const params = {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };

    // Assign parameters to Swiper element
    Object.assign(swiperEl, params);

    // Initialize Swiper
    swiperEl.initialize();
  }, []);

  // Feature data
  const features = [
    {
      id: 1,
      title: "Fast Charging",
      description:
        "Charge your EV battery to 80% in just 30 minutes with our ultra-fast charging technology.",
      image: image1,
    },
    {
      id: 2,
      title: "Smart Monitoring",
      description:
        "Track your charging status, battery health and energy consumption in real-time with our app.",
      image: image2,
    },
    {
      id: 3,
      title: "Wide Coverage",
      description:
        "Access our charging stations across the country with one unified account and payment system.",
      image: image3,
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <swiper-container ref={swiperRef} init="false">
          {features.map((feature) => (
            <swiper-slide key={feature.id}>
              <div className="relative rounded-xl shadow-xl m-2 h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
