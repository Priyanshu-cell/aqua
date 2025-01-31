import React from "react";

const RoServiceBrands = () => {
  const handleCall = () => {
    window.location.href = "tel:+917579008065";
  };
  const brands = [
    {
      name: "Kent RO Service",
      description:
        "We provide Kent RO repair, filter change, and AMC services for models like:",
      models: [
        "Kent Grand",
        "Kent Pearl",
        "Kent Supreme",
        "Kent Prime Plus",
        "Kent Elite",
      ],
    },
    {
      name: "Aquaguard RO Service",
      description: "We offer Aquaguard repair and filter replacement for:",
      models: [
        "Aquaguard Geneus",
        "Aquaguard Magna",
        "Aquaguard Enhance",
        "Aquaguard Reviva",
      ],
    },
    {
      name: "Aquafresh RO Service",
      description: "We service Aquafresh water purifiers, including:",
      models: [
        "Aquafresh Dolphin",
        "Aquafresh Nexus",
        "Aquafresh Swift",
        "Aquafresh Swift UV",
      ],
    },
    {
      name: "Livpure RO Service",
      description:
        "We repair and maintain Livpure RO water purifiers, including:",
      models: [
        "Livpure Glo",
        "Livpure Pep Pro Plus",
        "Livpure Envy",
        "Livpure Touch 2000",
      ],
    },
    {
      name: "Blue Star RO Service",
      description:
        "Our experts handle Blue Star RO filter replacement & repair for:",
      models: [
        "Blue Star Stella",
        "Blue Star Prisma",
        "Blue Star Imperia",
        "Blue Star Aristo",
      ],
    },
    {
      name: "Havells RO Service",
      description: "We offer Havells RO AMC and filter replacement for:",
      models: [
        "Havells Max",
        "Havells Digitouch",
        "Havells Fab",
        "Havells UTC RO",
      ],
    },
    {
      name: "HUL Pureit RO Service",
      description: "We provide Pureit RO maintenance & filter change for:",
      models: [
        "Pureit Ultima",
        "Pureit Classic",
        "Pureit Copper+",
        "Pureit Marvella",
      ],
    },
    {
      name: "AO Smith RO Service",
      description: "We offer AO Smith RO repair and AMC for:",
      models: [
        "AO Smith Z8",
        "AO Smith Z9",
        "AO Smith X8",
        "AO Smith Intelli UV+",
      ],
    },
    {
      name: "Eureka Forbes RO Service",
      description: "We provide Eureka Forbes repair & spare parts for:",
      models: ["Aquaguard Aura", "Aquaguard Blaze", "Dr. Aquaguard Nrich"],
    },
    {
      name: "LG RO Service",
      description: "We handle LG RO filter change & repair, including:",
      models: ["LG WW182EP", "LG WW151NP", "LG Puricare RO"],
    },
    {
      name: "Tata Swach RO Service",
      description: "We provide Tata Swach maintenance & AMC for:",
      models: [
        "Tata Swach Ultima Silver",
        "Tata Swach Nova",
        "Tata Swach Cristella",
      ],
    },
    {
      name: "Nasaka RO Service",
      description: "We service Nasaka RO water purifiers, including:",
      models: ["Nasaka Tulip", "Nasaka Max Sure", "Nasaka Cosmos"],
    },
    {
      name: "Panasonic RO Service",
      description: "We provide Panasonic RO installation & servicing for:",
      models: ["Panasonic TK-CS43", "Panasonic TK-CS80"],
    },
    {
      name: "Whirlpool RO Service",
      description: "Our team repairs Whirlpool RO purifiers, including:",
      models: [
        "Whirlpool Minerala Platinum",
        "Whirlpool Purasense",
        "Whirlpool Destroyer",
      ],
    },
    {
      name: "Voltas RO Service",
      description: "We offer Voltas RO repair & installation for:",
      models: ["Voltas Pure", "Voltas Grand", "Voltas Maximus"],
    },
    {
      name: "Sunpure RO Service",
      description: "We provide Sunpure water purifier repair and AMC.",
      models: [],
    },
    {
      name: "Service for Local & Non-Branded RO Systems",
      description:
        "We also repair and maintain non-branded RO water purifiers, including:",
      models: [
        "Customized RO systems",
        "Wall-mounted & Under-sink RO",
        "Commercial & Industrial RO plants",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300 shadow-xl space-y-8 w-full p-6 md:px-16 lg:px-32 mx-auto rounded-lg">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 hover:text-indigo-600 transition duration-300 ease-in-out">
        RO Service for All Major Brands
      </h2>

      {/* Brand List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-indigo-600">{brand.name}</h3>
            <p className="text-gray-700 mt-2">{brand.description}</p>
            {brand.models.length > 0 && (
              <ul className="list-disc list-inside mt-3 text-gray-800">
                {brand.models.map((model, i) => (
                  <li key={i}>{model}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {/* Call Now & Website Link */}
      <div className="text-center mt-8">
        <button
          onClick={() => (window.location.href = `tel:${+917579008065}`)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg text-lg transition duration-300 shadow-lg"
        >
          📞 Call Now to Book RO Service!
        </button>
        <p className="mt-4 text-lg font-semibold text-red-950">
          Visit:{" "}
          <a
            href="https://www.rohub.in"
            className="underline text-blue-800 hover:text-blue-600 transition duration-300"
          >
            www.rohub.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RoServiceBrands;
