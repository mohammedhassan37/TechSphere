import { useNavigate } from "react-router-dom";
import { useState } from "react";

import tablet_1 from "../assets/tablet.webp";
import honour from "../assets/honour.webp";
import lenevo from "../assets/lenevo.webp";
import tablet_2 from "../assets/tablet_A9.webp";
import ipad_1 from "../assets/ipad.webp";
import ipad_2 from "../assets/ipad_air.webp";
import amazon_fire1 from "../assets/amazon_fire.webp";
import amazon_fire2 from "../assets/amazon_fire2.webp";

const tabletProducts = [
  {
    id: "samsung-tab-s11",
    name: "Samsung Galaxy Tab S11 Ultra 256GB Wi-Fi Tablet",
    price: 999,
    image: tablet_1,
    specs: {
      screen: "11-inch AMOLED",
      storage: "256GB",
      camera: "13MP Dual",
      battery: "8000mAh",
      os: "Android 15"
    }
  },
  {
    id: "honor-x8a",
    name: "HONOR Pad X8a 11 Inch 128GB Wi-Fi Tablet",
    price: 109.99,
    image: honour,
    specs: {
      screen: "11-inch LCD",
      storage: "128GB",
      camera: "8MP",
      battery: "7000mAh",
      os: "Android 14"
    }
  },
  {
    id: "lenovo-idea-tab",
    name: "Lenovo Idea Tab 11 Inch 128GB Wi-Fi Tablet",
    price: 149.99,
    image: lenevo,
    specs: {
      screen: "11-inch LCD",
      storage: "128GB",
      camera: "8MP",
      battery: "7500mAh",
      os: "Android 14"
    }
  },
  {
    id: "samsung-tab-a9",
    name: "Samsung Galaxy Tab A9+ 11in 64GB Wi-Fi Tablet",
    price: 209.99,
    image: tablet_2,
    specs: {
      screen: "11-inch LCD",
      storage: "64GB",
      camera: "8MP",
      battery: "7200mAh",
      os: "Android 14"
    }
  },
  {
    id: "ipad-pro-2024",
    name: "Apple iPad Pro 2024 11 Inch Wi-Fi 256GB",
    price: 899.99,
    image: ipad_1,
    specs: {
      screen: "11-inch Liquid Retina",
      storage: "256GB",
      camera: "12MP Dual",
      battery: "7800mAh",
      os: "iPadOS 18"
    }
  },
  {
    id: "ipad-air-2025",
    name: "Apple iPad Air 2025 13 Inch Wi-Fi 256GB",
    price: 799.99,
    image: ipad_2,
    specs: {
      screen: "13-inch Liquid Retina",
      storage: "256GB",
      camera: "12MP Dual",
      battery: "8000mAh",
      os: "iPadOS 18"
    }
  },
  {
    id: "amazon-fire-max",
    name: "Amazon Fire Max 11 Inch 64GB Wi-Fi Tablet",
    price: 129.99,
    image: amazon_fire1,
    specs: {
      screen: "11-inch LCD",
      storage: "64GB",
      camera: "5MP",
      battery: "6000mAh",
      os: "Fire OS 10"
    }
  },
  {
    id: "amazon-fire-hd-10",
    name: "Amazon Fire HD 10 2024 10.1 Inch 32GB Wi-Fi Tablet",
    price: 89.99,
    image: amazon_fire2,
    specs: {
      screen: "10.1-inch LCD",
      storage: "32GB",
      camera: "5MP",
      battery: "6000mAh",
      os: "Fire OS 10"
    }
  }
];

function Tablets() {
  const navigate = useNavigate();

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

  const [sortOption, setSortOption] = useState("");
  const [maxPrice, setMaxPrice] = useState(1200);

  // The price filter
  let filteredProducts = tabletProducts.filter(
    (product) => product.price <= maxPrice
  );

  // The sort
  filteredProducts.sort((a, b) => {
    if (sortOption === "low-high") return a.price - b.price;
    if (sortOption === "high-low") return b.price - a.price;
    if (sortOption === "a-z") return a.name.localeCompare(b.name);
    if (sortOption === "z-a") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <>
      <h1>Tablets</h1>

      {/* SINGLE HOVER DROPDOWN FOR SORT & FILTER */}
      <div className="filter-dropdown">
        <button className="filter-toggle">
          Filter
        </button>

        <div className="filter-panel">

          <h2>Filter & Sort</h2>

          {/* THIS IS FOR THE SORTING */}
          <div className="filter-section">
            <label>Sort By: </label>
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

export default Tablets;