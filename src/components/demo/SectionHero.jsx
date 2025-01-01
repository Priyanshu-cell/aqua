import { Element } from "react-scroll";
import { HomeSlider } from "./HomeSlider";
import img1 from "/images/img-1.jpeg";
import img2 from "/images/img-2.jpeg";
import img3 from "/images/img-3.jpeg";
import img4 from "/images/img-4.jpeg";
// import img4 from "/images/img-4.jpg";
// import img5 from "/images/img-5.jpg";
// import img6 from "/images/img-6.jpg";
const IMAGES = [img2, img4, img3,img1];
export const SectionHero = () => {
  return (
    <>
    <Element name="home">
    <HomeSlider imageUrls={IMAGES} />
    </Element>
      
    </>
  );
};
