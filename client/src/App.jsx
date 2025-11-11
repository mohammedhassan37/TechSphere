import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About.jsx'
import Headphones from './Pages/Headphones.jsx';
import Phone from "./Pages/Phone.jsx";
import Smartwatch from './Pages/Smartwatch.jsx';
import Tablets from './Pages/Tablets.jsx';
import TV from './Pages/TV.jsx'

import Carousel from "./Components/Carousel.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        {/* Navigational Links */}
        <Route path="/About" element={<About />} />
        <Route path="/Headphones" element={<Headphones />} />
        <Route path="/Phone" element={<Phone />} />
        <Route path="/Smartwatch" element={<Smartwatch />} />
        <Route path="/Tablets" element={<Tablets />} />
        <Route path="/TV" element={<TV />} />
        {/* Navigational Links */}

        {/* Home page */}
        <Route path="/" element={<Carousel />} />
        {/* Home page */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
