import "../Styles/AdminProducts.css";
import iphone17ProMax from '../assets/iphone17promax.webp';
import samsungGalaxy from "../assets/samsung galaxy.webp";
import HUAWEI from "../assets/HUAWEI.webp";
import airMax1 from '../assets/airMax_headphones.webp'

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
              <td>9</td>
              <td>
                <button className="edit-button">Update Stock</button>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProducts;