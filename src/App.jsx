import "./App.css";
import { Footer } from "./components/demo/Footer.jsx";
import Header from "./components/demo/Header.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/demo/Banner";
import ConsultancyDetails from "./components/demo/ConsultancyDetails";
import Form from "./components/demo/Form";
import { SectionHero } from "./components/demo/SectionHero";
import JoinThai from "./components/demo/JoinThai";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SectionHero />
        <JoinThai />
        <Home />
        <Banner />
        <ConsultancyDetails />
        <Form />
        <Footer />
      </Router>
    </>
  );
}

export default App;
