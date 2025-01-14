import { HomeSlider } from "./HomeSlider";
import img1 from "/images/1.png";
import img2 from "/images/2.png";
import img3 from "/images/3.png";
// import img4 from "/images/img-4.jpg";
// import img5 from "/images/img-5.jpg";
// import img6 from "/images/img-6.jpg";
const IMAGES = [img1, img3,img2];
export const SectionHero = () => {
  return (
    <>
    <HomeSlider imageUrls={IMAGES} />
    </>
  );
};
