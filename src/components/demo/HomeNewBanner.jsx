import { PhoneCallIcon } from "lucide-react";
import React from "react";

const HomeNewBanner = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[800px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Home/bg.jpg')" }} // Replace with your image path
      ></div>

      {/* Overlay (Optional: To Darken the Image) */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Positioned to Top-Left */}
      <div className="absolute top-1 left-2 md:top-10 md:left-6 z-10 text-white">
        <h1 className="text-3xl md:text-5xl font-bold">ROHUB</h1>
        <p className="text-xl md:text-2xl mt-2 font-bold font-serif bg-slate-800">
          Shreeansh Aqua Solutions
        </p>
      </div>

      {/*company content */}

      <div className="hidden md:block absolute top-10 left-2 md:top-44 md:left-6 z-10 text-white">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-200">Innovative Water Treatment <br/>Solutions For You</h1>
        <p className="text-xl md:text-2xl mt-10 font-bold font-serif bg-slate-800 p-4 text-justify max-w-lg">
        Founded in 2007, we offer comprehensive water purification solutions—from concept through commissioning and maintenance— ensuring unmatched quality, efficiency, and customer satisfaction
        </p>
      </div>

      {/*img */}
      <div className="absolute left-auto top-28 md:left-auto  md:right-8 md:top-8 m-2 border-4 md:border-8 border-gray-300 rounded-lg shadow-lg">
        <img
          src="/Home/main.png"
          className="h-auto md:h-[700px] border border-gray-400 rounded-lg"
        />
      </div>

      <div className="absolute bottom-2 left-2 z-10 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-lg">
        {/* Phone Icon & Call Us in Same Row */}
        <div className="flex items-center gap-2 md:gap-6">
          <PhoneCallIcon
            className="text-yellow-400 text-3xl md:text-4xl"
            size={30}
          />
          <h1 className="text-2xl md:text-5xl font-bold text-yellow-400">
            Call Us
          </h1>
        </div>

        {/* Phone Numbers */}
        <p className="text-sm md:text-xl mt-1 font-bold font-serif text-white">
          +91 7579008065, +91 8171061278
        </p>
      </div>
    </div>
  );
};

export default HomeNewBanner;
