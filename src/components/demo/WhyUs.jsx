import {
  Calendar1Icon,
  PercentDiamond,
  ScanIcon,
  ShoppingBagIcon,
} from "lucide-react";

const WhyUs = () => {
  const cardDetails = [
    {
      logo: <PercentDiamond size={30} className="text-blue-500" />,
      details: "Experienced Professionals",
      info: "Our team consists of trained and certified service engineers",
    },
    {
      logo: <ScanIcon size={30} className="text-green-500" />,
      details: "Affordable Services",
      info: "We offer budget-friendly pricing for all our services",
    },
    {
      logo: <ShoppingBagIcon size={30} className="text-orange-500" />,
      details: "Wide Range of Solutions",
      info: "From RO installation, repair, maintenance, and AMC services",
    },
    {
      logo: <Calendar1Icon size={30} className="text-purple-500" />,
      details: "Customer Satisfaction",
      info: "We focus on long-term relationships with our clients",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ">
          Why buy from RO HUB?
        </h2>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-5 md:px-12">
        {cardDetails.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-3 md:p-6 hover:shadow-lg transition-all"
          >
            {/* Logo */}
            <div className="mb-4">{product.logo}</div>

            {/* Details */}
            <h3 className="text-lg font-semibold text-gray-700">
              {product.details}
            </h3>

            {/* Info */}
            <p className="text-sm text-gray-600 mt-1 text-center">{product.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
