import { useNavigate } from "react-router-dom";
import "../Styles/Admin.css";

function Admin() {
    const navigate = useNavigate();

    const stats = [
    { title: "Manage Inventory",label: "Total Products", value: 67, icon: "📦", path: "/admin/total-products" },
    { title: "Manage Customers",label: "Total Customers", value: 69, icon: "👥", path: "/admin/total-customers" },
    { title: "Manage Orders",label: "Pending Orders", value: 9, icon: "🛒", path: "/admin/pending-orders" },
    { title: "Manage Revenue",label: "Total Revenue", value: "£6769.69", icon: "📈", path: "/admin/total-revenue" }
  ];

  return (
    <div className="admin-dashboard">

      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-info">
        Overview of your e-commerce operations
      </p>

      <div className="dashboard-statistics">
        {stats.map((stat) => (
          <div className="dashboard-card clickable" key={stat.label}
            onClick={() => navigate(stat.path)}>
            <div>
              {stat.title && <p className="card-title">{stat.title}</p>}
              <p className="card-info">{stat.label}</p>
              <h2 className="card-value">{stat.value}</h2>
            </div>

            <div className="icon">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="inventory-warnings">
        <h3>⚠ Inventory Alerts</h3>
        <div className="alerts-info">

  <div className="alert-group">
    <p className="alert-title">Out of Stock (1)</p>

    <div className="alert-item">
      <span>HUAWEI Watch Fit 3</span>
      <span className="alert danger">Out of Stock</span>
    </div>
  </div>

  <div className="alert-group">
    <p className="alert-title">Low Stock (1)</p>

    <div className="alert-item">
      <span>Apple AirPods Max</span>
      <span className="alert warning">14 left</span>
    </div>
  </div>

  <div className="alert-group">
    <p className="alert-title">Low Stock (1)</p>

    <div className="alert-item">
      <span>Samsung 24 Inch Smart LED TV</span>
      <span className="alert warning">8 left</span>
    </div>
  </div>

  <p 
    className="manage-link"
    onClick={() => navigate("/admin/total-products")}>
    Manage Inventory →
  </p>

</div>
        
      </div>
    </div>
  );
}

export default Admin;