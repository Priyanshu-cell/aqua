import AboutClient from "@/components/demo/AboutClient";
import GoogleReview from "@/components/demo/GoogleReview";
import HomeBanner from "@/components/demo/HomeBanner";
import HomeClient2 from "@/components/demo/HomeClient2";
import HomeClint from "@/components/demo/HomeClint";
import HomeFandQ from "@/components/demo/HomeFandQ";
import HomeProducts from "@/components/demo/HomeProducts";
import { SectionHero } from "@/components/demo/SectionHero.jsx";
import TopSection from "@/components/demo/TopSection.jsx";
import WhyUs from "@/components/demo/WhyUs";

const Home = () => {
  return (
    <>
      <TopSection />
      {/* <SectionHero /> */}
      <HomeBanner />
      <HomeProducts />
      <WhyUs />
      <HomeClint />
      <HomeClient2 />
      <AboutClient />
      {/* <HomeFandQ /> */}
      {/* <GoogleReview /> */}
    </>
  );
};
export default Home;