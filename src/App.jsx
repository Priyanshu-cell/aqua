import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "./components/demo/Footer";
import Header from "./components/demo/Header";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import NotFound from "./components/demo/NotFound";
import ScrollToTop from "./components/demo/ScrollToTop";
import WaterPurifier from "./components/demo/WaterPurifier";
import DomesticRo from "./components/demo/DomesticRo";
import CommercialRo from "./components/demo/CommercialRo";
import IndustrialRo from "./components/demo/IndustrialRo";
import WaterSoftener from "./components/demo/WaterSoftener";
import WhatsAppWidget from "./components/demo/WhatsAppWidget";
import PhoneIcon from "./components/demo/PhoneIcon";
import ServicesDetailsPage from "./pages/ServicesDetailsPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Services />} />
        <Route path="/services" element={<ServicesDetailsPage />} />

        
        <Route path="/water-purifier" element={<WaterPurifier />} />
        <Route path="/domestic-ro" element={<DomesticRo />} />
        <Route path="/commercial-ro" element={<CommercialRo />} />
        <Route path="/industrial-ro" element={<IndustrialRo />} />
        <Route path="/water-softener" element={<WaterSoftener />} />

        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppWidget />
      <PhoneIcon phoneNumber="+917579008065"/>
      <Footer />
    </Router>
  );
}

export default App;
