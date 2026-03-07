import "../Styles/AdminProducts.css";

function AdminProducts() {
  return (
    <div className="admin-products">
      <div className="admin-products-header">
        <h1>Manage Products</h1>
        <button className="add-product">+ Add Product</button>
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
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>iPhone 15 Pro</td>
              <td>Phone</td>
              <td>£999</td>
              <td>12</td>
              <td>
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