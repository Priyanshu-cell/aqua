import GoogleReview from "@/components/demo/GoogleReview";
import HomeProducts from "@/components/demo/HomeProducts";
import { SectionHero } from "@/components/demo/SectionHero.jsx";
import TopSection from "@/components/demo/TopSection.jsx";
import WhyUs from "@/components/demo/WhyUs";
import React from "react";

const Home = () => {
  return (
    <>
      <TopSection />
      <SectionHero />
      <HomeProducts />
      <WhyUs />
      <GoogleReview />
    </>
  );
};
export default Home;
