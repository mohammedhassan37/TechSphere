import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/ProductPage.css";


import { imageMap } from "./SearchPage";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

 
  useEffect(() => {
    async function loadProduct() {
      const res = await fetch(`https://techsphere-8ec2.onrender.com/product/${id}`);
      const data = await res.json();

      setProduct({
        name: data.product_name,
        price: data.product_price,
        image: imageMap[data.product_img],
        specs: data.specs || {}
      });
    }

    loadProduct();
  }, [id]);

  if (!product) {
    return <h2 className="notfound">Finding Product..</h2>;
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
    <div className="details-page">
      <div className="details-container">

        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <h1 className="product-title">{product.name}</h1>
          <h2 className="product-price">£{product.price}</h2>

          
          
          <button onClick={addToBasket} className="button">
            Add to Basket
          </button>

          <div className="specs">
            <h3>Specifications</h3>

            
            
            <ul>
              {product.specs &&
                Object.entries(product.specs).map(([key, value]) => {
                  const formattedKey = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, str => str.toUpperCase());

                  return (
                    <li key={key}>
                      <span className="spec-key">{formattedKey}:</span>
                      <span className="spec-value">{value}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;