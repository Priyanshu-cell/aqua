import React from "react";

const HomeClint = () => {
  const clients = [
    {
      img: "//images.ctfassets.net/kc2xclar6nri/1A38eA8eNg8Yvzwmh3P9sG/99994a733427c646588432a4b1ca8e6e/Venky-s_India.jpg?fit=scale&amp;w=1320&amp;fm=webp",
      alt: "Venky-s India",
    },
    { img: "/client/uk-logo.png", alt: "UK Logo" },
    { img: "/client/vh-logo.png", alt: "VH Logo" },
    { img: "/client/sarovar.png", alt: "Sarovar" },
    { img: "/client/indra-gandhi.png", alt: "Indra Gandhi" },
    { img: "/client/icfai.png", alt: "ICFAI" },
    { img: "/client/ibdi-bank.png", alt: "IBDI Bank" },
    { img: "/client/hometelroorkhi.png", alt: "Hometel Roorkee" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
          Our some of <span className="font-bold">The Privilege Customers</span>
        </h2>
      </div>
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-5 md:px-12">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md"
          >
            <img
              src={client.img}
              alt={client.alt}
              className="max-h-16 md:max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeClint;
