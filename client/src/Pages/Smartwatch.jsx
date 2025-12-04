import { useNavigate } from "react-router-dom";

import HUAWEI from "../assets/HUAWEI.webp";
import apple_watch from "../assets/apple_watch.webp";
import reflex_watch from "../assets/reflex_watch.webp";
import samsung_watch from "../assets/samsung_watch.webp";
import garmin_watch from "../assets/garmin_watch.webp";
import fitbit_watch from "../assets/fitbit_watch.webp";
import samsung_watch2 from "../assets/samsung_watch2.webp";
import garmin_watch2 from "../assets/garmin_watch2.webp";


const smartwatchProducts = [
  {
    id: "huawei-fit3",
    name: "HUAWEI Watch Fit 3 Smart Watch - Grey",
    price: 139.0,
    image: HUAWEI,
    specs: {
      screen: "1.64-inch AMOLED",
      battery: "10 days",
      connectivity: "Bluetooth 5.0",
      waterproof: "Yes",
      sensors: "Heart Rate, SpO2"
    }
  },
  {
    id: "reflex-active",
    name: "Reflex Active Black Smart Watch - Black",
    price: 35.99,
    image: reflex_watch,
    specs: {
      screen: "1.3-inch LCD",
      battery: "7 days",
      connectivity: "Bluetooth 4.2",
      waterproof: "Yes",
      sensors: "Heart Rate"
    }
  },
  {
    id: "apple-watch-ultra3",
    name: "Apple Watch Ultra 3 Black Ocean Band",
    price: 719.99,
    image: apple_watch,
    specs: {
      screen: "1.9-inch OLED",
      battery: "36h",
      connectivity: "Bluetooth 5.3, Wi-Fi",
      waterproof: "Yes",
      sensors: "Heart Rate, GPS, Blood Oxygen"
    }
  },
  {
    id: "samsung-watch7",
    name: "Samsung Galaxy Watch7 40mm Smart Watch",
    price: 249.99,
    image: samsung_watch,
    specs: {
      screen: "1.4-inch Super AMOLED",
      battery: "48h",
      connectivity: "Bluetooth 5.2, Wi-Fi",
      waterproof: "Yes",
      sensors: "Heart Rate, ECG, GPS"
    }
  },
  {
    id: "garmin-forerunner165",
    name: "Garmin Forerunner 165 GPS Running Smart Watch",
    price: 169.99,
    image: garmin_watch,
    specs: {
      screen: "1.3-inch LCD",
      battery: "14 days",
      connectivity: "Bluetooth",
      waterproof: "Yes",
      sensors: "Heart Rate, GPS"
    }
  },
  {
    id: "fitbit-versa4",
    name: "Fitbit Versa 4 Smart Watch - Waterfall Blue",
    price: 129.99,
    image: fitbit_watch,
    specs: {
      screen: "1.58-inch AMOLED",
      battery: "6 days",
      connectivity: "Bluetooth 5.0",
      waterproof: "Yes",
      sensors: "Heart Rate, SpO2, Sleep Tracking"
    }
  },
  {
    id: "samsung-watch8",
    name: "Samsung Galaxy Watch8 40mm Smart Watch",
    price: 249.99,
    image: samsung_watch2,
    specs: {
      screen: "1.36-inch AMOLED",
      battery: "40h",
      connectivity: "Bluetooth 5.2, Wi-Fi",
      waterproof: "Yes",
      sensors: "Heart Rate, ECG, GPS"
    }
  },
  {
    id: "garmin-fenix8",
    name: "Garmin Fenix 8 47mm Smart Watch - Glass Grey & Black",
    price: 599.99,
    image: garmin_watch2,
    specs: {
      screen: "1.4-inch AMOLED",
      battery: "16 days",
      connectivity: "Bluetooth, Wi-Fi",
      waterproof: "Yes",
      sensors: "Heart Rate, GPS, Altimeter, Barometer"
    }
  }
];



function Smartwatch() {
  const navigate = useNavigate();

  const addToBasket = (product) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    const existing = basket.find((item) => item.name === product.name);

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
      <h1>Smartwatches</h1>
      <div className="product_container">
        {smartwatchProducts.map((product) => (
          <div
            key={product.id}
            className="product_cards"
            onClick={() => openProduct(product)}
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




export default Smartwatch;
