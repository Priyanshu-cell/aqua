import { Element } from "react-scroll";

const JoinThai = () => {
  return (
    <Element name="services">
      <div className="bg-[#1B1F3B] text-white py-10 px-10 md:px-40">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          About Us
        </h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-xl leading-relaxed mb-10 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium a voluptatibus obcaecati consequatur minus alias voluptatem exercitationem similique ipsa unde enim recusandae ullam, dignissimos quod ratione nesciunt architecto! Corrupti, aperiam.
          </p>

          <h2 className="text-3xl font-semibold mb-6 text-center">Services</h2>
        </div>
        {/* Modified image container for responsive design */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <img
            src="/new/pic-1.jpg"
            alt="Service 1"
            className="w-full md:w-1/3 h-auto rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:border-4 hover:border-[#D4AF37]"
          />
          <img
            src="/new/pic-2.png"
            alt="Service 2"
            className="w-full md:w-1/3 h-auto rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:border-4 hover:border-[#D4AF37]"
          />
          <img
            src="/new/pic-3.png"
            alt="Service 3"
            className="w-full md:w-1/3 h-auto rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:border-4 hover:border-[#D4AF37]"
          />
        </div>
      </div>
    </Element>
  );
};

export default JoinThai;
