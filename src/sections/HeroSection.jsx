import { useNavigate } from "react-router-dom";
import heroImg from "../assets/images/hero.jpg";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-section premium-hero">
      <div className="hero-overlay"></div>

      <img
        src={heroImg}
        alt="Buyvora Hero"
        className="hero-bg-img"
      />

      <div className="hero-content">
        <h1>Buyvora – Shop Everything You Love</h1>
        <p>Premium e-commerce store</p>

        <button
          className="btn btn-hero"
          onClick={() => navigate("/shop")}
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
