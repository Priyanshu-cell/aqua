import React from 'react';

const DomesticRoOne = ({ productDataOne }) => {
  if (!productDataOne) {
    return <p className="text-center text-xl text-red-500">Product data is unavailable.</p>;
  }

  return (
    <div className="p-6 md:px-16 lg:px-32 mx-auto bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 shadow-xl space-y-6 w-full product-background-related">
      {/* Product Name */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white hover:text-indigo-600 transition duration-300 ease-in-out">
        {productDataOne.name}
      </h2>

      {/* Product Image and Specifications Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={productDataOne.image}
            alt={productDataOne.name}
            className="w-full h-64 object-contain rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Specifications */}
        <div className="bg-yellow-900 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-6 sub-heading">Specifications:</h3>
          <ul className="space-y-4">
            {/* Dynamically render stages of purification */}
            {productDataOne.specifications.stagesOfPurification.map((stage, index) => (
              <li key={index} className="text-lg text-black">
                {Object.entries(stage).map(([key, value]) => (
                  <div key={key}>
                    <strong className="text-xl text-indigo-400 capitalize">{key}: </strong>
                    <span className="paragraph">{value}</span>
                  </div>
                ))}
              </li>
            ))}
            {/* Dynamically render other specifications */}
            {Object.entries(productDataOne.specifications).map(([key, value]) => {
              if (key === 'stagesOfPurification') return null; // Already rendered stagesOfPurification
              return (
                <li key={key} className="text-lg paragraph">
                  <strong className="text-xl text-indigo-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </strong>
                  <span className="paragraph">{value}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-6 text-green-600">Benefits:</h3>
        <ul className="space-y-4">
          {productDataOne.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-800 bg-yellow-100 rounded-xl px-2">{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DomesticRoOne;
