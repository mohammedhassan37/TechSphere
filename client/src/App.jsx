import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './Pages/About.jsx';
import Headphones from './Pages/Headphones.jsx';
import Phone from "./Pages/Phone.jsx";
import Smartwatch from './Pages/Smartwatch.jsx';
import Tablets from './Pages/Tablets.jsx';
import TV from './Pages/TV.jsx';
import Registration from "./Pages/Registration.jsx";
import Contact from './Pages/Contact.jsx';
import Basket from './Pages/Basket.jsx'

import Carousel from './Components/Carousel.jsx';
import Header from './Components/Header.jsx';
import FP from './components/featured_product.jsx';

import ProductDetails from "./Pages/ProductPage.jsx";


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
         <Route path="/basket" element={<Basket />} />
        <Route path="/Registration" element={<Registration />} />

        <Route path="/product/:id" element={<ProductDetails />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
