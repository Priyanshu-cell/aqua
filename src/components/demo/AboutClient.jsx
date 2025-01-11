import React from "react";

const AboutClient = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 md:px-10 font-sans text-center">
        {/* Section Heading */}
        <div className="text-center mb-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 font-mono">
            Our Clients
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify md:px-8">
            Clients are our priority, and we strive to meet their needs for
            standard water purification systems. Through collaboration and
            understanding, we have built strong relationships that have helped
            expand our client base.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
          {[
            "logo-1.png",
            "logo-2.png",
            "logo-3.png",
            "logo-4.png",
            "logo-5.png",
            "logo-6.png",
            "logo-7.png",
            "logo-8.png",
          ].map((logo, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg flex justify-center items-center p-4"
            >
              <img
                src={`aboutus/client-logo/${logo}`}
                alt={`Logo of client ${index + 1}`}
                className="h-16 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutClient;
