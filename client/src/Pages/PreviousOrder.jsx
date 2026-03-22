import "../Styles/PreviousOrders.css";
import { useEffect, useMemo, useState } from "react";

function PreviousOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Orders");
  const [timeFilter, setTimeFilter] = useState("All Time");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setError("");

      const response = await fetch(`${API_URL}/my-orders`, {
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Failed to fetch orders: ${response.status}`);
      }

      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Could not load orders.");
    }
  };

  const getStatusClass = (status) => {
    if (status === "Completed") return "completed";
    if (status === "Pending") return "pending";
    if (status === "Cancelled") return "cancelled";
    return "";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch = String(order.order_id)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All Orders" || order.status === statusFilter;

      let matchesTime = true;
      const orderDate = new Date(order.order_date);
      const now = new Date();

      if (timeFilter === "Today") {
        matchesTime = orderDate.toDateString() === now.toDateString();
      } else if (timeFilter === "This Week") {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
        matchesTime = orderDate >= oneWeekAgo && orderDate <= now;
      } else if (timeFilter === "This Month") {
        matchesTime =
          orderDate.getMonth() === now.getMonth() &&
          orderDate.getFullYear() === now.getFullYear();
      }

      return matchesSearch && matchesStatus && matchesTime;
    });
  }, [orders, searchTerm, statusFilter, timeFilter]);

  return (
    <div className="previous-orders">
      <div className="previous-orders-header">
        <h1>Previous Orders</h1>
      </div>

      <p className="previous-orders-info">
        View and manage all your previous orders
      </p>

      {error && <p>{error}</p>}

      <div className="orders-features">
        <input
          type="text"
          placeholder="Search by Order ID..."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="order-filter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Orders</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>

        <select
          className="order-filter"
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
        >
          <option>All Time</option>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      <div className="orders-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.order_id}>
                  <td>#{order.order_id}</td>
                  <td>{formatDate(order.order_date)}</td>
                  <td>£{Number(order.total_amount).toFixed(2)}</td>
                  <td>
                    <span className={`status ${getStatusClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button className="view-button">View</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PreviousOrders;