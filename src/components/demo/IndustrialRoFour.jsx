const IndustrialRoFour = ({ forthData }) => {
  return (
    <div className="p-6 md:px-16 lg:px-32 mx-auto bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300 shadow-xl space-y-8 w-full product-background">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white hover:text-indigo-600 transition duration-300 ease-in-out">
        {forthData.name}
      </h2>

      {/* Product Image and Specifications Layout */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={forthData.image}
            alt={forthData.name}
            className="w-full h-80 object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Specifications */}
        <div className="bg-yellow-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#5ec472] mb-4">
            Specifications
          </h3>
          <p className="text-white">{forthData.specifications}</p>
        </div>
      </div>
    </div>
  );
};

export default IndustrialRoFour;
