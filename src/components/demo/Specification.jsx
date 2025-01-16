import React from "react";

const Specification = ({ productData }) => {
  return (
    <div className="p-6 md:px-16 lg:px-32 mx-auto bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300 shadow-xl space-y-8 w-full product-background">
      
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white hover:text-indigo-600 transition duration-300 ease-in-out">
        {productData.name}
      </h2>

      {/* Product Image and Specifications Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={productData.image}
            alt={productData.name}
            className="w-full h-80 object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Specifications */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Specifications</h3>
          <ul className="space-y-4">
            {/* Dynamically render specifications */}
            {Object.entries(productData.specifications).map(([key, value]) => (
              <li key={key} className="text-gray-800">
                <strong className="text-indigo-600 capitalize">{key.replace(/([A-Z])/g, " $1")}: </strong>
                {Array.isArray(value) ? (
                  <ul className="list-disc pl-5 space-y-1">
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
        <h3 className="text-3xl font-semibold text-green-600 mb-4">Benefits</h3>
        <ul className="space-y-4">
          {productData.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-800 bg-yellow-100 rounded-xl px-2">{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Specification;
