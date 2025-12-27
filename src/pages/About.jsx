import "../styles/main.css";
import InstagramPreviewSection from "../sections/InstagramPreviewSection";
import { FaBullseye, FaEye } from "react-icons/fa";
import {
  FaCheckCircle,
  FaLayerGroup,
  FaTruck,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Buyvora</h1>
        <p>
          We believe shopping should be simple, inspiring, and built around your
          lifestyle. Buyvora brings together quality products across categories,
          designed to fit seamlessly into your everyday life.
        </p>
      </section>

      {/* WHY BUYVORA SECTION (LIKE DEMO) */}
      <section className="about-why">
        <h2>What Makes Buyvora Stand Out</h2>
        <p className="about-why-sub">
          Quality, variety & convenience — everything you need, all in one place
        </p>

        <div className="about-why-cards">
          <div className="about-why-card">
            <FaCheckCircle className="why-icon" />
            <h3>Premium Quality</h3>
            <p>
              Each product on Buyvora is carefully selected to ensure durability,
              comfort, and long-lasting value across all categories.
            </p>
          </div>

          <div className="about-why-card">
            <FaLayerGroup className="why-icon" />
            <h3>Multiple Categories</h3>
            <p>
              From fashion and accessories to lifestyle and daily essentials,
              Buyvora brings everything together in one seamless platform.
            </p>
          </div>

          <div className="about-why-card">
            <FaTruck className="why-icon" />
            <h3>Reliable Delivery</h3>
            <p>
              Fast, secure, and dependable delivery ensures your orders reach you
              on time, every time.
            </p>
          </div>

          <div className="about-why-card">
            <FaUsers className="why-icon" />
            <h3>For Everyone</h3>
            <p>
              Inclusive products designed for all lifestyles, needs, and
              preferences — shopping made easy for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* PURPOSE SECTION */}
      <section className="about-purpose">
        <h2>Our Purpose, Your Lifestyle</h2>
        <p className="about-purpose-sub">
          At Buyvora, everything we offer starts with you — your needs, your
          convenience, and your trust in a platform that delivers quality across
          fashion, lifestyle, and everyday essentials.
        </p>

        <div className="purpose-card-wrapper">
          <div className="purpose-card-1">
            <div className="purpose-icon">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to create a seamless multi-category shopping
              experience that combines quality, value, and convenience. From
              fashion and accessories to lifestyle essentials, we focus on
              offering products that enhance daily life and meet real needs.
            </p>
          </div>

          <div className="purpose-card-2">
            <div className="purpose-icon">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              Our vision is to become a trusted e-commerce destination where
              customers can discover, shop, and rely on a wide range of products
              in one place.
            </p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <InstagramPreviewSection />
    </>
  );
}

export default About;
