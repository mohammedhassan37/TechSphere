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
          <p>£90,250.00</p>
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
       </div>

  );
}

export default ManageRevenue;