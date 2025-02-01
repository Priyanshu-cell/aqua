import { useInView } from "react-intersection-observer";

const AboutWhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-gray-50 py-10 md:pb-12 md:pt-2 px-6 md:px-16 lg:px-20">
      <div
        ref={ref}
        className={`max-w-screen-xl md:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Text Section */}
        <div className="text-gray-800 md:pl-16 pt-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0f1222] text-center">
          Why Choose Shreeansh Aqua Solutions?
          </h2>
          
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
            {[
              "15+ Years of Excellence: Our team consists of trained and certified service engineers dedicated to providing 100% satisfactory services.",
              "Affordable Services: We offer budget-friendly pricing for all our services without compromising on quality.",
              "1500+ Satisfied Customers: Trusted by homes, offices, industries, government sectors, hospitals, cafes, hostels, and schools.",
              "Wide Range of Complete Water Solutions: From RO installation, repair, maintenance, and AMC services, we cover it all under one roof.",
              "We ensure quick response and doorstep service to keep your purifier running smoothly.",
              "Customer Satisfaction: Your satisfaction is our top priority. We focus on long-term relationships with our clients.",
              "Top Brands & Advanced Technology: We deal in leading brands of reverse osmosis systems, ensuring pure, safe, and mineral-rich water.",
              "End-to-End Services:  We offer installation, repair, maintenance, and AMC services for RO water purifiers and water softeners."
            ].map((item, index) => (
              <li key={index} className="animate-fade-in-up text-justify">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/aboutus/drink-healthy-water.png"
            alt="Drink Healthy Water"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutWhyUs;
