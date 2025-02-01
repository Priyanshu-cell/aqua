import RoServiceBrands from "@/components/demo/RoServiceBrands";
import ServicesDetails from "@/components/demo/ServicesDetails";
import React from "react";

const ServicesDetailsPage = () => {

  const handleCall = () => {
    window.location.href = "tel:+917579008065";
  };

  return <>
    <ServicesDetails />
    <RoServiceBrands />
    <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-2xl rounded-lg p-8 md:p-12 lg:p-16 space-y-8 text-center text-white">
  {/* Heading */}
  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide">
    RO Water Purifier Service & Repair for All Brands
  </h2>

  {/* Description */}
  <p className="text-lg sm:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
    At <span className="font-semibold text-yellow-300">Shreeansh Aqua Solutions</span>, we provide expert <span className="text-blue-200">RO service, repair, installation, and AMC</span> for all domestic and commercial water purifiers. Whether you own a branded, non-branded, or customized RO system, we ensure pure and healthy drinking water for your home and business.
  </p>

  {/* Service List */}
  <div className="max-w-3xl mx-auto bg-white bg-opacity-20 p-3 md:p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-yellow-300 text-center mb-6">
      Our RO Service Includes:
    </h3>
    <ul className="space-y-3 text-base sm:text-lg md:text-xl text-white font-medium">
  {[
    "RO Installation & Setup (Wall-mounted, Under-sink, Commercial)",
    "RO Repair & Troubleshooting (Leakage, Low Water Flow, Bad Taste, etc.)",
    "RO Filter & Membrane Replacement (Sediment, Carbon, UF, UV, RO Membrane)",
    "RO AMC (Annual Maintenance Contract) for Long-Term Care",
    "TDS & Water Quality Check",
    "Pump, SMPS, UV Lamp, and Other Spare Part Replacement",
  ].map((item, index) => (
    <li key={index} className="flex items-start text-start gap-2 sm:gap-3">
      <span className="text-yellow-300 text-xl sm:text-2xl mt-1">✔</span>
      <span className="leading-snug">{item}</span>
    </li>
  ))}
</ul>

  </div>

  {/* Call to Action */}
  <div className="text-center">
  <button
    onClick={handleCall}
    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
  >
    Book RO Service Now
  </button>
</div>
</div>


    
  </>;
};

export default ServicesDetailsPage;
