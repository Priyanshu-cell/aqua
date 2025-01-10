const Products = ({ itemData, title }) => {
  return (
    <div className="text-center py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-8 text-white bg-clip-text text-transparent">
        {title}
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {itemData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105"
          >
            {/* Product Image */}
            <div className="relative pb-56 overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.model}
                className="absolute h-full w-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2 text-white">
                {item.model}
              </h2>

              {/* Tags */}
              <ul className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 text-sm rounded-full border border-yellow-500 bg-gray-900 text-white"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* Price Section */}
              <div className="mt-4 text-left">
                <p>
                  <span className="font-bold text-2xl text-green-400">
                    ₹{item.price}
                  </span>
                  <span className="ml-2 line-through text-gray-400 text-lg">
                    ₹{item.MRP}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;