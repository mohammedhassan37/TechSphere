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
        <div className="basket-page">
            <h2>Your Basket</h2>

            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                basket.map((item, index) => (
                    <div key={index} className="basket-item">
                        <img src={item.image} alt={item.name} />

                        <div className="basket-details">
                            <h3>{item.name}</h3>
                            <p>£{item.price.toFixed(2)}</p>

                            <div className="quantity-controls">
                                <button onClick={() => updateQuantity(index, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(index, +1)}>+</button>
                            </div>

                            <button className="remove-btn" onClick={() => removeItem(index)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}

            {basket.length > 0 && (
                <div className="basket-total">
                    <h3>Total: £{getTotal()}</h3>
                </div>
            )}
        </div>
    );
}

export default Basket;
