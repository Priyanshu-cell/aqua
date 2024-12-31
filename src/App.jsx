import "./App.css";
import { Footer } from "./components/demo/Footer.jsx";
import Header from "./components/demo/Header.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/demo/Banner";
import ConsultancyDetails from "./components/demo/ConsultancyDetails";
import Form from "./components/demo/Form";
import { SectionHero } from "./components/demo/SectionHero";
import JoinThai from "./components/demo/JoinThai";
import Services from "./components/demo/Services";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SectionHero />
        <JoinThai />
        <Services />
        <Banner />
        <ConsultancyDetails />
        <Form />
        <Footer />
      </Router>
    </>
  );
}

export default App;
