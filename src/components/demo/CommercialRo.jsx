import WaterHeader from "./WaterHeader";
import firstData from "../../data/commercial/commercial1.json";
import secondData from "../../data/commercial/commercial2.json";
import thirdData from "../../data/commercial/commercial3.json";
import forthData from "../../data/commercial/commercial4.json";
import fifthData from "../../data/commercial/commercial5.json";
import CommercialRoOne from "./CommercialRoOne";

const CommercialRo = () => {
  const headerData = {
    title: "Commercial RO",
    img: "/home-products/water-purifier.png",
    firstDetails: "Suitable for Municipal, Borewell & ",
    secondDetails: "Tanker water.",
    bold: "capacity from 25 liters to 100 liters / hour",
  };

  return (
    <>
      <WaterHeader {...headerData} />
      <CommercialRoOne firstData = {firstData}/>
      <CommercialRoOne firstData = {secondData}/>
      <CommercialRoOne firstData = {thirdData}/>
      <CommercialRoOne firstData = {forthData}/>
      <CommercialRoOne firstData = {fifthData}/>
    </>
  );
};

export default CommercialRo;