import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background py-10">
      <div className="max-w-[1040px] mx-auto px-4 md:px-0 md:flex md:flex-row flex-col justify-between gap-16">
        {/* First Column */}
        <div className="w-full md:w-[400px]">
          <h1 className="text-white text-start text-3xl font-semibold">
            Asal Advert
          </h1>
          <p className="text-start text-white text-lg pt-5">
            We are here to help you with any questions you may have
          </p>
          <div className="flex gap-4 py-4">
            <FaFacebook className="w-5 h-5 text-white" />
            <FaInstagram className="w-5 h-5 text-white" />
            <FaTiktok className="w-5 h-5 text-white" />
            <FaLinkedin className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/3 md:pl-10">
          <h1 className="text-white text-start text-xl">Useful Links</h1>
          <ul className="text-start text-gray-400 text-base space-y-2 pt-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-1/3">
          <h1 className="text-white text-start text-xl">Say Hello</h1>
          <ul className="text-start text-gray-400 text-base space-y-2 pt-4">
            <li>Location: 123 Street Name, City</li>
            <li>Email: example@email.com</li>
            <li>Phone: +123 456 789</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
