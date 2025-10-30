import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";


import About from './Pages/About.jsx'
import Headphones from './Pages/Headphones.jsx';
import Phone from "./Pages/Phone.jsx";
import Smartwatch from './Pages/Smartwatch.jsx';
import Tablets from './Pages/Tablets.jsx';
import TV from './Pages/TV.jsx'
import Registeration from "./Pages/Registeration.jsx";


function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Headphones" element={<Headphones />} />
        <Route path="/Phone" element={<Phone />} />
        <Route path="/Smartwatch" element={<Smartwatch />} />
        <Route path="/Tablets" element={<Tablets />} />
        <Route path="/TV" element={<TV />} />
        <Route path="/Registeration" element={<Registeration/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
