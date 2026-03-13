import "../Styles/AdminCustomers.css";

function AdminCustomers() {
    return(
      <div className="admin-customers">
        <div className="admin-customers-header">
          <h1>Manage Customers</h1>
          <button className="add-customer"> + Add customer</button> 
      </div>
      
      <p className="admin-customers-info">
        View and manage customers:
      </p>

      <div className="customers-container">
        <table className="customers-table">
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
              <td>07794892293</td>
              <td>Birmingham</td>
              <td>5</td>
              <td>£999.99</td>
              <td>
                <button className="edit-button">Edit Customer</button>
                <button className="delete-button">Delete Customer</button>
              </td>
            </tr>
            <tr>
              <td>testName</td>
              <td>test@test.com</td>
              <td>07754178357</td>
              <td>London</td>
              <td>2</td>
              <td>£301.98</td>
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

