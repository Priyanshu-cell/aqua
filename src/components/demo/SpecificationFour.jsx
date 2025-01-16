import React from "react";

const SpecificationFour = ({ productDataFour }) => {
  if (!productDataFour) {
    return <p className="text-center text-xl text-red-500">Product data is unavailable.</p>;
  }

  return (
    <div className="w-full bg-gradient-to-r from-teal-100 via-blue-100 to-purple-100 rounded-lg shadow-xl py-10 px-4 lg:px-10 space-y-10">
      {/* Product Name */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 hover:text-indigo-600 transition duration-300 ease-in-out">
        {productDataFour.name}
      </h2>

      {/* Product Image */}
      <div className="flex justify-center items-center">
        <img
          src={productDataFour.image}
          alt={productDataFour.name}
          className="w-full max-w-3xl h-auto object-contain rounded-lg shadow-xl transform transition-transform hover:scale-105"
        />
      </div>

      {/* Specifications Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-indigo-700">Specifications</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(productDataFour.specifications).map(([key, value]) => (
            <li key={key} className="text-lg text-gray-800">
              <strong className="text-indigo-600 capitalize">
                {key.replace(/([A-Z])/g, " $1")}:{" "}
              </strong>
              {Array.isArray(value) ? (
                <ul className="list-disc pl-6 space-y-1">
                  {value.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              ) : typeof value === "object" ? (
                <ul className="list-disc pl-6 space-y-1">
                  {Object.entries(value).map(([subKey, subValue]) => (
                    <li key={subKey} className="text-gray-700">
                      <strong className="capitalize">{subKey.replace(/([A-Z])/g, " $1")}: </strong>{subValue}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-gray-600">{value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h3 className="text-2xl md:text-3xl font-semibold text-green-600">Benefits</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productDataFour.benefits.map((benefit, index) => (
            <li
              key={index}
              className="text-gray-800 bg-yellow-50 border border-yellow-200 rounded-lg p-4"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Usage Tips Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h3 className="text-2xl md:text-3xl font-semibold text-blue-600">Usage Tips</h3>
        <ul className="list-disc pl-6 space-y-4">
          {productDataFour.usageTips.map((tip, index) => (
            <li key={index} className="text-gray-700">{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecificationFour;
