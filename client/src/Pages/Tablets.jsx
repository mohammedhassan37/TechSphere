import tablet_1 from "../assets/tablet.webp";
import honor from "../assets/tablet.webp";
import lenevo from "../assets/tablet.webp";
import tablet_2 from "../assets/tablet_A9.webp";
import ipad_1 from "../assets/tablet.webp";
import ipad_2 from "../assets/tablet.webp";
import amazon_fire1 from "../assets/tablet.webp";
import amazon_fire2 from "../assets/tablet.webp";

function Tablets({ addToBasket }) {
    return (
        <>
            <h1>Tablets</h1>

            <div className="product_container">

                <div className="product_cards">
                    <img src={tablet_1} alt="Samsung Galaxy Tab S11 Ultra" />
                    <h3>Samsung Galaxy Tab S11 Ultra 14.6in 256GB Wi-Fi Tablet</h3>
                    <p>£999.00</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Samsung Galaxy Tab S11 Ultra 14.6in 256GB Wi-Fi Tablet",
                                price: 999.00,
                                image: tablet_1,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={honor} alt="HONOR Pad X8a" />
                    <h3>HONOR Pad X8a 11 Inch 128GB Wi-Fi Tablet</h3>
                    <p>£109.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "HONOR Pad X8a 11 Inch 128GB Wi-Fi Tablet",
                                price: 109.99,
                                image: honor,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={lenevo} alt="Lenovo Idea Tab" />
                    <h3>Lenovo Idea Tab 11 Inch 128GB Wi-Fi Tablet</h3>
                    <p>£149.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Lenovo Idea Tab 11 Inch 128GB Wi-Fi Tablet",
                                price: 149.99,
                                image: lenevo,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={tablet_2} alt="Samsung Galaxy Tab A9+" />
                    <h3>Samsung Galaxy Tab A9+ 11in 64GB Wi-Fi Tablet</h3>
                    <p>£209.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Samsung Galaxy Tab A9+ 11in 64GB Wi-Fi Tablet",
                                price: 209.99,
                                image: tablet_2,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={ipad_1} alt="iPad Pro 2024" />
                    <h3>Apple iPad Pro 2024 11 Inch Wi-Fi 256GB</h3>
                    <p>£899.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Apple iPad Pro 2024 11 Inch Wi-Fi 256GB",
                                price: 899.99,
                                image: ipad_1,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={ipad_2} alt="iPad Air 2025" />
                    <h3>Apple iPad Air 2025 13 Inch Wi-Fi 256GB</h3>
                    <p>£799.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Apple iPad Air 2025 13 Inch Wi-Fi 256GB",
                                price: 799.99,
                                image: ipad_2,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={amazon_fire1} alt="Amazon Fire Max 11" />
                    <h3>Amazon Fire Max 11 Inch 64GB Wi-Fi Tablet</h3>
                    <p>£129.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Amazon Fire Max 11 Inch 64GB Wi-Fi Tablet",
                                price: 129.99,
                                image: amazon_fire1,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                <div className="product_cards">
                    <img src={amazon_fire2} alt="Amazon Fire HD 10" />
                    <h3>Amazon Fire HD 10 2024 10.1 Inch 32GB Wi-Fi Tablet</h3>
                    <p>£89.99</p>
                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Amazon Fire HD 10 2024 10.1 Inch 32GB Wi-Fi Tablet",
                                price: 89.99,
                                image: amazon_fire2,
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

export default Tablets;
