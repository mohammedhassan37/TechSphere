import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/ProductPage.css";

function ProductDetails() {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const addToBasket = () => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    const existing = basket.find(item => item.name === product.name);

    if (existing) {
      existing.quantity += 1;
    } else {
      basket.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("basket", JSON.stringify(basket));

    navigate("/basket");
  };

  return (
    <div className="details-container">

      <img src={product.image} alt={product.name} />

      <div className="details-info">
        <h1>{product.name}</h1>
        <h2>£{product.price}</h2>

        <h3>Specifications</h3>
        <ul>
          <li>Screen: {product.specs.screen}</li>
          <li>Storage: {product.specs.storage}</li>
          <li>Camera: {product.specs.camera}</li>
          <li>Battery: {product.specs.battery}</li>
          <li>OS: {product.specs.os}</li>
        </ul>

        <button onClick={addToBasket} className="add-btn">
          Add to Basket
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;
