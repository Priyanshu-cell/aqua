import { Button } from "../ui/button.jsx";
const AboutTopBanner = () => {
  return (
    <>
      <div
        className="">
        <img src="/aboutus/about-us-top.png" className="object-contain w-full">
        </img>
      
        {/* Main Content */}
        <div className="relative flex flex-col items-center text-center justify-center px-6 md:px-10 lg:px-20 pt-10md:py-10 bg-gray-200">
          

          <p className="text-lg md:text-xl text-black pt-4 mb-6 max-w-3xl font-semibold text-justify ">
            Welcome to Shreeansh Aqua Solutions, the most trusted name in RO
            water purifier sales, service, and maintenance in Dehradun. With
            over 15 years of expertise, we specialize in providing complete
            water purification solutions for domestic, commercial, and
            industrial purposes.
          </p>

          {/* Button */}
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out">
            Explore Us
          </Button>
        </div>
      </div>

      <div className="bg-slate-300 text-gray-700 py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          {/* Heading Section */}
          <div className="mb-6">
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 text-justify md:text-center">
            We understand the importance of clean, pure, and healthy water for your well-being. That’s why our highly skilled team offers top-notch services across all major RO brands, including Aquaguard, Kent, HUL Pureit, Livpure, AO Smith, and many more.
            </h3>
            <span></span>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutTopBanner;