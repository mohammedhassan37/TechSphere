import '../Styles/featured_product.css'
import { Link } from 'react-router-dom';
import phone from "../assets/phone.webp";
import tablet from "../assets/tablet.webp";
import headphone from "../assets/headphone.webp";
import tv from "../assets/tv.webp";

function featured_product() {
    return (
        <>
            <h1 id="featured_product">Featured Products</h1>
            <br/>

            <div class="product_container">

                <div class="product_cards">
                    <img src={phone} alt="Phone" />
                    <Link to="/phone" className="blue-name">
                    <h3>IPhone 17 Pro Max - 512GB</h3>
                    </Link>
                    <p>£1,399.00</p>
                    <p>6.9" Display | A19 Pro Chip</p>
                </div>

                <div class="product_cards">
                    <img src={tablet} alt="Tablet" />
                    <Link to="/Tablets" className="blue-name">
                    <h3>Samsung Galaxy Tab S11 Ultra - 256GB</h3>
                    </Link>
                    <p>£999.99</p>
                    <p>14.6" display - 256GB | 12GB </p>
                </div>

                <div class="product_cards">
                    <img src={headphone} alt="Headphone" />
                    <Link to="/Headphones" className="blue-name">
                    <h3>JBL Tune 720BT Over-Ear Wireless Headphones</h3>
                    </Link>
                    <p>£38.99</p>
                    <p>Bluetooth | 44H Playtime | Pure Bass Sound</p>
                </div>

                <div class="product_cards">
                    <img src={tv} alt="Tv & Home" />
                    <Link to="/TV" className="blue-name">
                    <h3>Samsung QLED QEF1 4K Vision AI Smart TV (2025)</h3>
                    </Link>
                    <p>£349.99</p>
                    <p> 50" | Q4 AI Processor | Real Quantum Dot Display </p>
                </div>

            </div>

            <br/>
        </>
    );
}

export default featured_product;
