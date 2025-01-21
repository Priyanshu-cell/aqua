import WaterHeader from "./WaterHeader";
import WaterSoftenerContent from "./WaterSoftenerContent";

const WaterSoftener = () => {
  const headerData = {
    title: "Water Softener",
    img: "water-softener.jpg",
    firstDetails: "A water softener removes minerals, like calcium and magnesium, to prevent scale buildup,",
    secondDetails: "improve appliance efficiency, and enhance soap lathering",
    bold: "Save money on cleaning products",
  };

  return (
    <>
      <WaterHeader {...headerData} />
      <WaterSoftenerContent />
    </>
  );
};

export default WaterSoftener;