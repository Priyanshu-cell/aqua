import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import itemData from "../data/services.json";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white py-6 md:py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gold-400 to-yellow-500 text-transparent bg-clip-text">
          Our Premium Services
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-2">
          Explore our range of top-notch services tailored just for you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {itemData.map(({ id, title, image, button, url }, index) => (
          <div key={id} className="transform transition-transform hover:scale-105">
            <Card className="cursor-pointer bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center font-semibold text-4xl text-gradient bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {title}
              </CardHeader>
              <CardContent className="flex justify-center items-center py-6">
                <img
                  src={image}
                  alt={title}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </CardContent>
              <CardFooter className="text-center justify-center text-yellow-400 font-medium hover:text-yellow-500">
                <Link to={`${url}`}>{button}</Link>  {/* Link component for navigation */}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Services;
