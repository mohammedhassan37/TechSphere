import "../Styles/ManageRevenue.css";

function ManageRevenue() {

  return (
    <div className="manage-revenue">
      <div className="revenue-header">
        <h1>Manage Revenue</h1>
      </div>

      <p className="revenue-info">Overview store earnings and recent transactions</p>

      <div className="revenue-cards">
        <div className="revenue-card">
          <h3>Total Revenue</h3>
          <p>£70,016.00</p>
        </div>

        <div className="revenue-card">
          <h3>Monthly Revenue</h3>
          <p>£12,480.00</p>
        </div>

        <div className="revenue-card">
          <h3>Today</h3>
          <p>£2,338.98</p>
        </div>

        <div className="revenue-card">
          <h3>Average Order</h3>
          <p>£709.50</p>
        </div>
      </div>

      <div className="revenue-section">
  <h2>Revenue by Product</h2>

  <table className="revenue-table">
    <thead>
      <tr>
        <th>Products</th>
        <th>Total Units Sold</th>
        <th>Total Revenue</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>iPhone 17 Pro Max</td>
        <td>25</td>
        <td>£29,999</td>
      </tr>
            <tr>
        <td>Samsung Galaxy S25 Ultra</td>
        <td>18</td>
        <td>£17,999</td>
      </tr>

      <tr>
        <td>Apple AirPods Max</td>
        <td>40</td>
        <td>£19,960</td>
      </tr>

      <tr>
        <td>HUAWEI Watch Fit 3</td>
        <td>22</td>
        <td>£3,058</td>
      </tr>
      <tr className="total-row">
    <td><strong>Total</strong></td>
    <td></td>
    <td><strong>£70,016</strong></td>
  </tr>

    </tbody>
  </table>
</div>
       </div>

  );
}

export default ManageRevenue;