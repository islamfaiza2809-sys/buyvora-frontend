import { useCart } from "../context/CartContext";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/main.css";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    if (!address) {
      alert("Please enter delivery address");
      return;
    }

    try {
      setLoading(true);

      await api.post("/orders", {
        items: cart,
        totalAmount: total,
        address,
      });

      clearCart();
      navigate("/");
    } catch (error) {
      alert("Order could not be placed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-layout">

        {/* LEFT BRAND / INFO */}
        <div className="checkout-brand">
          <h1>Checkout</h1>
          <p>
            Review your order and provide delivery details to complete your
            purchase securely with Buyvora.
          </p>
        </div>

        {/* RIGHT CHECKOUT CARD */}
        <div className="checkout-card">
          <h2>Order Summary</h2>
          <p className="checkout-sub">
            Please confirm your details before placing the order
          </p>

          <div className="checkout-summary">
            <div>
              <span>Items: </span>
              <strong>{cart.length}</strong>
            </div>
            <div>
              <span>Total Amount: </span>
              <strong>Rs. {total}</strong>
            </div>
          </div>

          <textarea
            className="checkout-address"
            placeholder="Enter full delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            className="checkout-btn"
            onClick={placeOrder}
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
