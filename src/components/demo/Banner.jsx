import React, { useEffect } from "react";
import { ArrowDownSquare, ArrowLeftSquareIcon } from "lucide-react";

const Banner = () => {
  return (
    <div className="pt-5 pb-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center p-8 bg-gray-100">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            How we works
          </h1>
          <p className="text-lg text-gray-600">
            Discover how we can assist you in achieving your goals effortlessly.
          </p>
          <a
            href="tel:+66956943229"
            onClick={(e) => {
              e.preventDefault();
              if (window.confirm("This will dial +66956943229. Proceed?")) {
                window.location.href = "tel:+656943229";
              }
            }}
          >
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300 flex items-center space-x-2 luxuryButton">
              <span>Contact Us</span>
              <ArrowLeftSquareIcon />
            </button>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/banner/pic--2.jpeg"
            alt="Banner Image"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
