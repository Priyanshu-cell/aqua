import React from "react";

const DomesticRoSeven = ({ productDataSeven }) => {
  if (!productDataSeven) {
    return (
      <p className="text-center text-xl text-red-500">
        Product data is unavailable.
      </p>
    );
  }

  return (
    <div className="p-6 md:px-16 lg:px-32 mx-auto bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 shadow-xl space-y-6 w-full product-background-related">
      {/* Product Name */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white hover:text-indigo-600 transition duration-300 ease-in-out">
        {productDataSeven.name}
      </h2>

      {/* Optional Subtitle */}
      {productDataSeven.sub_name && (
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-yellow-300">
          {productDataSeven.sub_name}
        </h3>
      )}

      {/* Product Image and Specifications Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={productDataSeven.image}
            alt={productDataSeven.name}
            className="w-full h-64 object-contain rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Specifications */}
        <div className="bg-yellow-900 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-6 sub-heading">Specifications:</h3>
          <ul className="space-y-4 text-white">
            {Object.entries(productDataSeven.specifications).map(([key, value]) => (
              <li key={key}>
                <strong className="text-xl text-indigo-400 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </strong>{" "}
                {Array.isArray(value) ? (
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    {value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <span>{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-6 text-green-600">Benefits:</h3>
        <ul className="space-y-4">
          {productDataSeven.benefits?.map((benefit, index) => (
            <li
              key={index}
              className="text-gray-800 bg-yellow-100 rounded-xl px-2"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Description */}
      <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-6 text-indigo-600">Description:</h3>
        <p className="text-gray-700 leading-relaxed">{productDataSeven.description}</p>
      </div>
    </div>
  );
};

export default DomesticRoSeven;
