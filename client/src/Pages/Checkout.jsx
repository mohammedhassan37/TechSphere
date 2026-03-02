import { useEffect, useState } from "react"; 
import "../Styles/Checkout.css";

function Checkout() {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];
        setBasket(savedBasket);
    }, []);

    const getTotal = () => basket.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    if (basket.length === 0) {
        return (
            <div className="checkoutPage">
                <h2>Checkout</h2>
                <p className="empty_message">Your basket is empty.</p>
            </div>
        );
    }

    return (
        <div className="checkoutPage">
            <h2>Checkout</h2>

            {/* -------- ORDER SUMMARY -------- */}
            <div className="checkout_items">
                {basket.map((item, index) => (
                    <div key={index} className="checkout_item">
                        {/* Fixed the image scaling */}
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="checkout_item_image" 
                        />

                        <div className="checkout_item_details">
                            <span className="item_name">{item.name} (x{item.quantity})</span>
                            <span className="item_price">£{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="checkout_total">
                <strong>Total: £{getTotal()}</strong>
            </div>



            {/* -------- PAYMENT FORM -------- */}
            <div className="checkout_form">
                <h3>Payment Details</h3>

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

                    <div className="form_group">
                        <label>CVV</label>
                        <input type="text" placeholder="123" />
                    </div>
                </div>

                <button className="checkout_button">Complete Purchase</button>
            </div>
        </div>
    );
}

export default Checkout;