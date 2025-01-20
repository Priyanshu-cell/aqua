import WaterHeader from "./WaterHeader";

import firstData from "../../data/industrial-ro/first.json";
import secondData from "../../data/industrial-ro/second.json";
import thirdData from "../../data/industrial-ro/third.json";
import forthData from "../../data/industrial-ro/forth.json";

import IndustrialRoOne from "./IndustrialRoOne";
import IndustrialRoFour from "./IndustrialRoFour";

const IndustrialRo = () => {
  const headerData = {
    title: "Industrial RO",
    img: "/industrial-ro/img-3.png",
    firstDetails: "Ideal for small to medium-sized businesses,",
    secondDetails: "offices, schools, and industries.",
    bold: "Capacity from 250 liters and above / hour",
  };

  return (
    <>
      <WaterHeader {...headerData} />

      <IndustrialRoOne firstData={firstData} />
      <IndustrialRoOne firstData={secondData} />
      <IndustrialRoOne firstData={thirdData} />
      <IndustrialRoFour forthData = {forthData}/>
    </>
  );
};

export default IndustrialRo;
