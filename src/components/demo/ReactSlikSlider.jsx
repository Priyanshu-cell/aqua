import React from "react";
import Slider from "react-slick";

const ReactSlikSlider = () => {
  // Slider settings
  const settings = {
    dots: true, // Show default dots instead of thumbnails
    dotsClass: "slick-dots flex justify-center gap-3 mt-2 overflow-hidden", // Adjusted spacing
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true, // Smooth fade effect
  };

  return (
    <>
    <div className="w-full mx-auto mt-1 px-0 pb-10 overflow-hidden">
      <div className="relative">
        <Slider {...settings}>
          {[1,2,3].map((num) => (
            <div key={num} className="flex justify-center">
              <img
                src={`/images/${num}.jpg`}
                alt={`slide-${num}`}
                className="w-full h-[32vh] sm:h-[90vh] object-cover md:object-contain rounded-lg shadow-lg transition-transform transform"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute top-56 left-0 sm:top-5 sm:left-5 bg-opacity-60 text-slate-900 px-4 py-2 rounded-lg z-50">
    <div className="block md:hidden text-xl font-bold">ROHUB</div>
    <div className="block md:hidden text-xl sm:text-base font-semibold">Shreeansh Aqua Solution</div>
  </div>

      {/* Custom CSS for bigger dots without overflow */}
      <style>{`
        .slick-dots li button:before {
          font-size: 12px !important; /* Moderate dot size */
          color: gray !important; /* Default color */
        }
        .slick-dots li.slick-active button:before {
          color: #ffcc00 !important; /* Active dot color */
        }
      `}</style>
    </div>
    </>
  );
};

export default ReactSlikSlider;
