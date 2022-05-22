import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Discover from "./components/pages/Discover";
import FAQs from "./components/pages/FAQs";
import HelpCenter from "./components/pages/HelpCenter";
import Donate from "./components/pages/Donate";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="helpcenter" element={<HelpCenter />} />
        <Route path="donate" element={<Donate />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
