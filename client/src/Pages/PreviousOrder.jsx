import "../Styles/PreviousOrders.css";
import { useEffect, useMemo, useState } from "react";

function PreviousOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Orders");
  const [timeFilter, setTimeFilter] = useState("All Time");
  const [refundingOrderId, setRefundingOrderId] = useState(null);

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

  const handleRefund = async (orderId) => {
    try {
      setRefundingOrderId(orderId);

      const response = await fetch(`${API_URL}/orders/${orderId}/refund`, {
        method: "PUT",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Refund failed");
      }

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.order_id === orderId
            ? { ...order, status: "refunding" }
            : order
        )
      );
    } catch (error) {
      console.error("Refund error:", error);
      alert("Could not start refund.");
    } finally {
      setRefundingOrderId(null);
    }
  };

  const getStatusClass = (status) => {
    if (status === "completed" || status === "delivered") return "completed";
    if (status === "pending" || status === "processing" || status === "shipped")
      return "pending";
    if (status === "cancelled") return "cancelled";
    if (status === "refunding") return "refunding";
    return "";
  };

  const formatStatus = (status) => {
    if (!status) return "";
    return status.charAt(0).toUpperCase() + status.slice(1);
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
          className="searchh"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="order-filter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Orders</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="refunding">Refunding</option>
          <option value="cancelled">Cancelled</option>
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
                      {formatStatus(order.status)}
                    </span>
                  </td>
                  <td>
                    <button
                      className="view-button"
                      disabled={
                        refundingOrderId === order.order_id ||
                        order.status === "refunding"
                      }
                      onClick={() => handleRefund(order.order_id)}
                    >
                      {refundingOrderId === order.order_id ||
                      order.status === "refunding"
                        ? "Refunding..."
                        : "Refund"}
                    </button>
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