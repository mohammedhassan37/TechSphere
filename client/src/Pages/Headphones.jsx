import { useNavigate } from "react-router-dom";


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




  
  return (
    <>
      <h1>Headphones</h1>

      <div className="product_container">
        {headphoneProducts.map((product) => (
          <div
            key={product.id}
            className="product_cards"
            onClick={() => openProduct(product)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>

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
