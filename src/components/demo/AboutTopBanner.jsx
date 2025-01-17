import React from "react";
import { Button } from "../ui/button.jsx";
const AboutTopBanner = () => {
  return (
    <>
      <div
        className="bg-cover bg-center md:py-10 pt-7 pb-10 relative"
        style={{ backgroundImage: "url('/aboutus/about-us-top.webp')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Main Content */}
        <div className="relative flex flex-col items-center text-center justify-center px-6 md:px-10 lg:px-20 pt-10md:py-10 font-mono">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Us  "Shreeansh Aqua Solutions"
          </h1>

          <p className="text-base md:text-xl text-gray-200 mb-6 max-w-3xl font-semibold">
            Welcome to Shreeansh Aqua Solutions, the most trusted name in RO
            water purifier sales, service, and maintenance in Dehradun. With
            over 15 years of expertise, we specialize in providing complete
            water purification solutions for domestic, commercial, and
            industrial purposes.
          </p>

          {/* Button */}
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out">
            Explore Us
          </Button>
        </div>
      </div>

      <div className="bg-gray-200 text-gray-700 py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          {/* Heading Section */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold font-mono text-gray-800 text-center md:text-center">
            We understand the importance of clean, pure, and healthy water for your well-being. That’s why our highly skilled team offers top-notch services across all major RO brands, including Aquaguard, Kent, HUL Pureit, Livpure, AO Smith, and many more.
            </h3>
            <span></span>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutTopBanner;