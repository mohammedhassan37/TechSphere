
import JBL720 from '../assets/headphone.webp'
import sonyWH from '../assets/sony_headphones.webp'
import beatsPro from '../assets/beats_headphones.webp'
import airMax1 from '../assets/airMax_headphones.webp'
import airMax2 from '../assets/airMax_headphones2.webp'
import jLab from '../assets/jlab_headphones.webp'
import marshalHead from '../assets/marshall_headphones.webp'
import shokz from '../assets/shokz_headphones.webp'

function Headphones(){
    return(
        <>

<div className="product_container">


    <div className="product_cards">
        <img src={JBL720} alt="Product 1"/>
        <h3>JBL Tune 720BT Over-Ear Wireless Headphones</h3>
        <p>$39.99</p>

        <button
            className="add-btn"
            onClick={() =>
                addToBasket({
                    name: "JBL Tune 720BT Over-Ear Wireless Headphones",
                    price: 39.99,
                    image: JBL720,
                    quantity: 1
                })
            }
        >
            Add to Basket
        </button>
    </div>


    <div className="product_cards">
        <img src={sonyWH} alt="Product 2"/>
        <h3>Sony WH-CH520 On-Ear Bluetooth Headphones</h3>
        <p>$28.99</p>

        <button
            className="add-btn"
            onClick={() =>
                addToBasket({
                    name: "Sony WH-CH520 On-Ear Bluetooth Headphones",
                    price: 28.99,
                    image: sonyWH,
                    quantity: 1
                })
            }
        >
            Add to Basket
        </button>
    </div>


    <div className="product_cards">
        <img src={beatsPro} alt="Product 3"/>
        <h3>Beats Studio Pro ANC Over-Ear Wireless Headphones</h3>
        <p>$99.99</p>

        <button
            className="add-btn"
            onClick={() =>
                addToBasket({
                    name: "Beats Studio Pro ANC Over-Ear Wireless Headphones",
                    price: 99.99,
                    image: beatsPro,
                    quantity: 1
                })
            }
        >
            Add to Basket
        </button>
    </div>


    <div className="product_cards">
        <img src={airMax1} alt="Product 4"/>
        <h3>Apple AirPods Max Over-Ear Wireless Headphones-Purple</h3>
        <p>$499.99</p>

        <button
            className="add-btn"
            onClick={() =>
                addToBasket({
                    name: "Apple AirPods Max Over-Ear Wireless Headphones-Purple",
                    price: 499.99,
                    image: airMax1,
                    quantity: 1
                })
            }
        >
            Add to Basket
        </button>
    </div>


    <div className="product_cards">
        <img src={airMax2} alt="Product 5"/>
        <h3>Apple AirPods Max Over-Ear Wireless Headphones - Blue</h3>
        <p>$499.99</p>

        <button
            className="add-btn"
            onClick={() =>
                addToBasket({
                    name: "Apple AirPods Max Over-Ear Wireless Headphones - Blue",
                    price: 499.99,
                    image: airMax2,
                    quantity: 1
                })
            }
        >
            Add to Basket
        </button>
    </div>


    <div className="product_cards">
        <img src={jLab} alt="Product 6"/>
        <h3>Jlab JBuds Lux ANC Over-Ear Wireless Headphones</h3>
        <p>$49.99</p>

        <button
            className="add-btn"
            onClick={() =>
                addToBasket({
                    name: "Jlab JBuds Lux ANC Over-Ear Wireless Headphones",
                    price: 49.99,
                    image: jLab,
                    quantity: 1
                })
            }
        >
            Add to Basket
        </button>
    </div>


    <div className="product_cards">
        <img src={marshalHead} alt="Product 7"/>
        <h3>Marshall Major V On-Ear Wireless Headphones</h3>
        <p>$79.99</p>

        <button
            className="add-btn"
            onClick={() =>
                addToBasket({
                    name: "Marshall Major V On-Ear Wireless Headphones",
                    price: 79.99,
                    image: marshalHead,
                    quantity: 1
                })
            }
        >
            Add to Basket
        </button>
    </div>

  
    <div className="product_cards">
        <img src={shokz} alt="Product 8"/>
        <h3>Shokz OpenSwim Pro Wireless Bluetooth Headphones</h3>
        <p>$135.99</p>

        <button
            className="add-btn"
            onClick={() =>
                addToBasket({
                    name: "Shokz OpenSwim Pro Wireless Bluetooth Headphones",
                    price: 135.99,
                    image: shokz,
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

export default Headphones;
