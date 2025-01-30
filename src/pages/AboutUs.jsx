import AboutClient from "@/components/demo/AboutClient";
import AboutServices from "@/components/demo/AboutServices";
import AboutTopBanner from "@/components/demo/AboutTopBanner.jsx";
import AboutWhyUs from "@/components/demo/AboutWhyUs";
import FandQ from "@/components/demo/FandQ";
import OurTeam from "@/components/demo/OurTeam";
const AboutUs = () => {
  return (
    <>
      <AboutTopBanner />
      <AboutWhyUs />
      <OurTeam />
      <AboutClient /> 
      <AboutServices />
      <FandQ />
    </>
  );
};

export default AboutUs;