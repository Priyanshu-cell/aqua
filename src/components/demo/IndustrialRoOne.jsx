const IndustrialRoOne = ({ firstData }) => {
  return (
    <div className="p-6 md:px-16 lg:px-32 mx-auto md:py-14 bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300 shadow-xl space-y-8 w-full product-background-related">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white hover:text-indigo-600 transition duration-300 ease-in-out">
        {firstData.name}
      </h2>

      {/* Product Image and Specifications Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={firstData.image}
            alt={firstData.name}
            className="w-full h-80 object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Specifications */}
        <div className="bg-yellow-900 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-[#5ec472] mb-4">
            Specifications
          </h3>
          <ul className="space-y-4">
            {Object.entries(firstData.specifications).map(([key, value]) => (
              <li key={key} className="paragraph">
                <strong className="text-indigo-400 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:{" "}
                </strong>
                {Array.isArray(value) ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {value.map((item, index) => (
                      <li key={index} className="paragraph">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="paragraph">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-green-600 mb-4">Benefits</h3>
        <ul className="space-y-4">
          {firstData.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-800 bg-yellow-100 rounded-xl px-2">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Description Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-indigo-700 mb-4">Description</h3>
        <p className="text-gray-800 text-lg">{firstData.description}</p>
      </div>
    </div>
  );
};

export default IndustrialRoOne;
