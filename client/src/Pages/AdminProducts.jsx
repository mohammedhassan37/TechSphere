import "../Styles/AdminProducts.css";
import iphone17ProMax from '../assets/iphone17promax.webp';
import samsungGalaxy from "../assets/samsung galaxy.webp";
import HUAWEI from "../assets/HUAWEI.webp";
import airMax1 from '../assets/airMax_headphones.webp'
import samsung_tv2 from "../assets/samsung_tv2.webp"
import lenovo from "../assets/lenevo.webp";


function AdminProducts() {
  return (
    <div className="admin-products">
      <div className="admin-products-header">
        <h1>Manage Products</h1>
        <button className="add-product"> + Add Product</button>
      </div>

      <p className="admin-products-info">
        View and manage all products in your store
      </p>

      <div className="orders-features">
          <input
            type="text"
            placeholder="Search by Product Name or Category..." className="search"/>
            
          <select className="order-filter">
            <option>All Products</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>

          <select className="order-filter">
            <option>All Categories</option>
            <option>Phones</option>
            <option>Headphones</option>
            <option>Smartwatches</option>
            <option>TVs</option>
            <option>Tablets</option>
          </select>
        </div>

      <div className="products-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="product-cell">
      <img src={iphone17ProMax} alt="iPhone 17 Pro Max" />
      iPhone 17 Pro Max
    </td>
              <td>Phone</td>
              <td>£1199.99</td>
              <td>38</td>
              <td>
  <span className="status in-stock">In Stock</span>
</td>
              <td>
                <button className="edit-button">Update Stock</button>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>

            <tr>
              <td className="product-cell">
      <img src={samsungGalaxy} alt="Samsung Galaxy S25 Ultra" />
      Samsung Galaxy S25 Ultra
    </td>
              <td>Phone</td>
              <td>£999.99</td>
              <td>35</td>
              <td>
  <span className="status in-stock">In Stock</span>
</td>
              <td>
                <button className="edit-button">Update Stock</button>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>

            <tr>
              <td className="product-cell">
      <img src={airMax1} alt="Apple AirPods Max" />
      Apple AirPods Max
    </td>
              <td>Headphones</td>
              <td>£499</td>
              <td>14</td>
              <td>
  <span className="status low-stock">Low Stock</span>
</td>
              <td>
                <button className="edit-button">Update Stock</button>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>

            <tr>
              <td className="product-cell">
      <img src={HUAWEI} alt="HUAWEI Watch Fit 3" />
      HUAWEI Watch Fit 3
    </td>
              <td>Smartwatch</td>
              <td>£139</td>
              <td>0</td>
              <td>
  <span className="status out-of-stock">Out of Stock</span>
</td>
              <td>
                <button className="edit-button">Update Stock</button>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>

<tr>
              <td className="product-cell">
      <img src={samsung_tv2} alt="Samsung 24 Inch Smart Full HD HDR LED TV" />
      Samsung 24 Inch Smart LED TV
    </td>
              <td>TV</td>
              <td>£149.99</td>
              <td>8</td>
              <td>
  <span className="status low-stock">Low Stock</span>
</td>
              <td>
                <button className="edit-button">Update Stock</button>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>

            <tr>
              <td className="product-cell">
      <img src={lenovo} alt="Lenovo Idea Tab 11 Inch" />
      Lenovo Idea Tab 11 Inch
    </td>
              <td>Tablet</td>
              <td>£149.99</td>
              <td>21</td>
              <td>
  <span className="status in-stock">In Stock</span>
</td>
              <td>
                <button className="edit-button">Update Stock</button>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          </tbody>
          
        </table>
      </div>
      <div className="stock-history">
  <h2>Recent Stock Transactions History</h2>

  <div className="stock-list">

    <div className="stock-item">
      <div>
        <p className="stock-product">iPhone 17 Pro Max</p>
        <p className="stock-info">Stock Added</p>
        <span className="stock-date">13 March 2026, 11:00 AM</span>
      </div>
      <div className="stock-change positive">+49</div>
    </div>

    <div className="stock-item">
      <div>
        <p className="stock-product">Samsung Galaxy S25 Ultra</p>
        <p className="stock-info">Order Placed</p>
        <span className="stock-date">12 March 2026, 02:50 PM</span>
      </div>
      <div className="stock-change negative">-1</div>
    </div>

    <div className="stock-item">
      <div>
        <p className="stock-product">Apple AirPods Max</p>
        <p className="stock-info">Restocked</p>
        <span className="stock-date">15 March 2026, 07:30 AM</span>
      </div>
      <div className="stock-change positive">+28</div>
    </div>

    <div className="stock-item">
      <div>
        <p className="stock-product">HUAWEI Watch Fit 3</p>
        <p className="stock-info">Order Placed</p>
        <span className="stock-date">18 March 2026, 11:50 PM</span>
      </div>
      <div className="stock-change negative">-1</div>
    </div>

    <div className="stock-item">
      <div>
        <p className="stock-product">Samsung 24 Inch Smart Full HD HDR LED TV</p>
        <p className="stock-info">Restocked</p>
        <span className="stock-date">15 March 2026, 07:30 AM</span>
      </div>
      <div className="stock-change positive">+15</div>
    </div>
    <div className="stock-item">
      <div>
        <p className="stock-product">Reflex Active Black Smart Watch</p>
        <p className="stock-info">Stock Added</p>
        <span className="stock-date">15 March 2026, 08:30 AM</span>
      </div>
      <div className="stock-change positive">+20</div>
    </div>

    </div>
    </div>
    </div>
  );
}

export default AdminProducts;