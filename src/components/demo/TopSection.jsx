import React from "react";

const TopSection = () => {
  const serviceDetails = [
    { title: "Water Purifier", img: "/TopSection/water-purifier.png" },
    { title: "Domestic Ro", img: "/TopSection/domestic-ro.png" },
    { title: "Commercial Ro", img: "/TopSection/commercial-ro.png" },
    { title: "Industrial Ro", img: "/TopSection/industrial-ro.png" },
    { title: "Water Softener", img: "/TopSection/water-softener.png" },
  ];

  return (
    <div className="bg-gray-100 py-4 md:px-20">
      <div className="flex items-center justify-between space-x-4 overflow-x-auto scrollbar-hide px-4 no-scrollbar">
        {serviceDetails.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center w-32 text-center space-y-2"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-medium text-gray-800">
              {service.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
