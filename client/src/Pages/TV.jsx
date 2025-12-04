import { useNavigate } from "react-router-dom";


import tv from "../assets/tv.webp";
import tcl_tv from "../assets/tcl_tv.webp";
import hisense from "../assets/hisense_tv.webp";
import toshiba from "../assets/toshiba_tv.webp";
import samsung_tv2 from "../assets/samsung_tv2.webp"
import samsung_tv3 from "../assets/samsung_tv3.webp"
import bush_tv from "../assets/bush_tv.webp"
import sony_tv from "../assets/sony_tv.webp"


const tvProducts = [
  {
    id: "samsung-50qled",
    name: "Samsung 50 Inch Smart 4k QLED TV",
    price: 399.0,
    image: tv,
    specs: {
      screen: "50-inch QLED",
      resolution: "4K UHD",
      smart: "Yes",
      ports: "HDMI x3, USB x2",
      os: "Tizen"
    }
  },
  {
    id: "tcl-55p6k",
    name: "TCL 55 Inch 55P6K Smart 4K UHD HDR DLED TV",
    price: 259.99,
    image: tcl_tv,
    specs: {
      screen: "55-inch DLED",
      resolution: "4K UHD HDR",
      smart: "Yes",
      ports: "HDMI x3, USB x1",
      os: "Roku TV"
    }
  },
  {
    id: "hisense-75uhd",
    name: "Hisense 75 Inch Smart 4K UHD HDR LED Freely TV",
    price: 499.99,
    image: hisense,
    specs: {
      screen: "75-inch LED",
      resolution: "4K UHD HDR",
      smart: "Yes",
      ports: "HDMI x4, USB x2",
      os: "VIDAA U5"
    }
  },
  {
    id: "toshiba-65hdr",
    name: "Toshiba 65Inch Smart 4K UHD HDR DLED Freely TV",
    price: 319.99,
    image: toshiba,
    specs: {
      screen: "65-inch DLED",
      resolution: "4K UHD HDR",
      smart: "Yes",
      ports: "HDMI x3, USB x2",
      os: "Fire TV"
    }
  },
  {
    id: "samsung-43uhd",
    name: "Samsung 43 Inch Smart 4K UHD HDR LED TV",
    price: 229.99,
    image: samsung_tv3,
    specs: {
      screen: "43-inch LED",
      resolution: "4K UHD HDR",
      smart: "Yes",
      ports: "HDMI x3, USB x2",
      os: "Tizen"
    }
  },
  {
    id: "samsung-24hd",
    name: "Samsung 24 Inch Smart Full HD HDR LED TV",
    price: 149.99,
    image: samsung_tv2,
    specs: {
      screen: "24-inch LED",
      resolution: "Full HD HDR",
      smart: "Yes",
      ports: "HDMI x2, USB x1",
      os: "Tizen"
    }
  },
  {
    id: "bush-24hd",
    name: "Bush 24 Inch H236V6D HD Ready LED Freeview TV",
    price: 109.99,
    image: bush_tv,
    specs: {
      screen: "24-inch LED",
      resolution: "HD Ready",
      smart: "No",
      ports: "HDMI x1, USB x1",
      os: "None"
    }
  },
  {
    id: "sony-50ultra",
    name: "Sony Bravia 3 50inch LED HDR 4K Ultra HD Google TV",
    price: 569.99,
    image: sony_tv,
    specs: {
      screen: "50-inch LED",
      resolution: "4K UHD HDR",
      smart: "Yes",
      ports: "HDMI x4, USB x3",
      os: "Google TV"
    }
  }
];


function TV() {
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
      <h1>TVs</h1>
      <div className="product_container">
        {tvProducts.map((product) => (
          <div
            key={product.id}
            className="product_cards"
            onClick={() => openProduct(product)}  // CLICKING LEADS TO PRODUCT PAGE
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




export default TV;