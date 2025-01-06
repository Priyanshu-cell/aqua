import GoogleReview from "@/components/demo/GoogleReview";
import HomeClint from "@/components/demo/HomeClint";
import HomeProducts from "@/components/demo/HomeProducts";
import { SectionHero } from "@/components/demo/SectionHero.jsx";
import TopSection from "@/components/demo/TopSection.jsx";
import WhyUs from "@/components/demo/WhyUs";

const Home = () => {
  return (
    <>
      <TopSection />
      <SectionHero />
      <HomeProducts />
      <WhyUs />
      <HomeClint />
      <GoogleReview />
    </>
  );
};
export default Home;
