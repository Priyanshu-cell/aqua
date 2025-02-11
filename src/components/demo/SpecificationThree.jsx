import React from 'react';

const SpecificationThree = ({ productDataThree }) => {
  if (!productDataThree) {
    return <p className="text-center text-xl text-red-500">Product data is unavailable.</p>;
  }

  return (
    <div className="p-6 md:px-32 mx-auto bg-gradient-to-r from-teal-200 via-blue-200 to-indigo-300 min-h-screen shadow-xl space-y-6 product-background">
      {/* Product Name */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white hover:text-indigo-600 transition duration-300 ease-in-out">
        {productDataThree.name}
      </h2>

      {/* Product Image and Specifications Layout */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={productDataThree.image}
            alt={productDataThree.name}
            className="w-full h-96 object-contain rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 lg:size-[35rem]"
          />
        </div>

        {/* Specifications */}
        <div className="bg-yellow-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 sub-heading">Specifications:</h3>
          <ul className="space-y-4">
            {/* Dynamically render specifications */}
            {Object.entries(productDataThree.specifications).map(([key, value]) => (
              <li key={key} className=" paragraph">
                <strong className=" text-indigo-400 capitalize">{key.replace(/([A-Z])/g, " $1")}: </strong>
                {Array.isArray(value) ? (
                  <ul className="list-disc pl-6 space-y-1">
                    {value.map((item, index) => (
                      <li key={index} className="paragraph">{item}</li>
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
        <h3 className="text-2xl font-semibold mb-6 text-green-600">Benefits:</h3>
        <ul className="space-y-4">
          {productDataThree.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-800 bg-yellow-100 rounded-xl md:text-lg px-2">{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Usage Tips Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-teal-600">Usage Tips:</h3>
        <ul className="space-y-4">
          {productDataThree.usageTips.map((tip, index) => (
            <li key={index} className="text-gray-800 md:text-lg">{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecificationThree;