import React from "react";

const SpecificationTwo = ({ productDataTwo }) => {
  if (!productDataTwo) {
    return <p className="text-center text-xl text-red-500">Product data is unavailable.</p>;
  }

  return (
    <div className="p-6 md:px-16 lg:px-32 mx-auto bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-lg shadow-xl space-y-6 w-full">
      {/* Product Name */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 hover:text-indigo-600 transition duration-300 ease-in-out">
        {productDataTwo.name}
      </h2>

      {/* Product Image and Specifications Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={productDataTwo.image}
            alt={productDataTwo.name}
            className="w-full h-64 object-contain rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Specifications */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-6 text-indigo-700">Specifications:</h3>
          <ul className="space-y-4">
            {/* Dynamically render specifications */}
            {Object.entries(productDataTwo.specifications).map(([key, value]) => (
              <li key={key} className="text-lg text-gray-800">
                <strong className="text-xl text-indigo-600 capitalize">{key.replace(/([A-Z])/g, " $1")}: </strong>
                {Array.isArray(value) ? (
                  <ul className="list-disc pl-6 space-y-1">
                    {value.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-gray-600">{value}</span>
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
          {productDataTwo.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-800 bg-yellow-100 rounded-xl px-2">{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecificationTwo;