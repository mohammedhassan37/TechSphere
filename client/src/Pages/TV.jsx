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
                    <img src={samsung_tv3} alt="Samsung 43 Inch Smart 4K UHD HDR LED TV" />
                    <h3>Samsung 43 Inch Smart 4K UHD HDR LED TV</h3>
                    <p>£229.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Samsung 43 Inch Smart 4K UHD HDR LED TV",
                                price: 229.99,
                                image: samsung_tv3,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                {/* Product 6 */}
                <div className="product_cards">
                    <img src={samsung_tv2} alt="Samsung 43 Inch Smart 4K UHD HDR LED TV" />
                    <h3>Samsung 24 Inch Smart Full HD HDR LED TV</h3>
                    <p>£149.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Samsung 24 Inch Smart Full HD HDR LED TV",
                                price: 149.99,
                                image: samsung_tv2,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                {/* Product 7 */}
                <div className="product_cards">
                    <img src={bush_tv} alt="Bush 24 Inch H236V6D HD Ready LED Freeview TV" />
                    <h3>Bush 24 Inch H236V6D HD Ready LED Freeview TV</h3>
                    <p>£109.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Bush 24 Inch H236V6D HD Ready LED Freeview TV",
                                price: 109.99,
                                image: bush_tv,
                                quantity: 1
                            })
                        }
                    >
                        Add to Basket
                    </button>
                </div>

                {/* Product 8 */}
                <div className="product_cards">
                    <img src={sony_tv} alt="Bush 24 Inch H236V6D HD Ready LED Freeview TV" />
                    <h3>Sony Bravia 3 50inch LED HDR 4K Ultra HD Google TV</h3>
                    <p>£569.99</p>

                    <button
                        className="add-btn"
                        onClick={() =>
                            addToBasket({
                                name: "Sony Bravia 3 50inch LED HDR 4K Ultra HD Google TV",
                                price: 569.99,
                                image: sony_tv,
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