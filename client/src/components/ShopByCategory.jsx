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
        
        </div>
       
            </section>
            </div>
        );
}

export default ShopByCategory;