import itemData from "../../data/water-purifier.json";
import Item from "./Item.jsx";
import Products from "./ProductData.jsx";
import WaterHeader from "./WaterHeader.jsx";
import productData from "../../data/water/first.json"
import productDataTwo from "../../data/water/second.json" 
import productDataThree from "../../data/water/third.json" 
import productDataFour from "../../data/water/forth.json" 
import Specification from "./Specification.jsx";
import SpecificationTwo from "./SpecificationTwo";
import SpecificationThree from "./SpecificationThree";
import SpecificationFour from "./SpecificationFour";
import SpecificationFive from "./SpecificationFive";

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
      {/* <Products itemData={itemData} title={title} /> */}

      <Specification productData = {productData} />
      <SpecificationTwo productDataTwo = {productDataTwo}/>
      <SpecificationThree productDataThree= {productDataThree} />
      <SpecificationFour productDataFour={productDataFour} />
      <SpecificationFive /> 

      

      {/* <Item /> */}
    </>
  );
};

export default WaterPurifier;
