import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    price: 1199.99,
    image: phone
  },
  {
    id: "samsung-s25",
    name: "Samsung Galaxy S25 Ultra",
    price: 1099.99,
    image: samsungGalaxy
  },
  {
    id: "motorola-edge",
    name: "Motorola Edge 60",
    price: 300.99,
    image: motorola
  },
  {
    id: "iphone-16",
    name: "iPhone 16 128GB",
    price: 649.99,
    image: iphone16
  },
  {
    id: "pixel-9a",
    name: "Google Pixel 9a 5G",
    price: 349.99,
    image: googlePixel
  },
  {
    id: "xiaomi-a5",
    name: "Xiaomi Redmi A5",
    price: 79.99,
    image: xiaomi
  },
  {
    id: "iphone-pink",
    name: "iPhone 16 5G - Pink",
    price: 699.99,
    image: iphonePink
  },
  {
    id: "samsung-flip",
    name: "Samsung Galaxy Z Flip7",
    price: 1049.99,
    image: samsungFlip
  }
];

function Phone() {
  const navigate = useNavigate();

  const [sortOption, setSortOption] = useState("");
  const [maxPrice, setMaxPrice] = useState(1200);

  //Add to basket function
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

  // The price filter
  let filteredProducts = products.filter(
    (product) => product.price <= maxPrice
  );

  filteredProducts.sort((a, b) => {
    if (sortOption === "low-high") return a.price - b.price;
    if (sortOption === "high-low") return b.price - a.price;
    if (sortOption === "a-z") return a.name.localeCompare(b.name);
    if (sortOption === "z-a") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <>
      <h1>Phones</h1>

      {/* SINGLE HOVER DROPDOWN FILTER */}
      <div className="filter-dropdown">
        <button className="filter-toggle">
          Filter
        </button>

        <div className="filter-panel">

          <h2>Filter & Sort</h2>

          {/* SORT */}
          <div className="filter-section">
            <label>Sort By</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="a-z">Name: A to Z</option>
              <option value="z-a">Name: Z to A</option>
            </select>
          </div>

          {/* FILTER */}
          <div className="filter-section">
            <label>Max Price: £{maxPrice}</label>
            <input
              type="range"
              min="0"
              max="1200"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

        </div>
      </div>

      <div className="product_container">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product_cards"
            onClick={() => openProduct(product)} // CLICKING LEADS TO PRODUCT PAGE
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>£{product.price}</p>

            <button
              className="add-btn"
              onClick={(e) => {
                e.stopPropagation(); // PRVENT THE CARD CLICK
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