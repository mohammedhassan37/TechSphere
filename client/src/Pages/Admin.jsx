import { useNavigate } from "react-router-dom";
import "../Styles/Admin.css";

function Admin() {
    const navigate = useNavigate();

    const stats = [
    { label: "Total Products", value: 67, icon: "📦", path: "/admin/total-products" },
    { label: "Total Customers", value: 69, icon: "👥", path: "/admin/total-customers" },
    { label: "Pending Orders", value: 9, icon: "🛒", path: "/admin/pending-orders" },
    { label: "Total Revenue", value: "£6769.69", icon: "📈", path: "/admin/total-revenue" }
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
        <p>??????????????????????????????</p>
        
      </div>

    </div>
  );
}

export default Admin;