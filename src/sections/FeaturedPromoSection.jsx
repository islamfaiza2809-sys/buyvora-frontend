import { useNavigate } from "react-router-dom";
import promoImage from "../assets/images/featured-jacket.jpg";

function FeaturedPromo() {
  const navigate = useNavigate();

  return (
    <section className="featured-promo-section">
      <div className="featured-promo-wrapper">

        {/* Image */}
        <div className="featured-promo-image">
          <img src={promoImage} alt="Exclusive Jackets" />
        </div>

        {/* Content */}
        <div className="featured-promo-content">
          <h2>The Exclusive Jackets – Starting at just Rs.2000</h2>

          <p>
            Crafted for comfort, designed for impact — this outerwear piece
            redefines everyday style. Our best-selling jacket brings warmth,
            versatility, and edge to any outfit.
          </p>

          <button
            className="featured-promo-btn"
            onClick={() => navigate("/shop?")}
          >
            SHOP THE EXCLUSIVE JACKET
          </button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedPromo;
