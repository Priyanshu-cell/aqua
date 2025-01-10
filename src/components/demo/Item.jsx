import itemData from "../../data/item.json";
import { Check } from "lucide-react";
import BellowComponent from "./BellowComponent";

const Item = () => {
  if (!Array.isArray(itemData) || itemData.length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl text-red-500">No items available to display</h1>
      </div>
    );
  }

  return (
    <>
    <div className="py-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      {itemData.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6"
        >
          {/* Left Column: Images */}
          <div className="flex justify-center lg:justify-center">
            <img
              src={item.images[0]}
              alt="Product"
              className="max-w-sm w-full h-auto object-cover rounded-md shadow-md border border-gray-300"
            />
          </div>

          {/* Right Column: Details */}
          <div className="bg-white shadow-md rounded-lg p-4 md:px-14 sm:p-6">
            <h2 className="text-4xl sm:text-4xl font-bold text-gray-800 mb-4">
              {item.name}
              <span className="block text-2xl sm:text-2xl text-gray-500">
                {item.purificationTechnology}
              </span>
            </h2>

            {/* Service Benefits */}
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-700 mb-2 pt-4">
                Service Benefits:
              </h3>
              <ul className="space-y-5 border-2 rounded bg-yellow-100 p-4 pb-0">
                {item.serviceBenefit?.map((benefit, index) => (
                  <div key={index}>
                    <li className="bg-yellow-100 text-gray-700 px-3 py-2 rounded-md text-lg border-b-2 border-gray-300 flex items-start gap-2">
                      <Check className="text-green-500" size={18} />
                      <span className="font-semibold">{benefit}</span>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
    <BellowComponent />
    </>
  );
};

export default Item;
