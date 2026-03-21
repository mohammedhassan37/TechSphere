import "../Styles/AdminProducts.css";
import { useEffect, useState } from "react";

import tv from "../assets/tv.webp";
import tcl_tv from "../assets/tcl_tv.webp";
import hisense_tv from "../assets/hisense_tv.webp";
import toshiba_tv from "../assets/toshiba_tv.webp";
import samsung_tv3 from "../assets/samsung_tv3.webp";
import samsung_tv2 from "../assets/samsung_tv2.webp";
import bush_tv from "../assets/bush_tv.webp";
import sony_tv from "../assets/sony_tv.webp";

import tablet from "../assets/tablet.webp";
import honour from "../assets/honour.webp";
import lenevo from "../assets/lenevo.webp";
import tablet_A9 from "../assets/tablet_A9.webp";
import ipad from "../assets/ipad.webp";
import ipad_air from "../assets/ipad_air.webp";
import amazon_fire from "../assets/amazon_fire.webp";
import amazon_fire2 from "../assets/amazon_fire2.webp";

import HUAWEI from "../assets/HUAWEI.webp";
import reflex_watch from "../assets/reflex_watch.webp";
import apple_watch from "../assets/apple_watch.webp";
import samsung_watch from "../assets/samsung_watch.webp";
import garmin_watch from "../assets/garmin_watch.webp";
import fitbit_watch from "../assets/fitbit_watch.webp";
import samsung_watch2 from "../assets/samsung_watch2.webp";
import garmin_watch2 from "../assets/garmin_watch2.webp";

import phone from "../assets/phone.webp";
import samsungGalaxy from "../assets/samsung galaxy.webp";
import motorola from "../assets/motorola.webp";
import iphone16 from "../assets/iphone 16.webp";
import googlePixel from "../assets/google pixel.webp";
import xiaomi from "../assets/xiaomi.webp";
import iphonePink from "../assets/iphonePink.webp";
import samsungFlip from "../assets/samsungFlip.webp";

import headphone from "../assets/headphone.webp";
import sonyWH from "../assets/sony_headphones.webp";
import beatsPro from "../assets/beats_headphones.webp";
import airMax1 from "../assets/airMax_headphones.webp";
import airMax2 from "../assets/airMax_headphones2.webp";
import jLab from "../assets/jlab_headphones.webp";
import marshalHead from "../assets/marshall_headphones.webp";
import shokz from "../assets/shokz_headphones.webp";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setError("");

      const response = await fetch(`${API_URL}/products`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
      console.log("Products:", data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Could not load products.");
    }
  };

  const imageMap = {
    tv,
    tcl_tv,
    hisense_tv,
    toshiba_tv,
    samsung_tv3,
    samsung_tv2,
    bush_tv,
    sony_tv,

    tablet_1: tablet,
    honour,
    lenevo,
    tablet_2: tablet_A9,
    ipad_1: ipad,
    ipad_2: ipad_air,
    amazon_fire1: amazon_fire,
    amazon_fire2,

    HUAWEI,
    reflex_watch,
    apple_watch,
    samsung_watch,
    garmin_watch,
    fitbit_watch,
    samsung_watch2,
    garmin_watch2,

    phone,
    samsungGalaxy,
    motorola,
    iphone16,
    googlePixel,
    xiaomi,
    iphonePink,
    samsungFlip,

    JBL720: headphone,
    sonyWH,
    beatsPro,
    airMax1,
    airMax2,
    jLab,
    marshalHead,
    shokz,
  };

  const getStatusClass = (status) => {
    if (status === "In Stock") return "in-stock";
    if (status === "Low Stock") return "low-stock";
    if (status === "Running Out") return "running-out";
    if (status === "Out of Stock") return "out-of-stock";
    return "";
  };

  const getProductImage = (productImg) => {
    return imageMap[productImg] || phone;
  };

  return (
    <div className="admin-products">
      <div className="admin-products-header">
        <h1>Manage Products</h1>
        <button className="add-product">+ Add Product</button>
      </div>

      <p className="admin-products-info">
        View and manage all products in your store
      </p>

      {error && <p>{error}</p>}

      <div className="orders-features">
        <input
          type="text"
          placeholder="Search by Product Name or Category..."
          className="search"
        />

        <select className="order-filter">
          <option>All Products</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Running Out</option>
          <option>Out of Stock</option>
        </select>

        <select className="order-filter">
          <option>All Categories</option>
          <option>Phones</option>
          <option>Headphones</option>
          <option>Smartwatches</option>
          <option>TVs</option>
          <option>Tablets</option>
        </select>
      </div>

      <div className="products-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.product_id}>
                <td className="product-cell">
                  <img
                    src={getProductImage(product.product_img)}
                    alt={product.product_name}
                    onError={(e) => {
                      e.target.src = phone;
                    }}
                  />
                  {product.product_name}
                </td>
                <td>{product.product_type}</td>
                <td>£{product.product_price}</td>
                <td>{product.product_quantity}</td>
                <td>
                  <span
                    className={`status ${getStatusClass(product.stock_status)}`}
                  >
                    {product.stock_status}
                  </span>
                </td>
                <td>
                  <button className="edit-button">Update Stock</button>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProducts;