import { useNavigate } from "react-router-dom";
import { useState } from "react";

import JBL720 from '../assets/headphone.webp'
import sonyWH from '../assets/sony_headphones.webp'
import beatsPro from '../assets/beats_headphones.webp'
import airMax1 from '../assets/airMax_headphones.webp'
import airMax2 from '../assets/airMax_headphones2.webp'
import jLab from '../assets/jlab_headphones.webp'
import marshalHead from '../assets/marshall_headphones.webp'
import shokz from '../assets/shokz_headphones.webp'

const headphoneProducts = [
  {
    id: "jbl-720",
    name: "JBL Tune 720BT Over-Ear Wireless Headphones",
    price: 39.99,
    image: JBL720,
    specs: {
      type: "Over-Ear",
      connectivity: "Bluetooth 5.0",
      battery: "30h",
      noiseCancelling: "No",
      color: "Black"
    }
  },
  {
    id: "sony-wh-ch520",
    name: "Sony WH-CH520 On-Ear Bluetooth Headphones",
    price: 28.99,
    image: sonyWH,
    specs: {
      type: "On-Ear",
      connectivity: "Bluetooth 5.0",
      battery: "35h",
      noiseCancelling: "No",
      color: "Black"
    }
  },
  {
    id: "beats-studio-pro",
    name: "Beats Studio Pro ANC Over-Ear Wireless Headphones",
    price: 99.99,
    image: beatsPro,
    specs: {
      type: "Over-Ear",
      connectivity: "Bluetooth 5.3",
      battery: "40h",
      noiseCancelling: "Yes",
      color: "Black"
    }
  },
  {
    id: "airpods-max-purple",
    name: "Apple AirPods Max Over-Ear Wireless Headphones-Purple",
    price: 499.99,
    image: airMax1,
    specs: {
      type: "Over-Ear",
      connectivity: "Bluetooth 5.0",
      battery: "20h",
      noiseCancelling: "Yes",
      color: "Purple"
    }
  },
  {
    id: "airpods-max-blue",
    name: "Apple AirPods Max Over-Ear Wireless Headphones - Blue",
    price: 499.99,
    image: airMax2,
    specs: {
      type: "Over-Ear",
      connectivity: "Bluetooth 5.0",
      battery: "20h",
      noiseCancelling: "Yes",
      color: "Blue"
    }
  },
  {
    id: "jlab-lux",
    name: "Jlab JBuds Lux ANC Over-Ear Wireless Headphones",
    price: 49.99,
    image: jLab,
    specs: {
      type: "Over-Ear",
      connectivity: "Bluetooth 5.0",
      battery: "25h",
      noiseCancelling: "Yes",
      color: "Black"
    }
  },
  {
    id: "marshall-major-v",
    name: "Marshall Major V On-Ear Wireless Headphones",
    price: 79.99,
    image: marshalHead,
    specs: {
      type: "On-Ear",
      connectivity: "Bluetooth 5.0",
      battery: "36h",
      noiseCancelling: "No",
      color: "Black"
    }
  },
  {
    id: "shokz-openswim-pro",
    name: "Shokz OpenSwim Pro Bluetooth Headphones",
    price: 135.99,
    image: shokz,
    specs: {
      type: "Bone Conduction",
      connectivity: "Bluetooth 5.3",
      battery: "8h",
      noiseCancelling: "No",
      color: "Grey"
    }
  }
];

function Headphones() {
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

  const [sortOption, setSortOption] = useState("");
  const [maxPrice, setMaxPrice] = useState(1200);

  // The price filter
  let filteredProducts = headphoneProducts.filter(
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
      <h1>Headphones</h1>

      {/* SINGLE HOVER DROPDOWN FOR SORT & FILTER */}
      <div className="filter-dropdown">
        <button className="filter-toggle">
          Filter
        </button>

        <div className="filter-panel">

          <h2>Filter & Sort</h2>

          {/* SORT */}
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

export default Headphones;