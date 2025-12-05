import { useNavigate } from "react-router-dom";

import "../Styles/Phone.css";

import phone from "../assets/phone.webp";
import samsungGalaxy from "../assets/samsung galaxy.webp";
import motorola from "../assets/motorola.webp";
import iphone16 from "../assets/iphone 16.webp";
import googlePixel from "../assets/google pixel.webp";
import xiaomi from "../assets/xiaomi.webp";
import iphonePink from "../assets/iphonePink.webp";
import samsungFlip from "../assets/samsungFlip.webp";

const products = [
  {
    id: "iphone-17",
    name: "iPhone 17 Pro Max",
    price: 1199,
    image: phone,
    specs: {
      screen: "6.9-inch OLED",
      storage: "256GB",
      camera: "48MP Triple Camera",
      battery: "5000mAh",
      os: "iOS 18"
    }
  },
  {
    id: "samsung-s25",
    name: "Samsung Galaxy S25 Ultra",
    price: 1099.99,
    image: samsungGalaxy,
    specs: {
      screen: "6.8-inch AMOLED",
      storage: "256GB",
      camera: "200MP Quad",
      battery: "5200mAh",
      os: "Android 15"
    }
  },
  {
    id: "motorola-edge",
    name: "Motorola Edge 60",
    price: 300.99,
    image: motorola,
    specs: {
      screen: "6.7-inch OLED",
      storage: "128GB",
      camera: "64MP Dual",
      battery: "4500mAh",
      os: "Android 14"
    }
  },

  {
    id: "iphone-16",
    name: "iPhone 16 128GB",
    price: 649.99,
    image: iphone16,
    specs: {
      screen: "6.1-inch OLED",
      storage: "128GB",
      camera: "48MP",
      battery: "4100mAh",
      os: "iOS 17"
    }
  },

  {
    id: "pixel-9a",
    name: "Google Pixel 9a 5G",
    price: 349.99,
    image: googlePixel,
    specs: {
      screen: "6.3-inch OLED",
      storage: "128GB",
      camera: "64MP",
      battery: "4600mAh",
      os: "Android 15"
    }
  },

  {
    id: "xiaomi-a5",
    name: "Xiaomi Redmi A5",
    price: 79.99,
    image: xiaomi,
    specs: {
      screen: "6.5-inch LCD",
      storage: "64GB",
      camera: "13MP",
      battery: "5000mAh",
      os: "Android 13 Go"
    }
  },

  {
    id: "iphone-pink",
    name: "iPhone 16 5G - Pink",
    price: 699.99,
    image: iphonePink,
    specs: {
      screen: "6.1-inch OLED",
      storage: "256GB",
      camera: "48MP",
      battery: "4200mAh",
      os: "iOS 17"
    }
  },

  {
    id: "samsung-flip",
    name: "Samsung Galaxy Z Flip7",
    price: 1049.99,
    image: samsungFlip,
    specs: {
      screen: "6.7-inch Foldable AMOLED",
      storage: "256GB",
      camera: "50MP",
      battery: "3700mAh",
      os: "Android 15"
    }
  }
];



function Phone() {
  const navigate = useNavigate();

  const addToBasket = (product) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    const existing = basket.find(item => item.name === product.name);

    if (existing) {
      existing.quantity += 1;
    } else {
      basket.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("basket", JSON.stringify(basket));

    navigate("/basket");
  };

  const openProduct = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <>
      <h1>Phones</h1>

      <div className="product_container">
        {products.map(product => (
          <div
            key={product.id}
            className="product_cards"
            onClick={() => openProduct(product)}   // CLICKING LEADS TO PRODUCT PAGE
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>£{product.price}</p>

            <button
              className="add-btn"
              onClick={(e) => {
                e.stopPropagation();  
                addToBasket(product);
              }}
            >
              Add to Basket
            </button>
          </div>
        ))}
      </div>
    </>
  );
}


export default Phone;