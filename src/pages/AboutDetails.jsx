import React, { useState, useEffect, useRef } from "react";
import bricks from "../assets/Bricks.jpeg";
import cement from "../assets/Cement.jpeg";
import steel from "../assets/comp image/d5863sk0j0qmgicukmcd_6_11zon.webp";
import heroImage from "../assets/comp image/cwqmj7jtsybd3nbalxjo_4_11zon.webp";

const processSteps = [
  { id: 1, imgSrc: bricks, title: "Material Sourcing", description: "We source premium construction materials from certified global suppliers, ensuring quality meets industry standards.", icon: "🏗️" },
  { id: 2, imgSrc: cement, title: "Quality Testing", description: "Advanced laboratory testing and quality assurance protocols guarantee material integrity and performance.", icon: "🔬" },
  { id: 3, imgSrc: steel, title: "Supply Chain", description: "Efficient logistics and inventory management ensure timely delivery to construction sites nationwide.", icon: "🚚" },
  { id: 4, imgSrc: bricks, title: "Project Support", description: "Our expert team provides technical support and consultation throughout your construction project lifecycle.", icon: "🤝" },
];


const gallery = [
  { img: bricks, title: "Premium Brick Collection", category: "Masonry" },
  { img: cement, title: "High-Grade Cement", category: "Binding Materials" },
  { img: steel, title: "Steel Reinforcement", category: "Structural Support" },
  { img: bricks, title: "Specialty Blocks", category: "Custom Solutions" },
  { img: cement, title: "Concrete Solutions", category: "Foundation Materials" },
  { img: steel, title: "Metal Framework", category: "Industrial Grade" },
];

const certifications = [
  { img: bricks, title: "ISO 9001 Certified" },
  { img: cement, title: "LEED Green Building" },
  { img: steel, title: "ASTM Standards" },
  { img: bricks, title: "Safety First Protocol" },
  { img: cement, title: "Environmental Compliance" },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};
    Object.keys(sectionRefs.current).forEach((key) => {
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => ({ ...prev, [key]: entry.isIntersecting }));
        },
        { threshold: 0.2 }
      );
      if (sectionRefs.current[key]) observers[key].observe(sectionRefs.current[key]);
    });
    return () => Object.values(observers).forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Construction" className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-orange-900/30" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-white font-medium uppercase tracking-widest text-sm">About Our Company</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
            Building Excellence
            <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Since 2009</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Transforming construction dreams into reality with premium materials and unwavering commitment to quality
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div
        ref={(el) => (sectionRefs.current.intro = el)}
        className={`bg-gradient-to-br from-white to-gray-50 py-20 transform transition-all duration-1000 ${
          isVisible.intro ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-100 rounded-full mb-8">
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
                Premium Materials
                <span className="block text-blue-600">Expert Solutions</span>
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h3>
                <p className="text-gray-700 leading-relaxed">
                  For over 15 years, we've been the trusted backbone of construction projects across the region.
                  Our commitment to excellence and innovation has made us the preferred choice for contractors, builders, and developers.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/40 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Years</div>
                </div>
                <div className="text-center p-4 bg-white/40 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Projects</div>
                </div>
                <div className="text-center p-4 bg-white/40 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div
        ref={(el) => (sectionRefs.current.mission = el)}
        className={`py-20 transform transition-all duration-1000 ${
          isVisible.mission ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl shadow-2xl relative">
                <img
                  src={bricks}
                  alt="Premium construction materials"
                  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">ISO</div>
                <div className="text-sm text-gray-600">Certified Quality</div>
              </div>
            </div>

            <div className="space-y-8">
              <span className="inline-block px-4 py-2 bg-orange-100 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                Our Mission
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Delivering Excellence in Every Material</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">Uncompromising Quality:</span> We source, test, and deliver construction materials that exceed industry standards, ensuring every project stands the test of time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission extends beyond just supplying materials—we're partners in building dreams. From residential foundations to commercial skyscrapers, we provide the solid ground upon which ambitions are built.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Process</h3>
          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.id} className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-500 hover:scale-105">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Gallery</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     

      {/* Certifications Marquee */}
      <div className="py-10 overflow-hidden bg-white">
        <div className="flex animate-marquee gap-8">
          {certifications.concat(certifications).map((cert, idx) => (
            <div key={idx} className="flex-shrink-0 w-48 text-center p-4 bg-gray-100 rounded-xl shadow-lg">
              <img src={cert.img} alt={cert.title} className="w-full h-32 object-cover rounded-md mb-2" />
              <p className="text-gray-800 font-semibold">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>

     
    </>
  );
};

export default AboutSection;
