import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import "../Styles/Admin.css";

function Admin() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const stats = [
    {
      title: "Manage Inventory",
      label: "Total Products",
      value: 40,
      icon: "📦",
      path: "/admin/total-products",
    },
    {
      title: "Manage Customers",
      label: "Total Customers",
      value: 6,
      icon: "👥",
      path: "/admin/total-customers",
    },
    {
      title: "Manage Orders",
      label: "Pending Orders",
      value: 10,
      icon: "🛒",
      path: "/admin/pending-orders",
    },
    {
      title: "Manage Revenue",
      label: "Total Revenue",
      value: "£70016.00",
      icon: "📈",
      path: "/admin/total-revenue",
    },
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setError("");

      const response = await fetch("/admin/inventory-alerts", {
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch products");
      }

      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Could not load inventory alerts.");
    }
  };

  const { outOfStockProducts, lowStockProducts } = useMemo(() => {
    const outOfStock = products.filter((p) => p.stock_status === "out");
    const lowStock = products.filter((p) => p.stock_status === "low");

    return {
      outOfStockProducts: outOfStock,
      lowStockProducts: lowStock,
    };
  }, [products]);

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-info">Overview of your e-commerce operations</p>

      <div className="dashboard-statistics">
        {stats.map((stat) => (
          <div
            className="dashboard-card clickable"
            key={stat.label}
            onClick={() => navigate(stat.path)}
          >
            <div>
              {stat.title && <p className="card-title">{stat.title}</p>}
              <p className="card-info">{stat.label}</p>
              <h2 className="card-value">{stat.value}</h2>
            </div>

            <div className="icon">{stat.icon}</div>
          </div>
        ))}
      </div>

      <div className="inventory-warnings">
        <h3>⚠ Inventory Alerts</h3>

        <div className="alerts-info">
          {error && <p className="error-message">{error}</p>}

          {!error &&
            outOfStockProducts.length === 0 &&
            lowStockProducts.length === 0 && (
              <p className="no-alerts">
                Good news — all products are stocked at healthy levels.
              </p>
            )}

          {!error && outOfStockProducts.length > 0 && (
            <div className="alert-group">
              <p className="alert-title">
                Out of Stock ({outOfStockProducts.length})
              </p>

              {outOfStockProducts.map((product) => (
                <div className="alert-item" key={product.product_id}>
                  <span>{product.product_name}</span>
                  <span className="alert danger">Currently unavailable</span>
                </div>
              ))}
            </div>
          )}

          {!error && lowStockProducts.length > 0 && (
            <div className="alert-group">
              <p className="alert-title">
                Low Stock ({lowStockProducts.length})
              </p>

              {lowStockProducts.map((product) => (
                <div className="alert-item" key={product.product_id}>
                  <span>{product.product_name}</span>
                  <span className="alert warning">
                    Only {product.product_quantity} left
                  </span>
                </div>
              ))}
            </div>
          )}

          <p
            className="manage-link"
            onClick={() => navigate("/admin/total-products")}
          >
            Manage Inventory →
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admin;