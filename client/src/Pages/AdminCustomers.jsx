import "../Styles/AdminCustomers.css";

function AdminCustomers() {
    return(
      <div className="admin-customers">
        <div className="admin-customers-header">
          <h1>Manage Customers</h1>
      </div>

      <p className="admin-customers-info">
        View and manage customers:
      </p>

          <div className="orders-features">
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
            <tr>
              <td>Alice</td>
              <td>alice123@gmail.com</td>
              <td>07794892293</td>
              <td>Birmingham</td>
              <td>4</td>
              <td>£999.99</td>
              <td>
                <button className="edit-button">Edit Row</button>
                <button className="delete-button">Delete Row</button>
              </td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>bob2@outlook.com</td>  
              <td>07754178357</td>
              <td>London</td>
              <td>2</td>
              <td>£301.98</td>
              <td>
                <button className="edit-button">Edit Row</button>
                <button className="delete-button">Delete Row</button>
              </td>
            </tr>
            <tr>
              <td>Charlie</td>
              <td>charlie213@outlook.com</td>
              <td>07355825797</td>
              <td>Birmingham</td>
              <td>1</td>
              <td>£1099.99</td>
              <td>
                <button className="edit-button">Edit Row</button>
                <button className="delete-button">Delete Row</button>
              </td>
            </tr>
            <tr>
              <td>John</td>
              <td>john31@gmail.com</td>
              <td>07355825797</td>
              <td>Manchester</td>
              <td>2</td>
              <td>£149.99</td>
              <td>
                <button className="edit-button">Edit Row</button>
                <button className="delete-button">Delete Row</button>
              </td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>jane87@outlook.com</td>
              <td>07275921650</td>
              <td>Glasgow</td>
              <td>1</td>
              <td>£229.99</td>
              <td>
                <button className="edit-button">Edit Row</button>
                <button className="delete-button">Delete Row</button>
              </td>
            </tr>
            <tr>
              <td>Henry</td>
              <td>henry6@yahoo.com</td>
              <td>0748928492</td>
              <td>Cardiff</td>
              <td>3</td>
              <td>£599.97</td>
              <td>
                <button className="edit-button">Edit Row</button>
                <button className="delete-button">Delete Row</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    );
}

export default AdminCustomers;

