import itemData from "../../data/water-purifier.json";
import WaterHeader from "./WaterHeader.jsx";
import Products from "./Products.jsx";

const WaterPurifier = () => {
  const headerData = {
    title: "Water Purifier",
    img: "/home-products/water-purifier.png",
    firstDetails: "Suitable for Municipal, Borewell & ",
    secondDetails: "Tanker water.",
    bold: "TDS from 0—2000 mg/l",
  };

  const title = "Water Purifier";

  return (
    <>
      <WaterHeader {...headerData} />
      <Products itemData={itemData} title={title} />
    </>
  );
};

export default WaterPurifier;
