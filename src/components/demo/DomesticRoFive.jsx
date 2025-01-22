const DomesticRoFive = ({ productDataFive }) => {
  if (!productDataFive) {
    return (
      <p className="text-center text-xl text-red-500">Product data is unavailable.</p>
    );
  }

  return (
    <div className="p-6 md:px-16 lg:px-32 mx-auto bg-gradient-to-r from-blue-100 via-teal-100 to-green-100 shadow-xl space-y-6 w-full product-background-related">
      {/* Product Name */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white hover:text-blue-600 transition duration-300 ease-in-out">
        {productDataFive.name}
      </h2>

      {/* Product Image and Specifications Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={productDataFive.image}
            alt={productDataFive.name}
            className="w-full h-64 object-contain rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Specifications */}
        <div className="bg-yellow-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-white sub-heading">Specifications:</h3>
          <ul className="space-y-4">
            {Object.entries(productDataFive.specifications).map(([key, value], index) => (
              <li key={index} className=" text-gray-200">
                <strong className=" text-indigo-400 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</strong>
                {Array.isArray(value) ? (
                  <ul className="ml-4 list-disc">
                    {value.map((item, subIndex) => (
                      <li key={subIndex} className="text-gray-100">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="ml-2">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-green-600">Benefits:</h3>
        <ul className="space-y-4">
          {productDataFive.benefits?.map((benefit, index) => (
            <li key={index} className="text-gray-800 bg-yellow-100 rounded-xl px-2">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Description Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-blue-600">Description:</h3>
        <p className="text-gray-700 leading-relaxed">{productDataFive.description}</p>
      </div>
    </div>
  );
};

export default DomesticRoFive;
