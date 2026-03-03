import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Basket.css";

function Basket() {
    const [basket, setBasket] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const navigate = useNavigate();

    // Loads basket + wishlist itmes from localStorage
    useEffect(() => {
        const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setBasket(savedBasket);
        setWishlist(savedWishlist);
    }, []);

    // Saves basket items
    const saveBasket = (updated) => {
        setBasket(updated);
        localStorage.setItem("basket", JSON.stringify(updated));
    };

    const saveWishlist = (updated) => {
        setWishlist(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
    };

    // Updates the quantity
    const updateQuantity = (index, amount) => {
        const updated = [...basket];
        updated[index].quantity += amount;

        if (updated[index].quantity <= 0) {
            updated.splice(index, 1);
        }

        saveBasket(updated);
    };

    // Removes items from basket
    const removeFromBasket = (index) => {
        const updated = basket.filter((_, i) => i !== index);
        saveBasket(updated);
    };

    // Moves item to the wishlist
    const moveToWishlist = (index) => {
        const item = basket[index];

        const updatedBasket = basket.filter((_, i) => i !== index);
        const updatedWishlist = [...wishlist, item];

        saveBasket(updatedBasket);
        saveWishlist(updatedWishlist);
    };

    // Moves items to basket
    const moveToBasket = (index) => {
        const item = wishlist[index];

        const updatedWishlist = wishlist.filter((_, i) => i !== index);
        const updatedBasket = [...basket, item];

        saveWishlist(updatedWishlist);
        saveBasket(updatedBasket);
    };

    const getTotal = () =>
        basket
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2);

    return (
        <div className="basketMainPage">
            <div className="basket_page">

                <h2>Your Basket</h2>




    {/* --------------------- BASKET SECTION ----------------- */}
                {basket.length === 0 ? (
                    <p>Your basket is empty.</p>
                ) : (
                    <>
                        {basket.map((item, index) => (
                            <div key={index} className="basket_item">
                                <img src={item.image} alt={item.name} />

                                <div className="product_info">
                                    <h3>{item.name}</h3>
                                    <p>£{item.price.toFixed(2)}</p>

                                    <div className="quantity_buttons">
                                        <button onClick={() => updateQuantity(index, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(index, 1)}>+</button>
                                    </div>

                                    <div className="basket_actions">
                                        <button
                                            onClick={() => removeFromBasket(index)}
                                            className="remove_button"
                                        >
                                            Remove
                                        </button>

                                        <button
                                            onClick={() => moveToWishlist(index)}
                                            className="wishlist_button"
                                        >
                                            ❤️
                                            {/* Move to Wishlist */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="basket_total">
                            <h3>Total: £{getTotal()}</h3>
                        </div>

                        <button
                            className="checkout_button"
                            onClick={() => navigate("/checkout")}
                        >
                            Proceed to Checkout
                        </button>
                    </>
                )}



{/* --------------------- WISHLIST SECTION -------------------------- */}
                <div className="wishlist_section">
                    <h2>Your Wishlist</h2>

                    {wishlist.length === 0 ? (
                        <p>No items in wishlist.</p>
                    ) : (
                        wishlist.map((item, index) => (
                            <div key={index} className="wishlist_item">
                                <img src={item.image} alt={item.name} />

                                <div className="product_info">
                                    <h3>{item.name}</h3>
                                    <p>£{item.price.toFixed(2)}</p>

                                    <button
                                        onClick={() => moveToBasket(index)}
                                        className="move_back_button"
                                    >
                                        Move to Basket
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </div>
    );
}

export default Basket;








