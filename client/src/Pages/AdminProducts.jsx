import "../Styles/AdminProducts.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function AdminProducts() {
  const navigate = useNavigate();

  const emptyProduct = {
    product_id: "",
    product_name: "",
    product_price: "",
    product_type: "Phones",
    product_quantity: "",
    product_img: "",
  };

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showInfo, setShowInfo] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editProduct, setEditProduct] = useState(emptyProduct);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Products");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  useEffect(() => {
    fetchProducts();
  }, []);

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

  const fetchProducts = async () => {
    try {
      setError("");

      const response = await fetch(`${API_BASE_URL}/products`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Could not load products.");
    }
  };

  const resetForm = () => {
    setEditProduct(emptyProduct);
    setShowEditForm(false);
    setShowInfo(true);
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

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.product_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.product_type?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All Products" ||
        product.stock_status === statusFilter;

      const matchesCategory =
        categoryFilter === "All Categories" ||
        product.product_type === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [products, searchTerm, statusFilter, categoryFilter]);

  const handleAddClick = () => {
    setSuccessMessage("");
    setError("");

    if (showEditForm) {
      setShowEditForm(false);
      setShowInfo(true);
      return;
    }

    if (!showInfo) {
      setShowInfo(true);
      return;
    }

    setEditProduct(emptyProduct);
    setShowInfo(false);
  };

  const handleEditClick = (product) => {
    setSuccessMessage("");
    setError("");

    setEditProduct({
      product_id: product.product_id,
      product_name: product.product_name || "",
      product_price: product.product_price || "",
      product_type: product.product_type || "Phones",
      product_quantity: product.product_quantity || "",
      product_img: product.product_img || "",
    });

    setShowInfo(false);
    setShowEditForm(true);
  };

  const handleSubmit = async () => {
    try {
      setError("");
      setSuccessMessage("");

      if (
        !editProduct.product_name.trim() ||
        !editProduct.product_price ||
        !editProduct.product_type ||
        editProduct.product_quantity === ""
      ) {
        setError("Please fill in all required fields.");
        return;
      }

      const payload = {
        product_type: editProduct.product_type,
        product_name: editProduct.product_name,
        product_quantity: Number(editProduct.product_quantity),
        product_img: editProduct.product_img,
        product_price: Number(editProduct.product_price),
      };

      let response;

      if (showEditForm) {
        response = await fetch(
          `${API_BASE_URL}/admin/products/${editProduct.product_id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(payload),
          }
        );
      } else {
        response = await fetch(`${API_BASE_URL}/admin/products`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        });
      }

      const contentType = response.headers.get("content-type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || `Request failed with status ${response.status}`);
      }

      if (!response.ok) {
        throw new Error(data.message || "Request failed.");
      }

      setSuccessMessage(
        showEditForm ? "Product updated successfully." : "Product added successfully."
      );

      await fetchProducts();
      resetForm();
    } catch (error) {
      console.error("Error saving product:", error);
      setError(error.message || "Could not save product.");
    }
  };

  const handleDelete = async (productId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      setError("");
      setSuccessMessage("");

      const response = await fetch(`${API_BASE_URL}/admin/products/${productId}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete product.");
      }

      setSuccessMessage("Product deleted successfully.");
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      setError(error.message || "Could not delete product.");
    }
  };

  return (
    <div className="admin-products">
      <div className="admin-products-header">
        <button className="back-button" onClick={() => navigate("/admin")}>
          ← Back
        </button>

        <h1>Manage Products</h1>

        <button className="add-product" onClick={handleAddClick}>
          {showEditForm ? "← Back" : showInfo ? "+ Add Product" : "← Back"}
        </button>
      </div>

      <p className="admin-products-info">
        {showEditForm
          ? "Update product details below"
          : !showInfo
          ? "Enter the new product details below"
          : "View and manage all products in your store"}
      </p>

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      {showInfo && !showEditForm && (
        <>
          <div className="orders-features">
            <input
              type="text"
              placeholder="Search by Product Name or Category..."
              className="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="order-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All Products</option>
              <option>In Stock</option>
              <option>Low Stock</option>
              <option>Running Out</option>
              <option>Out of Stock</option>
            </select>

            <select
              className="order-filter"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
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
                {filteredProducts.map((product) => (
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
                    <td>£{Number(product.product_price).toFixed(2)}</td>
                    <td>{product.product_quantity}</td>
                    <td>
                      <span
                        className={`status ${getStatusClass(product.stock_status)}`}
                      >
                        {product.stock_status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => handleEditClick(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(product.product_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredProducts.length === 0 && (
                  <tr>
                    <td colSpan="6">No products found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="stock-history">
            <h2>Recent Stock Transactions History</h2>
            <h3>Track incoming and outgoing Transactions</h3>

            <div className="stock-list">
              <div className="stock-item">
                <div>
                  <p className="stock-product">iPhone 17 Pro Max</p>
                  <p className="stock-info">Stock Added</p>
                  <span className="stock-date">13 March 2026, 11:00 AM</span>
                </div>
                <div className="stock-change positive">+49</div>
              </div>

              <div className="stock-item">
                <div>
                  <p className="stock-product">Samsung Galaxy S25 Ultra</p>
                  <p className="stock-info">Order Placed</p>
                  <span className="stock-date">12 March 2026, 02:50 PM</span>
                </div>
                <div className="stock-change negative">-1</div>
              </div>

              <div className="stock-item">
                <div>
                  <p className="stock-product">Apple AirPods Max</p>
                  <p className="stock-info">Restocked</p>
                  <span className="stock-date">15 March 2026, 07:30 AM</span>
                </div>
                <div className="stock-change positive">+28</div>
              </div>

              <div className="stock-item">
                <div>
                  <p className="stock-product">HUAWEI Watch Fit 3</p>
                  <p className="stock-info">Order Placed</p>
                  <span className="stock-date">18 March 2026, 11:50 PM</span>
                </div>
                <div className="stock-change negative">-1</div>
              </div>

              <div className="stock-item">
                <div>
                  <p className="stock-product">
                    Samsung 24 Inch Smart Full HD HDR LED TV
                  </p>
                  <p className="stock-info">Restocked</p>
                  <span className="stock-date">15 March 2026, 07:30 AM</span>
                </div>
                <div className="stock-change positive">+15</div>
              </div>

              <div className="stock-item">
                <div>
                  <p className="stock-product">Reflex Active Black Smart Watch</p>
                  <p className="stock-info">Stock Added</p>
                  <span className="stock-date">15 March 2026, 08:30 AM</span>
                </div>
                <div className="stock-change positive">+20</div>
              </div>
            </div>
          </div>
        </>
      )}

      {(!showInfo || showEditForm) && (
        <div className="add-product-form">
          <div className="add-product-card">
            <div className="form full-width">
              <label>Product Name *</label>
              <input
                type="text"
                value={editProduct.product_name}
                placeholder="Enter a product name"
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    product_name: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-row">
              <div className="form">
                <label>Price (£)</label>
                <input
                  type="number"
                  value={editProduct.product_price}
                  placeholder="Enter product price"
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      product_price: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form">
                <label>Category</label>
                <select
                  value={editProduct.product_type}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      product_type: e.target.value,
                    })
                  }
                >
                  <option>Phones</option>
                  <option>Headphones</option>
                  <option>Smartwatches</option>
                  <option>TVs</option>
                  <option>Tablets</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form">
                <label>Stock</label>
                <input
                  type="number"
                  value={editProduct.product_quantity}
                  placeholder="Enter stock quantity"
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      product_quantity: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="form">
              <label>Image Key</label>
              <input
                type="text"
                value={editProduct.product_img}
                placeholder="e.g. iphone16"
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    product_img: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="add-product-actions">
            <button
              type="button"
              className="cancel-product-button"
              onClick={resetForm}
            >
              Cancel
            </button>

            <button className="save-product-button" onClick={handleSubmit}>
              {showEditForm ? "Save Changes" : "Add Product"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProducts;