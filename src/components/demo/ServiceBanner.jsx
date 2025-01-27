import React from "react";

export const ServiceBanner = () => {
  return (
    <div 
      className="relative w-full h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] bg-cover bg-center flex items-start justify-center text-center px-4 pt-10 sm:pt-16 md:pt-20 lg:pt-24" 
      style={{ backgroundImage: "url('/service.png')" }}
    >
      <div className="absolute top-0 lg:top-5 left-1/2 transform -translate-x-1/2 w-full px-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-700">
          Complete Technical Solutions In Water Treatment
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mt-4">
          Pure water, Safe family
        </h3>
      </div>
    </div>
  );
};

export default ServiceBanner;
