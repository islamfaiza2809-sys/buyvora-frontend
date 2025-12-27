import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img
        src={product.image || product.images?.[0]}
        alt={product.name}
        className="product-image"
        onClick={() => navigate(`/product/${product._id}`)}
      />

      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">Rs. {product.price}</p>

      <div className="product-actions">
         <button className="btn btn-dark btn-sm" onClick={() => navigate(`/product/${product._id}`)}>
         View Details
        </button>

         <button className="btn btn-outline-dark btn-sm" onClick={() => addToCart(product)}>
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
