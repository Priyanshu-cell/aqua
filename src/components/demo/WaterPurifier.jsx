import WaterHeader from "./WaterHeader.jsx";
import productData from "../../data/water/first.json";
import productDataTwo from "../../data/water/second.json";
import productDataThree from "../../data/water/third.json";
import productDataFour from "../../data/water/forth.json";
import Specification from "./Specification.jsx";
import SpecificationTwo from "./SpecificationTwo";
import SpecificationThree from "./SpecificationThree";
import SpecificationFour from "./SpecificationFour";
import SpecificationFive from "./SpecificationFive";

const WaterPurifier = () => {
  const headerData = {
    title: "Water Purifier",
    img: "/water-purifier/img-1.png",
    firstDetails: "Suitable for Home, Office & ",
    secondDetails: "Any place with Customizable Purifier.",
    bold: "Removes contaminants such as heavy metals, chlorine, and other impurities",
  };

  return (
    <>
      <WaterHeader {...headerData} />
      <Specification productData={productData} />
      <SpecificationTwo productDataTwo={productDataTwo} />
      <SpecificationThree productDataThree={productDataThree} />
      <SpecificationFour productDataFour={productDataFour} />
      <SpecificationFive />
    </>
  );
};

export default WaterPurifier;
