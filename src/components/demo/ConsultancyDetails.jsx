import React from "react";
import { Button } from "../ui/button";

const ConsultancyDetails = () => {
  return (
    <div className="bg-gradient-to-b from-[#1B1F3B] to-[#2C3E50] text-white py-10 px-5 md:px-20">
      {/* Heading */}
      <div className="text-center text-2xl md:text-4xl font-bold mb-10">
        Consultancy For New Business Setup In Thailand
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {/* Service Images */}
        {[
          "/consultancy/focus-thai-1.png",
          "/consultancy/focus-thai-2.png",
          "/consultancy/focus-thai-3.png",
        ].map((image, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <img
              src={image}
              alt={`Service ${index + 1}`}
              className="w-full h-40 sm:h-48 md:h-60 object-cover transition duration-300 group-hover:brightness-110 group-hover:contrast-125"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-10">
        <a
          href="tel:+66956943229"
          onClick={(e) => {
            e.preventDefault();
            if (window.confirm("This will dial +66956943229. Proceed?")) {
              window.location.href = "tel:+66956943229";
            }
          }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
            Schedule a Call
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ConsultancyDetails;
