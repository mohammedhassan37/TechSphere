import '../Styles/PreviousOrders.css'



    <div className="previous-orders">
      <div className="previous-orders-header">
        <h1>Previous Orders</h1>
      </div>

      <p className="previous-orders-info">
        View and manage all your previous orders
      </p>

      <div className="orders-features">
        <input
          type="text"
          placeholder="Search by Order ID..."
          className="search"
        />

        <select className="order-filter">
          <option>All Orders</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>

        <select className="order-filter">
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
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#20534</td>
              <td>Jon Jones</td>
              <td>12 Apr 2025</td>
              <td>£599.99</td>
              <td>Completed</td>
              <td>
                <button className="view-button">View</button>
                <button className="refund-button">Refund</button>
              </td>
            </tr>

            <tr>
              <td>#20235</td>
              <td>Ian Payne</td>
              <td>14 May 2023</td>
              <td>£499.00</td>
              <td>Completed</td>
              <td>
                <button className="view-button">View</button>
                <button className="refund-button">Refund</button>
              </td>
            </tr>

            <tr>
              <td>#20336</td>
              <td>Michael Page</td>
              <td>4 Mar 2026</td>
              <td>£699.99</td>
              <td>Completed</td>
              <td>
                <button className="view-button">View</button>
                <button className="refund-button">Refund</button>
              </td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
