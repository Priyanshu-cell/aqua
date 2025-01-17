const AboutClient = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 md:px-10 font-sans text-center">
        {/* Section Heading */}
        <div className="text-center mb-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-mono">
            Top RO Brands We Service:
          </h2>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
          {[
            "Aquaguard",
            "Kent",
            "Pureit",
            "Livpure",
            "AO Smith",
            "Aquafresh",
            "Ion exchange",
            "Gen pure",
            "Usha Brita",
            "Kem Flow",
          ].map((logo, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg flex justify-center items-center p-4 hover:bg-gray-300 transition duration-300"
              aria-label={`Service for ${logo}`}
            >
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutClient;