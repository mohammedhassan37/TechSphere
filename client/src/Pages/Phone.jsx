import { useNavigate } from "react-router-dom";

import "../Styles/Phone.css";

import phone from "../assets/phone.webp";
import samsungGalaxy from "../assets/samsung galaxy.webp";
import motorola from "../assets/motorola.webp";
import iphone16 from "../assets/iphone 16.webp";
import googlePixel from "../assets/google pixel.webp";

function Phone(){

const navigate = useNavigate();

    const addToBasket = (product) => {
        let basket = JSON.parse(localStorage.getItem("basket")) || [];

        const existing = basket.find(item => item.name === product.name);

        if (existing) {
            existing.quantity += 1;
        } else {
            basket.push(product);
        }

        localStorage.setItem("basket", JSON.stringify(basket));

        navigate("/basket");
    };

    return(
        <>

            <h1>Phone</h1>

            <div className="product_container">

                {/* Product 1 */}
                <div className="product_cards">
                    <img src={phone} alt="iPhone 17 Pro Max" />
                    <h3>IPhone 17 Pro Max</h3>
                    <p>£1199.00</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "IPhone 17 Pro Max",
                                price: 1199.00,
                                image: phone,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                {/* Product 2 */}
                <div className="product_cards">
                    <img src={samsungGalaxy} alt="Samsung Galaxy S25" />
                    <h3>Samsung Galaxy S25 Ultra</h3>
                    <p>£1099.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Samsung Galaxy S25",
                                price: 1099.99,
                                image: samsungGalaxy,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                {/* Product 3 */}
                <div className="product_cards">
                    <img src={motorola} alt="Motorola Edge 60" />
                    <h3>Motorola Edge 60</h3>
                    <p>£300.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Motorola Edge 60",
                                price: 300.99,
                                image: motorola,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                {/* Product 4 */}
                <div className="product_cards">
                    <img src={iphone16} alt="iPhone 16" />
                    <h3>iPhone 16 128GB</h3>
                    <p>£649.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "iPhone 16 128GB",
                                price: 649.99,
                                image: iphone16,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                {/* Product 5 */}
                <div className="product_cards">
                    <img src={googlePixel} alt="Google Pixel 9a" />
                    <h3>Google Pixel 9a 5G 128GB</h3>
                    <p>£349.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Google Pixel 9a 5G",
                                price: 349.99,
                                image: googlePixel,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

            </div>

        </>
    )
}

export default Phone;