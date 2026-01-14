import "./App.css";
import "./fonts/remixicon.css";
import "./gsap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./custom.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  return (
    <>
      <div className="App full-bg-black-color">
        <Router>
          <header className="App-header">
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <footer className="App-footer">
<Footer/>

          </footer>
        </Router>
      </div>
    </>
  );
}

export default App;
