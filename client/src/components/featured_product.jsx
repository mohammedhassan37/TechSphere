import '../Styles/featured_product.css'

import phone from "../assets/phone.webp";
import tablet from "../assets/tablet.webp";
import headphone from "../assets/headphone.webp";
import tv from "../assets/tv.webp";
import smartwatch from "../assets/smartwatch.webp";

function featured_product() {
    return (
        <>
            <h1>Featured Products</h1>
            <br/>

            <div class="product_container">

                <div class="product_cards">
                    <img src={phone} alt="Phone" />
                    <h3>IPhone 17 Pro max</h3>
                    <p>$1199.00</p>
                </div>

                <div class="product_cards">
                    <img src={tablet} alt="Tablet" />
                    <h3>Samsung Galaxy Tab S11 Ultra</h3>
                    <p>$999.99</p>
                </div>

                <div class="product_cards">
                    <img src={headphone} alt="Headphone" />
                    <h3>JBL Tune 720BT Over-Ear Wireless Headphones</h3>
                    <p>$39.99</p>
                </div>

                <div class="product_cards">
                    <img src={tv} alt="Tv & Home" />
                    <h3>Samsung 50 Inch QLED TV</h3>
                    <p>$399.99</p>
                </div>

                <div class="product_cards">
                    <img src={smartwatch} alt="Smartwatch" />
                    <h3>HUAWEI Watch Fit 3 Smart Watch</h3>
                    <p>$139.99</p>
                </div>

            </div>

            <br/>
        </>
    );
}

export default featured_product;
