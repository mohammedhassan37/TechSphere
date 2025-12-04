import '../Styles/featured_product.css'

import phone from "../assets/phone.webp";
import tablet from "../assets/tablet.webp";
import headphone from "../assets/headphone.webp";
import tv from "../assets/tv.webp";

function featured_product() {
    return (
        <>
            <h1>Featured Products</h1>
            <br/>

            <div class="product_container">

                <div class="product_cards">
                    <img src={phone} alt="Phone" />
                    <h3>IPhone 17 Pro Max - 512GB</h3>
                    <p>£1,399.00</p>
                    <p>6.9" Display | A19 Pro Chip</p>
                </div>

                <div class="product_cards">
                    <img src={tablet} alt="Tablet" />
                    <h3>Samsung Galaxy Tab S11 Ultra - 256GB</h3>
                    <p>£999.99</p>
                    <p>14.6" display - 256GB | 12GB </p>
                </div>

                <div class="product_cards">
                    <img src={headphone} alt="Headphone" />
                    <h3>JBL Tune 720BT Over-Ear Wireless Headphones</h3>
                    <p>£38.99</p>
                    <p>Bluetooth | 44H Playtime | Pure Bass Sound</p>
                </div>

                <div class="product_cards">
                    <img src={tv} alt="Tv & Home" />
                    <h3>Samsung QLED QEF1 4K Vision AI Smart TV (2025)</h3>
                    <p>£349.99</p>
                    <p> 50" | Q4 AI Processor | Real Quantum Dot Display </p>
                </div>

            </div>

            <br/>
        </>
    );
}

export default featured_product;
