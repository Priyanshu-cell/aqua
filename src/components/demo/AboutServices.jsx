import React from "react";

const AboutServices = () => {
  return (
    <div className="bg-gray-50 py-10 px-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-4 font-mono">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg">
          We provide reliable and professional services to ensure the best performance of your water purifiers.
        </p>
      </div>

      {/* Services Section */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Service Cards */}
        {[
          {
            title: "RO Service & Repair",
            description:
              "We provide professional RO repair and maintenance services to keep your water purifier functioning at its best. Whether it's a filter change, membrane replacement, or any other technical issue, our experts handle it all.",
          },
          {
            title: "RO Installation",
            description:
              "Looking for a reliable RO installation service? Our expert technicians ensure proper setup and functionality for all types of water purifiers to ensure you get the purest drinking water.",
          },
          {
            title: "RO AMC (Annual Maintenance Contract)",
            description:
              "Our customized AMC plans offer complete peace of mind by providing regular maintenance and servicing of your RO system, ensuring it works efficiently throughout the year.",
          },
          {
            title: "Water Softener Services",
            description:
              "We also specialize in water softener systems to remove hardness from water, making it suitable for both domestic and industrial use.",
          },
          {
            title: "Hot & Cold RO Water Dispensers",
            description:
              "We offer RO-enabled hot and cold water dispensers, perfect for offices, homes, and commercial spaces, providing instant access to purified water at your desired temperature.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Importance of RO Service */}
      <div className="bg-gray-100 mt-12 py-8 px-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold text-center text-green-700 mb-6">
          Why Regular RO Service is Important?
        </h3>
        <p className="text-gray-800 text-lg leading-relaxed text-justify">
          RO water purifiers work continuously to remove impurities and deliver
          safe, healthy drinking water. Over time, filters and membranes can
          get clogged, affecting water quality. Regular service ensures:
        </p>
        <ul className="list-disc list-inside space-y-4 mt-4 text-gray-800">
          <li>Proper removal of contaminants and impurities</li>
          <li>Increased efficiency and lifespan of the purifier</li>
          <li>Consistent water quality</li>
          <li>Prevention of costly repairs</li>
        </ul>
        <p className="mt-6 text-gray-800">
          Our expert service team ensures your RO system works optimally with
          regular checkups and filter replacements.
        </p>
      </div>
    </div>
  );
};

export default AboutServices;
