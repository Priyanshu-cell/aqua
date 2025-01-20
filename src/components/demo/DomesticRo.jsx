import DomesticRoOne from "./DomesticRoOne";
import WaterHeader from "./WaterHeader";

import productDataOne from "../../data/domestic-ro/first.json";
import productDataTwo from "../../data/domestic-ro/second.json";
import productDataThree from "../../data/domestic-ro/third.json";
import productDataFour from "../../data/domestic-ro/forth.json";
import productDataFive from "../../data/domestic-ro/five.json";
import productDataSix from "../../data/domestic-ro/six.json";
import productDataSeven from "../../data/domestic-ro/seven.json";
import productDataEight from "../../data/domestic-ro/eight.json";
import productDataNine from "../../data/domestic-ro/nine.json";

import DomesticRoThree from "./DomesticRoThree";
import DomesticRoFour from "./DomesticRoFour";
import DomesticRoFive from "./DomesticRoFive";
import DomesticRoSeven from "./DomesticRoSeven";

const DomesticRo = () => {
  const headerData = {
    title: "Domestic RO",
    img: "/home-products/water-purifier.png",
    firstDetails: "Suitable for Municipal, Borewell & ",
    secondDetails: "Tanker water.",
    bold: "TDS from 0—2000 mg/l",
  };

  return (
    <>
      <WaterHeader {...headerData} />
      <DomesticRoOne productDataOne={productDataOne} />
      <DomesticRoOne productDataOne={productDataTwo} />

      <DomesticRoThree productData={productDataThree} />
      <DomesticRoFour productDataFour = {productDataFour}/>

      <DomesticRoFive productDataFive= {productDataFive}/>
      <DomesticRoFive productDataFive= {productDataSix}/>

      <DomesticRoSeven productDataSeven = {productDataSeven}/>
      <DomesticRoSeven productDataSeven = {productDataEight}/>
      <DomesticRoSeven productDataSeven = {productDataNine}/>
      
    </>
  );
};

export default DomesticRo;