import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0)
    return <h3 className="cart-title-1">Cart is empty</h3>;

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>
    
      <div className="cart-grid">
        {cart.map(item => (
          <div className="cart-card" key={item._id}>
            <img src={item.image} alt={item.name} />

            <h4>{item.name}</h4>
            <p>Qty: {item.qty}</p>
            <p>Rs. {item.price * item.qty}</p>

            <button onClick={() => removeFromCart(item._id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <Link to="/checkout" className="checkout-btn-1">
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default Cart;
