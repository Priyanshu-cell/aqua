import itemData from "../../data/domestic-ro.json";
import Products from "./ProductData";
import WaterHeader from "./WaterHeader";

const DomesticRo = () => {
  const headerData = {
    title: "Domestic RO",
    img: "/home-products/water-purifier.png",
    firstDetails: "Suitable for Municipal, Borewell & ",
    secondDetails: "Tanker water.",
    bold: "TDS from 0—2000 mg/l",
  };

  const title = "Domestic RO";
  return (
    <>
      <WaterHeader {...headerData} />
      <Products itemData={itemData} title={title} />
    </>
  );
};

export default DomesticRo;
