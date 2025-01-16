import React from "react";

const HomeProducts = () => {
  const products = [
    {
      heading: "Pre-filter to remove large particles",
      img: "/home-products/water-purifier.png",
      name: "Gravity purifier",
      offers: "Eco-Friendly",
      button: "Explore Now",
      bgClass: "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500",
    },
    {
      heading: "Storage purifier uv based",
      img: "/home-products/water-purifier.png",
      name: "Aquafresh UV-Based Storage Purifier",
      offers: "Chemical-Free Purification:",
      button: "Explore Now",
      bgClass: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600",
    },
    {
      heading: "Advanced Filtration System",
      img: "/home-products/water-purifier.png",
      name: "Livpure",
      offers: "Exclusive 20% off",
      button: "Buy Now",
      bgClass: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
    },
    {
      heading: "Advanced Filtration System",
      img: "/home-products/water-purifier.png",
      name: "Livpure",
      offers: "Exclusive 20% off",
      button: "Buy Now",
      bgClass: "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300",
    },
    {
      heading: "Advanced Filtration System",
      img: "/home-products/water-purifier.png",
      name: "Livpure",
      offers: "Exclusive 20% off",
      button: "Buy Now",
      bgClass: "bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900",
    },
    {
      heading: "Advanced Filtration System",
      img: "/home-products/water-purifier.png",
      name: "Livpure",
      offers: "Exclusive 20% off",
      button: "Buy Now",
      bgClass: "bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700",
    },
  ];

  return (
    <div className="px-4 md:px-8 bg-white py-4">
      <h1 className="text-center font-bold text-2xl md:text-3xl py-3 md:py-4 pb-4">
        Explore Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`${product.bgClass} p-4 rounded-lg shadow-md flex flex-col`}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              {product.heading}
            </h2>
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-80 object-contain mb-3"
            />
            <p className="text-lg font-medium">{product.name}</p>
            <p className="text-sm text-gray-700 mb-4">{product.offers}</p>
            <button className="self-start bg-white text-black px-4 py-2 rounded hover:bg-gray-100">
              {product.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
