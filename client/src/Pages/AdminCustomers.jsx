import "../Styles/AdminCustomers.css";
import { useState, useEffect } from "react";

function AdminCustomers() {
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


    return(
      <div className="admin-customers">
        <div className="admin-customers-header">
          <h1>Manage Customers</h1>
          <button className="add-customer">+ Add Customer</button>
      </div>

      <p className="admin-customers-info">
        View and manage customers:
      </p>
      
      <div className="customers-features">
        <input
          type="text"
          placeholder="Search by Customer Name or Email.." className="search"/>
      </div>

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
                  <button className="edit-button">Edit Row</button>
                  <button className="delete-button">Delete Row</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


    );
}

export default AdminCustomers;

