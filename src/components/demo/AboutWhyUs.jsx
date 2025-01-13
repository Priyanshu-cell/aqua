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
        <div className="text-gray-800 md:pl-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1B1F3B] text-center font-mono">
            Why Us?
          </h2>
          <p className= " text-base md:text-lg leading-relaxed mb-6 font-sans text-justify">
            We have on the record a number of positive attributes that have made
            us a remarkable industry earning reputation. Very soon, we hope our
            dreams of attaining a global position become true. We are true to
            our conscience and focus all our attention on taking our company to
            greater heights. Our positive attributes include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
            {[
              "A quality-conscious mind that has developed quintessence products",
              "An innovative and technical background",
              "An experienced and talented workforce",
              "A guiding factor with a developmental attitude",
              "Prompt and quick services",
              "Transparency in the system",
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
