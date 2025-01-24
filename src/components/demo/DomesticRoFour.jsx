import React from 'react';

const DomesticRoFour = ({ productDataFour }) => {
  if (!productDataFour) {
    return <p className="text-center text-xl text-red-500">Product data is unavailable.</p>;
  }

  return (
    <div className="p-6 md:px-16 lg:px-32 mx-auto bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 shadow-xl space-y-6 w-full product-background-related">
      {/* Product Name */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white hover:text-indigo-600 transition duration-300 ease-in-out">
        {productDataFour.name}
      </h2>

      {/* Product Image and Specifications Layout */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={productDataFour.image}
            alt={productDataFour.name}
            className="w-full h-80 object-contain rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 lg:size-[50rem]"
          />
        </div>

        {/* Specifications */}
        <div className="bg-yellow-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 sub-heading">Specifications:</h3>
          <ul className="space-y-4">
            {Object.entries(productDataFour.specifications).map(([key, value]) => {
              if (Array.isArray(value)) {
                return (
                  <li key={key} className=" text-black">
                    <strong className=" text-indigo-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </strong>
                    <ul className="list-disc pl-6">
                      {value.map((item, index) => (
                        <li key={index} className="paragraph">{item}</li>
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={key} className="paragraph">
                    <strong className="text-indigo-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </strong>
                    <span className="paragraph">{value}</span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-green-600">Benefits:</h3>
        <ul className="space-y-4">
          {productDataFour.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-800 bg-yellow-100 rounded-xl px-4 py-2">{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Description Section */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-blue-800">Description:</h3>
        <p className="text-gray-800">{productDataFour.description}</p>
      </div>
    </div>
  );
};

export default DomesticRoFour;
