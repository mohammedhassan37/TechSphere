import "../Styles/AdminCustomers.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function AdminCustomers() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([
    {
      fullName: "Alice Smith",
      email: "alice123@gmail.com",
      phoneNum: "07794892293",
      location: "Birmingham",
      totalOrders: 4,
      totalSpent: "£999.99"
    },
    {
      fullName: "Bob Jones",
      email: "bob2@outlook.com",
      phoneNum: "07754178357",
      location: "London",
      totalOrders: 2,
      totalSpent: "£301.98"
    },
    {
      fullName: "Charlie Davies",
      email: "charlieD@outlook.com",
      phoneNum: "07355825797",
      location: "Birmingham",
      totalOrders: 1,
      totalSpent: "£1099.99"
    },
    {
      fullName: "John Williams",
      email: "johnW@gmail.com",
      phoneNum: "07355825797",
      location: "Belfast",
      totalOrders: 2,
      totalSpent: "£149.99"
    },
    {
      fullName: "Jane Williams",
      email: "jane87@outlook.com",
      phoneNum: "07275921650",
      location: "Glasgow",
      totalOrders: 1,
      totalSpent: "£229.99"
    },
    {
      fullName: "Henry Brown",
      email: "henry6@yahoo.com",
      phoneNum: "0748928492",
      location: "Manchester",
      totalOrders: 3,
      totalSpent: "£599.97"
    }
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNum: "",
    location: "",
    totalOrders: "",
    totalSpent: ""
  });

  const [showForm, setShowForm] = useState(false);

  const [editCustomerIndex, setEditCustomerIndex] = useState(null);

  const editCustomer = (index) => {
    setFormData(customers[index]);
    setEditCustomerIndex(index);
    setShowForm(true);
  };
  
  const deleteCustomer = (deleteRow) => {
  const updatedCustomers = customers.filter((_, index) => index != deleteRow);
  setCustomers(updatedCustomers);
  };

  const updateField  = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    const submitForm = (e) => {
    e.preventDefault();

    if (editCustomerIndex !== null) {
      const updatedCustomers = [...customers];
      updatedCustomers[editCustomerIndex] = formData;
      setCustomers(updatedCustomers);
    } else {
      setCustomers([...customers, formData]);
    }

    setShowForm(false);
    setEditCustomerIndex(null);
    setFormData({
      fullName: "",
      email: "",
      phoneNum: "",
      location: "",
      totalOrders: "",
      totalSpent: ""
    });
  };

    return(
      <div className="admin-customers">
        <div className="admin-customers-header">
          <button className="back-button" onClick={() => navigate("/admin")}> ← Back
          </button>
          <h1>Manage Customers</h1>
          <button className="add-customer" onClick={() => setShowForm(true)}>+ Add Customer</button>
      </div>

      <p className="admin-customers-info">
        View and manage customers:
      </p>
      
      <div className="customers-features">
        <input type="text" placeholder="Search by Customer Name or Email.." className="search"/>
      </div>
      
      {showForm && (
        <div className="add-customer-card">
          <form className="customer-form" onSubmit={submitForm}>
            <label className ="customer-form-heading">{editCustomerIndex == null ? "Add a customer:" : "Edit Row"}</label>
            <label>Full name *</label>
            <input type="text" name="fullName" placeholder="Enter Full Name" 
            value={formData.fullName} onChange={updateField} required/>

            <label>Email *</label>
            <input type="email" name="email" placeholder="Enter Email"
            value={formData.email} onChange={updateField} required/>

            <label>Phone Number *</label>
            <input type="tel" name="phoneNum" placeholder="Enter Phone Number"
            value={formData.phoneNum}onChange={updateField} required/>

            <label>Location</label>
            <input type="text" name="location" placeholder="Enter Location"
            value={formData.location} onChange={updateField}/>

            <label>Total Orders</label>
            <input type="number" name="totalOrders" placeholder="Enter Orders"
            value={formData.totalOrders} onChange={updateField}/>

            <label>Total Spent</label>
            <input type="number" name="totalSpent" placeholder="Enter Total Spent" 
            value={formData.totalSpent} onChange={updateField}/>

            <div className="form-button">
              <button type="submit" className="form-confirm-button"> {editCustomerIndex == null ? "Add Customer" : "Confirm Edit"}</button>
              <button type="button" className="form-cancel-button" onClick={() => setShowForm(false)}>
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
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.fullName}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phoneNum}</td>
                  <td>{customer.location}</td>
                  <td>{customer.totalOrders}</td>
                  <td>{customer.totalSpent}</td>
                  <td>
                    <button className="edit-button" onClick={() => editCustomer(index)}>Edit Row</button>
                    <button className="delete-button"  onClick={() => deleteCustomer(index)}>Delete Row</button>
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

