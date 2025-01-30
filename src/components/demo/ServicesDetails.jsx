import React from "react";
import data from "../../data/details-services.json";

const ServicesDetails = () => {
  return (
    <div className="py-8 md:py-12 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 drop-shadow-md">
          Our Premium Services
        </h1>
        <p className="text-center text-lg text-gray-700 mt-2">
          We provide high-quality RO services for homes, businesses, and industries.
        </p>

        {/* Service Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 transform transition duration-300 hover:scale-105 border-t-4 border-indigo-500"
            >
              <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
              <p className="text-gray-700 mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
