import React from "react";

const WaterHeader = () => {
  return (
    <div
      className="bg-cover bg-center py-10 relative"
      style={{ backgroundImage: "url('/background/trc-pattern.svg')" }}
    >
      {/* Semi-transparent overlay for low opacity */}
      <div className="absolute inset-0 bg-white opacity-70"></div>

      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white shadow-lg rounded-lg py-8">
        {/* Image Section */}
        <div className="flex justify-center max-w-xs mx-auto">
          <img
            src="/home-products/water-purifier.png"
            alt="Water Purifier"
            className="w-48 h-auto sm:w-64"
          />
        </div>

        {/* Title */}
        <div className="mt-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Water Purifier
          </h1>
        </div>

        {/* Description */}
        <div className="mt-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-700">
            Suitable for Municipal, Borewell & <br />
            Tanker water. <b>TDS from 0—2000 mg/l</b>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WaterHeader;
