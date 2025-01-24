import WaterHeader from "./WaterHeader";
import firstData from "../../data/commercial/commercial1.json";
import secondData from "../../data/commercial/commercial2.json";
import thirdData from "../../data/commercial/commercial3.json";
import forthData from "../../data/commercial/commercial4.json";
import fifthData from "../../data/commercial/commercial5.json";
import CommercialRoOne from "./CommercialRoOne";
import WaterHeaderNext from "./WaterHeaderNext";

const CommercialRo = () => {
  const headerData = {
    title: "Commercial RO",
    img: "/commercial-ro/img-4.png",
    firstDetails: "Ideal for small to medium-sized businesses, restaurants",
    secondDetails: "offices, and commercial establishments.",
    bold: "Capacity from 25 liters to 100 liters / hour",
  };
  const headerData2 = {
    title: "Commercial RO",
    img: "commercial-ro.jpg",
  };

  return (
    <>
      {/* <WaterHeader {...headerData} /> */}
      <WaterHeaderNext {...headerData2}/>
      <CommercialRoOne firstData = {firstData}/>
      <CommercialRoOne firstData = {secondData}/>
      <CommercialRoOne firstData = {thirdData}/>
      <CommercialRoOne firstData = {forthData}/>
      <CommercialRoOne firstData = {fifthData}/>
    </>
  );
};

export default CommercialRo;