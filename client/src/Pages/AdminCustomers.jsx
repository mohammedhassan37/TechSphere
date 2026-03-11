import "../Styles/AdminCustomers.css";

function AdminCustomers() {


    return(
    <div>
      <div className="admin-customers">
        <div className="admin-customers-header">
          <h1>Manage Customers</h1>
          <button className="add-customer"> + Add Customer</button>
        </div>
      </div>
      
      <p className="admin-customers-info">
        View and manage all customers:
      </p>

      <div>
        <table className="products-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>testName</td>
              <td>test@test.com</td>
              <td>07794892</td>
              <td>Birmingham</td>
              <td>5</td>
              <td>£1000</td>
              <td>Actions</td>
              <td>
                <button className="edit-button">Edit Customer</button>
                <button className="delete-button">Delete Customer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>


    );
}

export default AdminCustomers;

