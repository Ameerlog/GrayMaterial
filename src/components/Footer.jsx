// // Footer.jsx
// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";

// import Logo from "../assets/Logo.png";

// const Footer = () => {
//   return (
//     <footer className="bg-[#272727]/90 backdrop-blur text-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           {/* Company Info */}
//           <div>
//             <div className="flex justify-center items-center mb-8 relative">
//               <img
//                 src={Logo}
//                 alt="Batteryfy Logo"
//                 className="max-h-80 w-auto absolute"
//               />
//             </div>
//             <p className="text-gray-400 mb-4">
//               Revolutionizing electric vehicle charging and conversion solutions
//               for a sustainable future.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="bg-gray-800 hover:bg-[#26c72d] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="#"
//                 className="bg-gray-800 hover:bg-[#26c72d] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
//               >
//                 <FaTwitter />
//               </a>
//               <a
//                 href="#"
//                 className="bg-gray-800 hover:bg-[#26c72d] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="#"
//                 className="bg-gray-800 hover:bg-[#26c72d] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
//               >
//                 <FaLinkedinIn />
//               </a>
//               <a
//                 href="#"
//                 className="bg-gray-800 hover:bg-[#26c72d] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
//               >
//                 <FaYoutube />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="sm:-mt-8">
//             <h4 className="text-xl font-bold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {/* <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-[#26C72D] transition-colors duration-300"
//                 >
//                   About Us
//                 </a>
//               </li> */}
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-[#26C72D] transition-colors duration-300"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-[#26C72D] transition-colors duration-300"
//                 >
//                   Charging Stations
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-[#26C72D] transition-colors duration-300"
//                 >
//                   EV Conversion
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-[#26C72D] transition-colors duration-300"
//                 >
//                   Career
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-[#26C72D] transition-colors duration-300"
//                 >
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="sm:-mt-8">
//             <h4 className="text-xl font-bold mb-4">Contact Info</h4>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <FaMapMarkerAlt className="text-[#26C72D] mr-3 mt-1" />
//                 <span className="text-gray-400">
//                   123 Electric Avenue, EV City, 54321
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <FaPhone className="text-[#26C72D] mr-3" />
//                 <span className="text-gray-400">080 8575 8575</span>
//               </li>
//               <li className="flex items-center">
//                 <FaEnvelope className="text-[#26C72D] mr-3" />
//                 <span className="text-gray-400">info@batteryfy.com</span>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="sm:-mt-8">
//             <h4 className="text-xl font-bold mb-4">Newsletter</h4>
//             <p className="text-gray-400 mb-4">
//               Subscribe to our newsletter for the latest updates and offers.
//             </p>
//             <form className="space-y-3">
//               <input
//                 type="email"
//                 placeholder="Your Email Address"
//                 className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-[#26C72D] hover:bg-[#51d257] text-white font-bold py-2 px-4 rounded-md transition duration-300"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="pt-8 border-t border-gray-800 text-center">
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} Batteryfy. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Logo from "../assets/Logo.png";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <img src={Logo} alt="Logo" className="h-10 object-cover mb-2" />
          <p>Delivering top-quality construction materials for you.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul>
            <li>
              <a href="/products" className="hover:underline">
           Products
              </a>
            </li>
            <li>
              <a href="/gallery"  className="hover:underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact"  className="hover:underline">
               Contact
              </a>
            </li>
          </ul>
        </div>
        <div >
          <h3 className="font-bold mb-2">Contact</h3>
          <p>info@graymaterial.com</p>
          <p>080 - 8575 8575</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <p className="flex items-center gap-4">
            <span>
              <Linkedin className="hover:text-blue-500" />
            </span>
            <span>
              <Facebook  className="hover:text-blue-400"/>
            </span>
            <span>
              <Instagram  className="hover:text-pink-500"/>
            </span>
          </p>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">
        &copy; Gray Materials®, 2025. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
