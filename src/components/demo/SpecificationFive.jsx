import React from "react";

const SpecificationFive = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 px-6 lg:px-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white hover:text-indigo-600 transition duration-300 ease-in-out">
          Industrial Water Purifier
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Image Section */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src="/water-purifier/img-5.png"
            alt="Industrial Water Purifier"
            className="w-full max-w-xl rounded-lg shadow-lg transform transition-transform hover:scale-105"
          />
        </div>

        {/* Description Section */}
        <div className="lg:w-1/2 text-lg md:text-xl leading-relaxed">
          <p>
            Industrial water purifiers are designed and assembled according to the
            requirements of the customer, site location, and water quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecificationFive;
