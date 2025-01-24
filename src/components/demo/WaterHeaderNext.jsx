const WaterHeaderNext = ({ title, img }) => {
  return (
    <div className="bg-slate-500 md:py-6 px-4 sm:px-8 lg:px-16 pt-3 pb-6">
      <div className="mt-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white text-center">
          {title}
        </h1>
      </div>
      <div className="mt-6 mx-auto">
        <img
          src={img}
          alt={title || "Water header image"}
          className="w-full rounded-lg shadow-lg sm:h-[50vh] md:h-[80vh] object-cover sm:object-center md:object-top lg:object-contain"
        />
      </div>
    </div>
  );
};

export default WaterHeaderNext;
