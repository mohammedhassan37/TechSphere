import { useNavigate } from "react-router-dom";


import tv from "../assets/tv.webp";
import tcl_tv from "../assets/tcl_tv.webp";
import hisense from "../assets/hisense_tv.webp";
import toshiba from "../assets/toshiba_tv.webp";

function TV(){

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

            <h1>TV</h1>

            <div className="product_container">

                {/* Product 1 */}
                <div className="product_cards">
                    <img src={tv} alt="Samsung 50 Inch Smart 4k QLED TV" />
                    <h3>Samsung 50 Inch Smart 4k QLED TV</h3>
                    <p>£399.00</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Samsung 50 Inch Smart 4k QLED TV",
                                price: 399.00,
                                image: tv,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                {/* Product 2 */}
                <div className="product_cards">
                    <img src={tcl_tv} alt="TCL 55 Inch 55P6K Smart 4K UHD HDR DLED TV" />
                    <h3>TCL 55 Inch 55P6K Smart 4K UHD HDR DLED TV</h3>
                    <p>£259.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "TCL 55 Inch 55P6K Smart 4K UHD HDR DLED TV",
                                price: 259.99,
                                image: tcl_tv,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                {/* Product 3 */}
                <div className="product_cards">
                    <img src={hisense} alt="Hisense 75 Inch Smart 4K UHD HDR LED Freely TV" />
                    <h3>Hisense 75 Inch Smart 4K UHD HDR LED Freely TV</h3>
                    <p>£499.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Hisense 75 Inch Smart 4K UHD HDR LED Freely TV",
                                price: 300.99,
                                image: hisense,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                {/* Product 4 */}
                <div className="product_cards">
                    <img src={toshiba} alt="Toshiba 65Inch Smart 4K UHD HDR DLED Freely TV" />
                    <h3>Toshiba 65Inch Smart 4K UHD HDR DLED Freely TV</h3>
                    <p>£319.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Toshiba 65Inch Smart 4K UHD HDR DLED Freely TV",
                                price: 319.99,
                                image: toshiba,
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

export default TV;