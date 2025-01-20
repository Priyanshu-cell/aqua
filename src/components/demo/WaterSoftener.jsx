import WaterHeader from "./WaterHeader";

const WaterSoftener = () => {
  const headerData = {
    title: "Water Softener",
    img: "/home-products/water-purifier.png",
    firstDetails: "Suitable for Municipal, Borewell & ",
    secondDetails: "Tanker water.",
    bold: "TDS from 0—2000 mg/l",
  };

  return (
    <>
      <WaterHeader {...headerData} />
      
    </>
  );
};

export default WaterSoftener;