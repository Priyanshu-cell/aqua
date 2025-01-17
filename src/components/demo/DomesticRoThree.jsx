const DomesticRoThree = ({ productData }) => {
  if (!productData) {
    return <p className="text-center text-xl text-red-500">Product data is unavailable.</p>;
  }

  return (
    <div className="p-6 md:px-16 lg:px-32 mx-auto bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 shadow-xl space-y-6 w-full product-background-related">
      {/* Product Name */}
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
            className="w-full h-64 object-contain rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Specifications */}
        <div className="bg-yellow-900 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-6 sub-heading">Specifications:</h3>
          <ul className="space-y-4">
            {/* Dynamically render stages of purification */}
            {productData.specifications?.purificationTechnology?.map((tech, index) => (
              <li key={index} className="text-lg text-black">
                <strong className="text-xl text-indigo-400 capitalize">{tech}</strong>
              </li>
            ))}
            {/* Dynamically render filtration stages */}
            {productData.specifications?.filtrationStages?.map((stage, index) => (
              <li key={index} className="text-lg text-black">
                {Object.entries(stage).map(([key, value]) => (
                  <div key={key}>
                    <strong className="text-xl text-indigo-400 capitalize">{key}: </strong>
                    <span className="paragraph">{value}</span>
                  </div>
                ))}
              </li>
            ))}
            {/* Dynamically render quality certifications */}
            {productData.specifications?.qualityCertifications?.map((cert, index) => (
              <li key={index} className="text-lg text-black">
                <strong className="text-xl text-indigo-400 capitalize">{cert}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-6 text-green-600">Benefits:</h3>
        <ul className="space-y-4">
          {productData.benefits?.map((benefit, index) => (
            <li key={index} className="text-gray-800 bg-yellow-100 rounded-xl px-2">{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DomesticRoThree;
