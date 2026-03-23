import "../Styles/AdminCustomers.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminCustomers() {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    customer_id: null,
    fullName: "",
    email: "",
    phoneNum: "",
    location: "",
    totalOrders: "",
    totalSpent: ""
  });

  const [showForm, setShowForm] = useState(false);
  const [editCustomerId, setEditCustomerId] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/customers", {
        method: "GET",
        credentials: "include",
      });

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        setMessage("Backend route not being reached properly");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to load customers");
        return;
      }

      const formattedCustomers = data.map((customer) => ({
        customer_id: customer.customer_id,
        fullName: customer.customer_name || "",
        email: customer.customer_email || "",
        phoneNum: customer.customer_phone || "",
        location: customer.customer_location || "",
        totalOrders: Number(customer.total_orders) || 0,
        totalSpent: `£${Number(customer.total_spent).toFixed(2)}`
      }));

      setCustomers(formattedCustomers);
    } catch (error) {
      console.error("Error fetching customers:", error);
      setMessage("Server error");
    }
  };

  const editCustomer = (customer) => {
    setFormData(customer);
    setEditCustomerId(customer.customer_id);
    setShowForm(true);
  };

  const deleteCustomer = async (customerId) => {
    const confirmed = window.confirm("Are you sure you want to delete this customer?");
    if (!confirmed) return;

    try {
      const response = await fetch(`http://localhost:5000/admin/customers/${customerId}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to delete customer");
        return;
      }

      setMessage("Customer deleted successfully");
      await fetchCustomers();
    } catch (error) {
      console.error("Error deleting customer:", error);
      setMessage("Server error");
    }
  };

  const updateField = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      if (editCustomerId !== null) {
        const response = await fetch(
          `http://localhost:5000/admin/customers/${formData.customer_id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              fullName: formData.fullName,
              email: formData.email,
              phoneNum: formData.phoneNum,
              location: formData.location,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          setMessage(data.message || "Failed to update customer");
          return;
        }

        setMessage("Customer updated successfully");
      }

      setShowForm(false);
      setEditCustomerId(null);
      setFormData({
        customer_id: null,
        fullName: "",
        email: "",
        phoneNum: "",
        location: "",
        totalOrders: "",
        totalSpent: ""
      });

      await fetchCustomers();
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Server error");
    }
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-customers">
      <div className="admin-customers-header">
        <button className="back-button" onClick={() => navigate("/admin")}>
          ← Back
        </button>
        <h1>Manage Customers</h1>
      </div>

      <p className="admin-customers-info">
        View and manage customers:
      </p>

      {message && <p>{message}</p>}

      <div className="customers-features">
        <input
          type="text"
          placeholder="Search by Customer Name or Email.."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {showForm && (
        <div className="add-customer-card">
          <form className="customer-form" onSubmit={submitForm}>
            <label className="customer-form-heading">
              Edit Row
            </label>

            <label>Full name *</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={updateField}
              required
            />

            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={updateField}
              required
            />

            <label>Phone Number *</label>
            <input
              type="tel"
              name="phoneNum"
              placeholder="Enter Phone Number"
              value={formData.phoneNum}
              onChange={updateField}
              required
            />

            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              value={formData.location}
              onChange={updateField}
            />

            <label>Total Orders</label>
            <input
              type="number"
              name="totalOrders"
              value={formData.totalOrders}
              readOnly
            />

            <label>Total Spent</label>
            <input
              type="text"
              name="totalSpent"
              value={formData.totalSpent}
              readOnly
            />

            <div className="form-button">
              <button type="submit" className="form-confirm-button">
                Confirm Edit
              </button>
              <button
                type="button"
                className="form-cancel-button"
                onClick={() => {
                  setShowForm(false);
                  setEditCustomerId(null);
                  setFormData({
                    customer_id: null,
                    fullName: "",
                    email: "",
                    phoneNum: "",
                    location: "",
                    totalOrders: "",
                    totalSpent: ""
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {!showForm && (
        <div className="customers-container">
          <table className="customers-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Location</th>
                <th>Total Orders</th>
                <th>Total Spent</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.customer_id}>
                  <td>{customer.fullName}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phoneNum}</td>
                  <td>{customer.location}</td>
                  <td>{customer.totalOrders}</td>
                  <td>{customer.totalSpent}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => editCustomer(customer)}
                    >
                      Edit Row
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => deleteCustomer(customer.customer_id)}
                    >
                      Delete Row
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminCustomers;