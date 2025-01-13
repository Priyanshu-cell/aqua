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
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get To Know Inside
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-200 mb-6 max-w-3xl font-semibold">
            We are established with a motto to offer complete technical
            solutions in water treatment from concept stage to commissioning
            stage with the best engineering standards and specifications.
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
              We are the brainchild of an able promoter who has built our
              industry with strong values and broad vision
            </h3>
            <span></span>
          </div>

          {/* Paragraph Section */}
          <div>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Our company has consistently demonstrated the ability to meet the
              customer at all levels. We adopt the most stringent quality
              assurance standards. Our range of products is subjected to various
              tests of excellence developed by our quality control team to
              ensure they are flawless before dispatch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTopBanner;