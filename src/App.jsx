import "./App.css";
import { Footer } from "./components/demo/Footer.jsx";
import Header from "./components/demo/Header.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/demo/Banner";
import ConsultancyDetails from "./components/demo/ConsultancyDetails";
import Form from "./components/demo/Form";
import { SectionHero } from "./components/demo/SectionHero";
import Services from "./components/demo/Services";
import ThreeBanner from "./components/demo/ThreeBanner";
import GoogleReview from "./components/demo/GoogleReview";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SectionHero />
        <ThreeBanner />
        <Services />
        <Banner />
        <GoogleReview />
        {/* <ConsultancyDetails /> */}
        <Form />
        <Footer />
      </Router>
    </>
  );
}

export default App;
