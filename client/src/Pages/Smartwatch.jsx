import { useNavigate } from "react-router-dom";

import HUAWEI from "../assets/HUAWEI.webp";
import apple_watch from "../assets/apple_watch.webp";
import reflex_watch from "../assets/reflex_watch.webp";
import samsung_watch from "../assets/samsung_watch.webp";
import garmin_watch from "../assets/garmin_watch.webp";
import fitbit_watch from "../assets/fitbit_watch.webp";
import samsung_watch2 from "../assets/samsung_watch2.webp";
import garmin_watch2 from "../assets/garmin_watch2.webp";

function Smartwatch() {
    const navigate = useNavigate();

    const addToBasket = (product) => {
        let basket = JSON.parse(localStorage.getItem("basket")) || [];

        const existing = basket.find((item) => item.name === product.name);

        if (existing) {
            existing.quantity += 1;
        } else {
            basket.push(product);
        }

        localStorage.setItem("basket", JSON.stringify(basket));
        navigate("/basket");
    };

    return (
        <>
            <div className="product_container">

                <div className="product_cards">
                    <img src={HUAWEI} alt="HUAWEI Watch Fit 3" />
                    <h3>HUAWEI Watch Fit 3 Smart Watch - Grey</h3>
                    <p>£139.00</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "HUAWEI Watch Fit 3 Smart Watch",
                                price: 139.00,
                                image: HUAWEI,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={reflex_watch} alt="Reflex Active Smart Watch" />
                    <h3>Reflex Active Black Smart Watch - Black</h3>
                    <p>£35.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Reflex Active Black Smart Watch",
                                price: 35.99,
                                image: reflex_watch,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={apple_watch} alt="Apple Watch Ultra 3" />
                    <h3>Apple Watch Ultra 3 Black Ocean Band</h3>
                    <p>£719.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Apple Watch Ultra 3 Black Ocean Band",
                                price: 719.99,
                                image: apple_watch,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={samsung_watch} alt="Samsung Galaxy Watch7" />
                    <h3>Samsung Galaxy Watch7 40mm Smart Watch</h3>
                    <p>£249.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Samsung Galaxy Watch7 40mm Smart Watch",
                                price: 249.99,
                                image: samsung_watch,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={garmin_watch} alt="Garmin Forerunner 165" />
                    <h3>Garmin Forerunner 165 GPS Running Smart Watch</h3>
                    <p>£169.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Garmin Forerunner 165 GPS Running Smart Watch",
                                price: 169.99,
                                image: garmin_watch,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={fitbit_watch} alt="Fitbit Versa 4" />
                    <h3>Fitbit Versa 4 Smart Watch - Waterfall Blue</h3>
                    <p>£129.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Fitbit Versa 4 Smart Watch - Waterfall Blue",
                                price: 129.99,
                                image: fitbit_watch,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={samsung_watch2} alt="Samsung Galaxy Watch8" />
                    <h3>Samsung Galaxy Watch8 40mm Smart Watch</h3>
                    <p>£249.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Samsung Galaxy Watch8 40mm Smart Watch",
                                price: 249.99,
                                image: samsung_watch2,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={garmin_watch2} alt="Garmin Fenix 8" />
                    <h3>Garmin Fenix 8 47mm Smart Watch - Glass Grey & Black</h3>
                    <p>£599.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Garmin Fenix 8 47mm Smart Watch - Glass Grey & Black",
                                price: 599.99,
                                image: garmin_watch2,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

            </div>
        </>
    );
}

export default Smartwatch;
