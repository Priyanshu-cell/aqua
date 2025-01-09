import itemData from "../../data/commercial-ro.json";
import Products from "./products";
import WaterHeader from "./WaterHeader";

const CommercialRo = () => {
  const headerData = {
    title: "Commercial RO",
    img: "/home-products/water-purifier.png",
    firstDetails: "Suitable for Municipal, Borewell & ",
    secondDetails: "Tanker water.",
    bold: "TDS from 0—2000 mg/l",
  };

  const title = "Commercial RO";
  return (
    <>
      <WaterHeader {...headerData} />
      <Products itemData={itemData} title={title} />
    </>
  )
}

export default CommercialRo