import "../Styles/AdminProducts.css";

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
              <td>iPhone 15 Pro Max</td>
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
              <td>Samsung Galaxy S25</td>
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
              <td>Apple AirPods Max</td>
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
              <td>HUAWEI Watch Fit 3</td>
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