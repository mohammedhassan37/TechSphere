import '../Styles/ShopByCategory.css'
import { Link } from 'react-router-dom';

function ShopByCategory() {
  return (
    <div className="main-shop-container">
    <section className="shop-category-section">
      <h1 className="shop-category-title">Shop by Category</h1>

      <div className="shop-category-container">
        <Link to="/phone" className="category-card">
          <div className="icon-circle">📱</div>
          <h3>Phones</h3>
          <p>Latest smartphones and accessories</p>
        </Link>
        <Link to="/Headphones" className="category-card">
          <div className="icon-circle">🎧</div>
          <h3>Headphones</h3>
            <p>High-quality audio devices</p>
        </Link>
        <Link to="/smartwatch" className="category-card">
          <div className="icon-circle">⌚</div>
          <h3>Smartwatches</h3>
            <p>Stylish and functional smartwatches</p>
        </Link>
        <Link to="/tablets" className="category-card">
          <div className="icon-circle">📲</div>
            <h3>Tablets</h3>
            <p>Portable and powerful tablets</p>
        </Link>
        <Link to="/tv" className="category-card">
          <div className="icon-circle">📺</div>
            <h3>TVs</h3>
            <p>Immersive entertainment experience</p>
        </Link>
        </div>
       
            </section>
            </div>
        );
}

export default ShopByCategory;