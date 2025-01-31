import React from "react";
import { Button } from "../ui/button";

const LeftRightBox = () => {
  const handleCall = () => {
    window.location.href = "tel:+917579008065";
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 md:p-12 bg-gray-100">
      {/* Left Side - Image */}
      <div className="flex justify-center">
        <img
          src="hand-pic.png" // Replace with your actual image path
          alt="Water Filter System"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-[#1690F0] text-2xl md:text-5xl font-bold leading-tight">
          Protect your family with the best water filtering system
        </h2>
        <p className="text-slate-700 text-lg leading-relaxed">
          We produce high-tech solutions in the field of water purification that meet the most stringent quality standards and customer requirements. Purification is carried out with the help of innovative developments of the brand.
        </p>
        
        {/* Button */}
        <div>
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
          onClick={handleCall}>
            Call Us Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftRightBox;
