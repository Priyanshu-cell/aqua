import itemData from "../../data/water-softener.json";
import Products from "./ProductData.jsx";
import WaterHeader from "./WaterHeader";

const WaterSoftener = () => {
  const headerData = {
    title: "Water Softener",
    img: "/home-products/water-purifier.png",
    firstDetails: "Suitable for Municipal, Borewell & ",
    secondDetails: "Tanker water.",
    bold: "TDS from 0—2000 mg/l",
  };

  const title = "Water Softener";
  return (
    <>
      <WaterHeader {...headerData} />
      <Products itemData={itemData} title={title} />
    </>
  );
};

export default WaterSoftener;
