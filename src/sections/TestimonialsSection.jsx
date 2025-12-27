function TestimonialsSection() {
  return (
    <section className="testimonials-section mt-5">
      <div className="container">
        <h3 className="text-center mb-4 testimonals-section-title">What Our Customers Says</h3>
        <p className="testimonials-subtitle">
          Store that fashion and comfort.
        </p>
        
        <div className="testimonials-grid">
          {/* Card 1 */}
          <div className="testimonial-card">
            <span className="quote-icon">“</span>
            <p className="testimonial-text">
              Buyvora has completely transformed how I shop online.
              The quality and comfort are unmatched, and every order
              exceeds my expectations.
            </p>
            <div className="testimonial-user">
              <h6>Aisha K.</h6>
              <small>Karachi</small>
            </div>
          </div>

          {/* Card 2 */}
          <div className="testimonial-card-2">
            <span className="quote-icon">“</span>
            <p className="testimonial-text">
              I'm always looking for versatile products and Buyvora
              delivers every time. Fast shipping and premium quality.
            </p>
            <div className="testimonial-user">
              <h6>Omar R.</h6>
              <small>Lahore</small>
            </div>
          </div>

          {/* Card 3 */}
          <div className="testimonial-card">
            <span className="quote-icon">“</span>
            <p className="testimonial-text">
              The wide range of categories makes Buyvora my favorite
              shopping platform. Reliable, stylish, and affordable.
            </p>
            <div className="testimonial-user">
              <h6>Zara M.</h6>
              <small>Islamabad</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
