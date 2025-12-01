


import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './Pages/About.jsx';
import Headphones from './Pages/Headphones.jsx';
import Phone from "./Pages/Phone.jsx";
import Smartwatch from './Pages/Smartwatch.jsx';
import Tablets from './Pages/Tablets.jsx';
import TV from './Pages/TV.jsx';
import Registration from "./Pages/Registration.jsx";
import Contact from './Pages/Contact.jsx';

import Carousel from './Components/Carousel.jsx';
import Header from './Components/Header.jsx';
import FP from './Components/featured_product.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Main/Home */}
        <Route 
          path="/" 
          element={
            <>
              <Carousel />
              <FP />
            </>
          }
        />

        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/smartwatch" element={<Smartwatch />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
