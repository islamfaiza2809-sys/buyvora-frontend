import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="page-container">Loading...</p>;

  return (
    <div className="page-container product-details">
      <img
        src={product.image || product.images?.[0]}
        alt={product.name}
      />

      <div>
        <h2>{product.name}</h2>
        <p className="price">Rs. {product.price}</p>
        <p>{product.description}</p>

        <button className="btn btn-dark" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
