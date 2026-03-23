import "../Styles/AdminOrders.css";
import { useNavigate } from "react-router-dom";
function AdminOrders(){
    const navigate = useNavigate();
    const orders = [
    {
      id: "ORD-001",
      customer: "Alice Smith",
      items: "3 item(s)",
      total: "$1799.99",
      date: "Mar 5, 2026",
      status: "pending",
    },
    {
      id: "ORD-002",
      customer: "Bob Jones",
      items: "2 item(s)",
      total: "$199.99",
      date: "Mar 12, 2026",
      status: "processing",
    },
    {
      id: "ORD-003",
      customer: "Charlie Davies",
      items: "1 item(s)",
      total: "$149.99",
      date: "Mar 18, 2026",
      status: "delivered",
    },
    {
      id: "ORD-004",
      customer: "Henry Brown",
      items: "3 item(s)",
      total: "$1199.99",
      date: "Mar 1, 2026",
      status: "shipped",
    },

    {
      id: "ORD-005",
      customer: "Jane Williams",
      items: "4 item(s)",
      total: "$2999.99",
      date: "Mar 28, 2026",
      status: "pending",
    },
    ];

    return(
        <>

      <div className="management">
        <button
  className="back-button"
  onClick={() => navigate("/admin")}
>
  ← Back
</button>
        <h2>Order Management</h2>
        <p className="management-info">View and process customer orders</p>

        <div className="orders-features">
          <input
            type="text"
            placeholder="Search by order ID or customer..." className="search"/>
            
          <select className="order-filter">
            <option>All Orders</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>

        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.items}</td>
                <td>{order.total}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`order-status ${order.status}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button className="order-button">Process</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        </>
    )
}

export default AdminOrders;