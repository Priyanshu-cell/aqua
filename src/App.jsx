import "./App.css";
import { Footer } from "./components/demo/Footer.jsx";
import Header from "./components/demo/Header.jsx";
import "./index.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./components/demo/NotFound";
import Home from "./pages/Home";
import ScrollToTop from "./components/demo/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/about" element={<><Header /><AboutUs /><Footer /></>} />
        <Route path="/contact" element={<><Header /><ContactUs /><Footer /></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
