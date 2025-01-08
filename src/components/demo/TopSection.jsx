import { Link, useNavigate } from "react-router-dom";

const TopSection = () => {
  const serviceDetails = [
    {
      title: "Water Purifier",
      img: "/TopSection/water-purifier.png",
      url: "/water-purifier",
    },
    {
      title: "Domestic Ro",
      img: "/TopSection/domestic-ro.png",
      url: "/domestic-ro",
    },
    {
      title: "Commercial Ro",
      img: "/TopSection/commercial-ro.png",
      url: "/commercial-ro",
    },
    {
      title: "Industrial Ro",
      img: "/TopSection/industrial-ro.png",
      url: "/industrial-ro",
    },
    {
      title: "Water Softener",
      img: "/TopSection/water-softener.png",
      url: "/water-softener",
    },
  ];

  return (
    <div className="bg-gray-100 py-4 md:px-20">
      <div className="flex items-center justify-between space-x-4 overflow-x-auto scrollbar-hide px-4 no-scrollbar">
        {serviceDetails.map(({ title, img, url }, index) => (
          <Link key={index}
          to={`${url}`}>
            <div
              className="flex-shrink-0 flex flex-col items-center justify-center w-32 text-center space-y-2 
            rounded hover:bg-[#704343d4] transition-all duration-300"
            >
              <img src={img} alt={title} className="w-12 h-12 object-contain" />
              <span className="text-sm font-medium text-gray-800">{title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
