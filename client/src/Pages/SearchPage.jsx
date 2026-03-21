import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/SearchPage.css";


export default function SearchPage() {
  const [results, setResults] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();

  const q = new URLSearchParams(search).get("q");

  useEffect(() => {
    async function load() {
      const res = await fetch(`https://techsphere-8ec2.onrender.com/search?q=${q}`);
      const data = await res.json();
      setResults(data);
    }
    load();
  }, [q]);

  return (
    <div className="search-page">
      <h2 className="search-title">Searching for: "{q}"</h2>



      {results.length === 0 ? (
        <p className="no-results">Products not found: </p>
      ) : (
        <div className="results-grid">
          {results.map((p) => (
            <div
              key={p.product_id}
              className="product-card"
              onClick={() => navigate(`/product/${p.product_id}`)}
            >
              <div className="image-wrapper">
                <img
                  src={imageMap[p.product_img]}
                  alt={p.product_name}
                />
              </div>



              <div className="card-info">
                <h3>{p.product_name}</h3>
                <p className="price">£{p.product_price}</p>




                <button
                  className="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${p.product_id}`);
                  }}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



import phone from "../assets/phone.webp";
import samsungGalaxy from "../assets/samsung galaxy.webp";
import motorola from "../assets/motorola.webp";
import iphone16 from "../assets/iphone 16.webp";
import googlePixel from "../assets/google pixel.webp";
import xiaomi from "../assets/xiaomi.webp";
import iphonePink from "../assets/iphonePink.webp";
import samsungFlip from "../assets/samsungFlip.webp";


import tv from "../assets/tv.webp";
import tcl_tv from "../assets/tcl_tv.webp";
import hisense_tv from "../assets/hisense_tv.webp";
import toshiba_tv from "../assets/toshiba_tv.webp";
import samsung_tv3 from "../assets/samsung_tv3.webp";
import samsung_tv2 from "../assets/samsung_tv2.webp";
import bush_tv from "../assets/bush_tv.webp";
import sony_tv from "../assets/sony_tv.webp";


import tablet_1 from "../assets/tablet.webp";
import lenevo from "../assets/lenevo.webp";
import honour from "../assets/honour.webp";
import tablet_2 from "../assets/tablet_A9.webp";
import ipad_1 from "../assets/ipad.webp";
import ipad_2 from "../assets/ipad_air.webp";
import amazon_fire1 from "../assets/amazon_fire.webp";
import amazon_fire2 from "../assets/amazon_fire2.webp";


import apple_watch from "../assets/apple_watch.webp";
import samsung_watch from "../assets/samsung_watch.webp";
import samsung_watch2 from "../assets/samsung_watch2.webp";
import garmin_watch from "../assets/garmin_watch.webp";
import garmin_watch2 from "../assets/garmin_watch2.webp";
import reflex_watch from "../assets/reflex_watch.webp";
import fitbit_watch from "../assets/fitbit_watch.webp";
import HUAWEI from "../assets/HUAWEI.webp";


import JBL720 from "../assets/headphone.webp";
import sonyWH from "../assets/sony_headphones.webp";
import beatsPro from "../assets/beats_headphones.webp";
import airMax1 from "../assets/airMax_headphones.webp";
import airMax2 from "../assets/airMax_headphones2.webp";
import jLab from "../assets/jlab_headphones.webp";
import marshalHead from "../assets/marshall_headphones.webp";
import shokz from "../assets/shokz_headphones.webp";


export const imageMap = {
 
    phone,
    samsungGalaxy,
    motorola,
    iphone16,
    googlePixel,
    xiaomi,
    iphonePink,
    samsungFlip,

    tv,
    tcl_tv,
    samsung_tv3,
    samsung_tv2,
    bush_tv,
    sony_tv,
    hisense_tv,
    toshiba_tv,

    tablet_1,
    lenevo,
    honour,
    tablet_2,
    ipad_1,
    ipad_2,
    amazon_fire1,
    amazon_fire2,

    apple_watch,
    samsung_watch,
    samsung_watch2,
    garmin_watch,
    garmin_watch2,
    reflex_watch,
    fitbit_watch,
    HUAWEI,

    
    JBL720,
    sonyWH,
    beatsPro,
    airMax1,
    airMax2,
    jLab,
    marshalHead,
    shokz,
};


<Link to={`/${slug}`}>
              <button>{p.product_type}</button>
            </Link>
            