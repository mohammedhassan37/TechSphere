import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About.jsx";
import Headphones from "./Pages/Headphones.jsx";
import Phone from "./Pages/Phone.jsx";
import Smartwatch from "./Pages/Smartwatch.jsx";
import Tablets from "./Pages/Tablets.jsx";
import TV from "./Pages/TV.jsx";
import Registration from "./Pages/Registration.jsx";
import Contact from "./Pages/Contact.jsx";
import Basket from "./Pages/Basket.jsx";
import Checkout from "./Pages/Checkout.jsx";
import WhyChooseUs from "./Components/WhyChooseUs.jsx";
import Footer from "./Components/Footer.jsx";
import SearchPage from "./Pages/SearchPage.jsx";
import AccountDetails from "./Pages/AccountDetails.jsx";
import PreviousOrders from "./Pages/PreviousOrder.jsx";
import Carousel from "./Components/Carousel.jsx";
import Header from "./Components/Header.jsx";
import FP from "./components/featured_product.jsx";
import ProductDetails from "./Pages/ProductPage.jsx";
import Admin from "./Pages/Admin.jsx";
import AdminProducts from "./Pages/AdminProducts.jsx";
import AdminCustomers from "./Pages/AdminCustomers.jsx";
import AdminOrders from "./Pages/AdminOrders.jsx";
import ManageRevenue from "./Pages/AdminRevenue.jsx";
import ShopByCategory from "./components/ShopByCategory.jsx";
import ChatBot from "./Pages/ChatBot.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<><Carousel /><FP /><ShopByCategory /><WhyChooseUs /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/smartwatch" element={<Smartwatch />} />
            <Route path="/tablets" element={<Tablets />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/total-products" element={<AdminProducts />} />
            <Route path="/admin/pending-orders" element={<AdminOrders />} />
            <Route path="/admin/total-revenue" element={<ManageRevenue />} />
            <Route path="/admin/total-customers" element={<AdminCustomers />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/account-details" element={<AccountDetails />} />
            <Route path="/orders" element={<PreviousOrders />} />
            
          </Routes>
        </main>

        
        <Footer />
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}

export default App;