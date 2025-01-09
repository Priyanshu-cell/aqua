import itemData from "../../data/industrial-ro.json";
import Products from "./products";
import WaterHeader from "./WaterHeader";

const IndustrialRo = () => {
  const headerData = {
    title: "Industrial RO",
    img: "/home-products/water-purifier.png",
    firstDetails: "Suitable for Municipal, Borewell & ",
    secondDetails: "Tanker water.",
    bold: "TDS from 0—2000 mg/l",
  };

  const title = "Industrial RO";
  return (
    <>
      <WaterHeader {...headerData} />
      <Products itemData={itemData} title={title} />
    </>
  );
};

export default IndustrialRo;
