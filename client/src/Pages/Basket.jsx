import { useEffect, useState } from "react";
import '../Styles/Basket.css';

function Basket() {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];
        setBasket(savedBasket);
    }, []);

    const updateQuantity = (index, amount) => {
        let updated = [...basket];
        updated[index].quantity += amount;

        if (updated[index].quantity <= 0) {
            updated.splice(index, 1);
        }

        setBasket(updated);
        localStorage.setItem("basket", JSON.stringify(updated));
    };

    const removeItem = (index) => {
        let updated = basket.filter((_, i) => i !== index);
        setBasket(updated);
        localStorage.setItem("basket", JSON.stringify(updated));
    };

    const getTotal = () =>
        basket.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="basketMainPage">
            <div className="basket_and_checkout">

                <div className="basket_page">
                    <h2>Your Item Basket</h2>

                    {basket.length === 0 ? (
                        <p>Your basket is empty.</p>
                    ) : (
                        basket.map((item, index) => (
                            <div key={index} className="basket_item">
                                <img src={item.image} alt={item.name} />

                                <div className="product_info">
                                    <h3>{item.name}</h3>
                                    <p>£{item.price.toFixed(2)}</p>

                                    <div className="quantity_buttons">
                                        <button onClick={() => updateQuantity(index, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(index, +1)}>+</button>
                                    </div>

                                    <button onClick={() => removeItem(index)} className="remove_button">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}

                    {basket.length > 0 && (
                        <div className="basket_total">
                            <h3>Total: £{getTotal()}</h3>
                        </div>
                    )}
                </div>

                <div className="checkoutPage">
                    <h2>Checkout</h2>

                    {basket.length === 0 ? (
                        <p>No items to checkout.</p>
                    ) : (
                        <>
                            <div className="checkout_items">
    {basket.map((item, index) => (
        <div key={index} className="checkout_item">
            <span className="item_name">
                {item.name} (x{item.quantity})
            </span>
            <span className="item_price">
                £{(item.price * item.quantity).toFixed(2)}
            </span>
        </div>
    ))}
</div>

<div className="checkout_form">
    <h3 className="checkout_title">Payment Details</h3>

    <div className="form_group">
        <label>Name on Card</label>
        <input type="text" placeholder="John Doe" />
    </div>

    <div className="form_group">
        <label>Card Number</label>
        <input type="text" placeholder="1234 5678 9012 3456" />
    </div>

    <div className="form_row">
        <div className="form_group">
            <label>Expiry</label>
            <input type="text" placeholder="09/27" />
        </div>

        <div className="form_group cvv">
            <label>CVV</label>
            <input type="text" placeholder="123" />
        </div>
    </div>

    <button className="checkout_button">Complete Purchase</button>
</div>


                            <hr />

                            <div className="checkout_total">
                                <strong>Total: £{getTotal()}</strong>
                            </div>

                            <button className="checkout_button">
                                Proceed to Payment
                            </button>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Basket;
