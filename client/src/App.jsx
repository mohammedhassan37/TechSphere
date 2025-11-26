import { BrowserRouter, Routes, Route } from "react-router-dom";


import About from './Pages/About.jsx'
import Headphones from './Pages/Headphones.jsx';
import Phone from "./Pages/Phone.jsx";
import Smartwatch from './Pages/Smartwatch.jsx';
import Tablets from './Pages/Tablets.jsx';
import TV from './Pages/TV.jsx';
import Registration from "./Pages/Registration.jsx";

import Carousel from './Components/Carousel.jsx'
import Header from './Components/Header.jsx'

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
        <Route path="/Registration" element={<Registration />} />
        {/* Navigational Links */}

        {/* Home page */}
        <Route path="/" element={<Carousel />} />
        {/* Home page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
