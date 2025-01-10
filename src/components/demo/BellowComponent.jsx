import itemData from "../../data/item.json";

const BellowComponent = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 ">
      {itemData.map((item) => (
        <div
          key={item.id}
          className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg mb-10 p-6 md:p-10 space-y-8"
        >
          {/* Additional Features */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 border-b-4 border-yellow-500 pb-2 mb-4">
              Additional Features
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              {item.additionalFeatures?.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-base md:text-lg flex items-start space-x-2"
                >
                  <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mt-1"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* About This Product */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-4">
              About This Product
            </h3>
            <ul className="space-y-3 list-decimal list-inside">
              {item.aboutThisProduct?.map((point, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-base md:text-lg flex items-start space-x-2"
                >
                  <span className="font-medium text-yellow-500">
                    {index + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Points */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 border-b-4 border-green-500 pb-2 mb-4">
              Key Points
            </h3>
            <ul className="space-y-3 list-decimal list-inside">
              {item.keyPoints?.map((point, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-base md:text-lg flex items-start space-x-2"
                >
                  <span className="font-medium text-blue-500">
                    {index + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warranty Details */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 border-b-4 border-red-500 pb-2 mb-4">
              Warranty Details
            </h3>
            {item.warrantyDetails ? (
              typeof item.warrantyDetails === "object" ? (
                <div className="space-y-3 text-gray-700 text-base md:text-lg">
                  <p>
                    <strong className="text-gray-800">Duration:</strong>{" "}
                    {item.warrantyDetails.duration}
                  </p>
                  <p>
                    <strong className="text-gray-800">Coverage:</strong>{" "}
                    {item.warrantyDetails.coverage}
                  </p>
                </div>
              ) : (
                <p className="text-gray-700 text-base md:text-lg">
                  {item.warrantyDetails}
                </p>
              )
            ) : (
              <p className="text-gray-500 text-base md:text-lg italic">
                No warranty details available.
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BellowComponent;
