import { HomeSlider } from "./HomeSlider";
import img1 from "/images/img-1.jpg";
import img2 from "/images/img-2.jpg";
import img3 from "/images/img-3.jpg";
// import img4 from "/images/img-4.jpg";
// import img5 from "/images/img-5.jpg";
// import img6 from "/images/img-6.jpg";
const IMAGES = [img2, img3,img1];
export const SectionHero = () => {
  return (
    <>
    <HomeSlider imageUrls={IMAGES} />
    </>
  );
};
