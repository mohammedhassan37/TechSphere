import "../Styles/AdminOrders.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminOrders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Orders");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/admin/orders", {
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Failed to fetch orders");
      }

      setOrders(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(orderId, newStatus) {
    try {
      setUpdatingId(orderId);

      const response = await fetch(`/admin/orders/${orderId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Failed to update status");
      }

      setOrders((prev) =>
        prev.map((order) =>
          order.order_id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setUpdatingId(null);
    }
  }

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const orderCode = (order.order_code || "").toLowerCase();
      const customer = (order.customer || "").toLowerCase();
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        orderCode.includes(search) || customer.includes(search);

      const matchesStatus =
        statusFilter === "All Orders" ||
        (order.status || "").toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, statusFilter]);

  function formatDate(dateString) {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="management">
      <button className="back-button" onClick={() => navigate("/admin")}>
        ← Back
      </button>

      <h2>Order Management</h2>
      <p className="management-info">View and process customer orders</p>

      <div className="orders-features">
        <input
          type="text"
          placeholder="Search by order ID or customer..."
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
          <option>Pending</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>
      </div>

      {loading && <p>Loading orders...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
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
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.order_id}>
                  <td>{order.order_code}</td>
                  <td>{order.customer}</td>
                  <td>{order.items} item(s)</td>
                  <td>£{Number(order.total_amount).toFixed(2)}</td>
                  <td>{formatDate(order.order_date)}</td>
                  <td>
                    <span className={`order-status ${order.status}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <select
                      className="order-button"
                      value={order.status}
                      disabled={updatingId === order.order_id}
                      onChange={(e) =>
                        updateStatus(order.order_id, e.target.value)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminOrders;