import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900 py-16 px-4" id="contact">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
          Get in Touch
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 mb-8">
          Whether you need material pricing, quality details, or want to speak
          to our sales team, we're here to help.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <Phone className="w-6 h-6 text-blue-600 mb-2" />
            <p className="text-lg font-semibold text-zinc-800 dark:text-white">
              080 - 8575 8575
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-6 h-6 text-blue-600 mb-2" />
            <p className="text-lg font-semibold text-zinc-800 dark:text-white">
              info@graymaterial.com
            </p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-6 h-6 text-blue-600 mb-2" />
            <p className="text-lg font-semibold text-zinc-800 dark:text-white">
              Hubli,Karnataka,India
            </p>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-zinc-800 mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15389.253188842828!2d75.11395208060357!3d15.359509713230663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d736cf492201%3A0x9523e2cb14e7e318!2sMarvel%20Artiza!5e0!3m2!1sen!2sin!4v1754886633841!5m2!1sen!2sin"
            // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15389.253188842828!2d75.11395208060357!3d15.359509713230663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d736cf492201%3A0x9523e2cb14e7e318!2sMarvel%20Artiza!5e0!3m2!1sen!2sin!4v1754886633841!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-wehen-downgrade"
            title="Gray Material Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
