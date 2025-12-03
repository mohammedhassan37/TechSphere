import { Link } from "react-router-dom";
import tablet_1 from "../assets/tablet.webp"
import honour from "../assets/tablet.webp"
import lenevo from "../assets/tablet.webp"
import tablet_2 from "../assets/tablet_A9.webp"
import ipad_1 from "../assets/tablet.webp"
import ipad_2 from "../assets/tablet.webp"
import amazon_fire1 from "../assets/tablet.webp"
import amazon_fire2 from "../assets/tablet.webp"
import "../Styles/Tablets.css";

function Tablets(){
    return(
        <>
            
<div className="product_container">


    <div className="product_cards">
        <img src={tablet_1} alt="Product 1"/>
        <h3>Samsung Galaxy Tab S11 Ultra 14.6in 256GB Wi-Fi Tablet</h3>
        <p>£999.00</p>

        <Link href="#" className="add-btn"
           data-name="Samsung Galaxy Tab S11 Ultra 14.6in 256GB Wi-Fi Tablet"
           data-price="999.00"
           data-image={tablet_1}>
           Add to Basket
        </Link>
    </div>

    <div className="product_cards">
        <img src={honour} alt="Product 2"/>
        <h3>HONOR Pad X8a 11 Inch 128GB Wi-Fi Tablet</h3>
        <p>$109.99</p>

        <Link href="#" className="add-btn"
           data-name="HONOR Pad X8a 11 Inch 128GB Wi-Fi Tablet"
           data-price="109.00"
           data-image={honour}>
           Add to Basket
        </Link>

        
    </div>


    <div className="product_cards">
        <img src={lenevo} alt="Product 3"/>
        <h3>Lenovo Idea Tab 11 Inch 128GB Wi-Fi Tablet</h3>
        <p>$149.99</p>

        <a href="#" className="add-btn"
           data-name="Lenovo Idea Tab 11 Inch 128GB Wi-Fi Tablet"
           data-price="149.99"
           data-image={lenevo}>
           Add to Basket
        </a>
    </div>

    
    <div className="product_cards">
        <img src={tablet_2} alt="Product 4"/>
        <h3>Samsung Galaxy Tab A9+ 11in 64GB Wi-Fi Tablet</h3>
        <p>$209.99</p>

        <a href="#" className="add-btn"
           data-name="Samsung Galaxy Tab A9+ 11in 64GB Wi-Fi Tablet"
           data-price="209.99"
           data-image={tablet_2}>
           Add to Basket
        </a>
    </div>

   
    <div className="product_cards">
        <img src={ipad_1} alt="Product 5"/>
        <h3>Apple iPad Pro 2024 11 Inch Wi-Fi 256GB</h3>
        <p>$899.99</p>

        <a href="#" className="add-btn"
           data-name="Apple iPad Pro 2024 11 Inch Wi-Fi 256GB"
           data-price="899.99"
           data-image={ipad_1}>
           Add to Basket
        </a>
    </div>

   
    <div className="product_cards">
        <img src={ipad_2} alt="Product 5"/>
        <h3>Apple iPad Air 2025 13 Inch Wi-Fi 256GB</h3>
        <p>$799.99</p>

        <a href="#" className="add-btn"
           data-name="Apple iPad Air 2025 13 Inch Wi-Fi 256GB"
           data-price="799.99"
           data-image={ipad_2}>
           Add to Basket
        </a>
    </div>

   
    <div className="product_cards">
        <img src={amazon_fire1} alt="Product 5"/>
        <h3>Amazon Fire Max 11 Inch 64GB Wi-Fi Tablet</h3>
        <p>$129.99</p>

        <a href="#" className="add-btn"
           data-name="Amazon Fire Max 11 Inch 64GB Wi-Fi Tablet"
           data-price="129.99"
           data-image={amazon_fire1}>
           Add to Basket
        </a>
    </div>

    
    <div className="product_cards">
        <img src={amazon_fire2} alt="Product 5"/>
        <h3>Amazon Fire HD 10 2024 10.1 Inch 32GB Wi-Fi Tablet</h3>
        <p>$89.99</p>

        <a href="#" className="add-btn"
           data-name="Amazon Fire HD 10 2024 10.1 Inch 32GB Wi-Fi Tablet"
           data-price="89.99"
           data-image={amazon_fire2}>
           Add to Basket
        </a>
    </div>
        </div>
        </>
    )
}

export default Tablets;