import '../Styles/ShopByCategory.css'
import { Link } from 'react-router-dom';
import Phone from '../assets/phone.webp';
import Headphones from "../assets/headphone.webp";
import Smartwatch from "../assets/smartwatch.webp";
import Tablet from "../assets/tablet.webp";
import TV from "../assets/tv.webp";



function ShopByCategory() {
  return (
    <div className="main-shop-container">
    <section className="shop-category-section">
      <h1 className="shop-category-title">Shop by Category</h1>

      <div className="shop-category-container">
        <Link to="/phone" className="category-card">
          <img src={Phone} alt="Phones" />
          <h3>Phones</h3>
          <p>Latest smartphones and accessories</p>
        </Link>
        <Link to="/Headphones" className="category-card">
          <img src={Headphones} alt="Headphones" />
          <h3>Headphones</h3>
            <p>High-quality audio devices</p>
        </Link>
        <Link to="/smartwatch" className="category-card">
          <img src={Smartwatch} alt="Smartwatches" />
          <h3>Smartwatches</h3>
            <p>Stylish and functional smartwatches</p>
        </Link>
        <Link to="/tablets" className="category-card">
          <img src={Tablet} alt="Tablets" />
            <h3>Tablets</h3>
            <p>Portable and powerful tablets</p>
        </Link>
        <Link to="/tv" className="category-card">
          <img src={TV} alt="TVs" />
            <h3>TVs</h3>
            <p>Immersive entertainment experience</p>
        </Link>
        </div>
       
            </section>
            </div>
        );
}

export default ShopByCategory;