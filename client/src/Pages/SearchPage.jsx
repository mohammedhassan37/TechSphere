import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/SearchPage.css";

// Phones
import phone from "../assets/phone.webp";
import samsungGalaxy from "../assets/samsung galaxy.webp";
import motorola from "../assets/motorola.webp";
import iphone16 from "../assets/iphone 16.webp";
import googlePixel from "../assets/google pixel.webp";
import xiaomi from "../assets/xiaomi.webp";
import iphonePink from "../assets/iphonePink.webp";
import samsungFlip from "../assets/samsungFlip.webp";

// TABLETS
import tablet_1 from "../assets/tablet.webp";
import honour from "../assets/honour.webp";
import lenevo from "../assets/lenevo.webp";
import tablet_2 from "../assets/tablet_A9.webp";
import ipad_1 from "../assets/ipad.webp";
import ipad_2 from "../assets/ipad_air.webp";
import amazon_fire1 from "../assets/amazon_fire.webp";
import amazon_fire2 from "../assets/amazon_fire2.webp";

// HEADPHONES
import JBL720 from "../assets/headphone.webp";
import sonyWH from "../assets/sony_headphones.webp";
import beatsPro from "../assets/beats_headphones.webp";
import airMax1 from "../assets/airMax_headphones.webp";
import airMax2 from "../assets/airMax_headphones2.webp";
import jLab from "../assets/jlab_headphones.webp";
import marshalHead from "../assets/marshall_headphones.webp";
import shokz from "../assets/shokz_headphones.webp";

// SMARTWATCHES
import HUAWEI from "../assets/HUAWEI.webp";
import apple_watch from "../assets/apple_watch.webp";
import reflex_watch from "../assets/reflex_watch.webp";
import samsung_watch from "../assets/samsung_watch.webp";
import garmin_watch from "../assets/garmin_watch.webp";
import fitbit_watch from "../assets/fitbit_watch.webp";
import samsung_watch2 from "../assets/samsung_watch2.webp";
import garmin_watch2 from "../assets/garmin_watch2.webp";

// ALL PRODUCTS 
const products = [
  // PHONES
  {
      id: "iphone-17",
      name: "iPhone 17 Pro Max",
      category: "phones",
      price: 1199.99,
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
      category: "phones",
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
      category: "phones",
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
      category: "phones",
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
      category: "phones",
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
      category: "phones",
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
      category: "phones",
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
      category: "phones",
      price: 1049.99,
      image: samsungFlip,
      specs: {
        screen: "6.7-inch Foldable AMOLED",
        storage: "256GB",
        camera: "50MP",
        battery: "3700mAh",
        os: "Android 15"
      }
    },



  // TABLETS
  {
     id: "samsung-tab-s11",
     name: "Samsung Galaxy Tab S11 Ultra 256GB Wi-Fi Tablet",
     category: "tablets",
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
     category: "tablets",
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
     category: "tablets",
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
     category: "tablets",
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
     category: "tablets",
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
     category: "tablets",
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
     category: "tablets",
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
     category: "tablets",
     price: 89.99,
     image: amazon_fire2,
     specs: {
       screen: "10.1-inch LCD",
       storage: "32GB",
       camera: "5MP",
       battery: "6000mAh",
       os: "Fire OS 10"
     }
   },

  // HEADPHONES
  {
      id: "jbl-720",
      name: "JBL Tune 720BT Over-Ear Wireless Headphones",
      category: "headphones",
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
      category: "headphones",
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
      category: "headphones",
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
      category: "headphones",
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
      category: "headphones",
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
      category: "headphones",
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
      category: "headphones",
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
      category: "headphones",
      price: 135.99,
      image: shokz,
      specs: {
        type: "Bone Conduction",
        connectivity: "Bluetooth 5.3",
        battery: "8h",
        noiseCancelling: "No",
        color: "Grey"
      }
    },

  // SMARTWATCHES
    {
      id: "huawei-fit3",
      name: "HUAWEI Watch Fit 3 Smart Watch - Grey",
      category: "smartwatches",
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
      category: "smartwatches",
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
      category: "smartwatches",
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
      category: "smartwatches",
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
      category: "smartwatches",
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
      category: "smartwatches",
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
      category: "smartwatches",
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
      category: "smartwatches",
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


// THE SEARCH PAGE COMPONENT
export default function SearchPage() {
  const navigate = useNavigate();
  const { search } = useLocation();


const query = new URLSearchParams(search).get("q")?.toLowerCase().trim() || "";

// FOR THE PLURALS
// "TABLET" -> "TABLETS"
const normalizedQuery = query.replace(/s$/, "");

const filtered = products.filter((p) => {
  const name = p.name.toLowerCase();
  const category = p.category.toLowerCase();

  return (
    name.includes(normalizedQuery) ||
    category.includes(normalizedQuery) ||
    category.includes(normalizedQuery + "s")
  );
});

  return (
    <div className="search-page">
      <h2 className="search-title">Searching for: "{query}"</h2>

      {filtered.length === 0 ? (
        <p className="no-results">Product not found</p>
      ) : (
        <div className="results-grid">
        
          {filtered.map((p) => (
  <div
    key={p.id}
    className="product-card"
    onClick={() => navigate(`/product/${p.id}`, { state: p })}
  >
    <div className="image-wrapper">
      <img src={p.image} alt={p.name} />
    </div>
  </div>
))}
        </div>
      )}
    </div>
  );
}