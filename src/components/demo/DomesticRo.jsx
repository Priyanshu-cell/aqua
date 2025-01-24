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
import WaterHeaderNext from "./WaterHeaderNext";

const DomesticRo = () => {
  const headerData = {
    title: "Domestic RO",
    img: "/domestic-ro/img-9.jpg",
    firstDetails: "Suitable for homes, offices,",
    secondDetails: " and small businesses.",
    bold: "Capacity from 5 liters to 20 liters",
  };

  const headerData2 = {
    title: "Domestic RO",
    img: "domestic-ro.jpg",
    firstDetails: "A water softener removes minerals, like calcium and magnesium, to prevent scale buildup,",
    secondDetails: "improve appliance efficiency, and enhance soap lathering",
    bold: "Save money on cleaning products",
  };

  return (
    <>
      {/* <WaterHeader {...headerData} /> */}

      <WaterHeaderNext {...headerData2}/>

      <DomesticRoOne productDataOne={productDataOne} />
      <DomesticRoOne productDataOne={productDataTwo} />

      <DomesticRoThree productData={productDataThree} />
      <DomesticRoFour productDataFour={productDataFour} />

      <DomesticRoFive productDataFive={productDataFive} />
      <DomesticRoFive productDataFive={productDataSix} />

      <DomesticRoSeven productDataSeven={productDataSeven} />
      <DomesticRoSeven productDataSeven={productDataEight} />
      <DomesticRoSeven productDataSeven={productDataNine} />
    </>
  );
};

export default DomesticRo;
