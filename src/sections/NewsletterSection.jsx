function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="container text-center py-5">
        <h4>Stay in the Loop</h4>
        <p>Subscribe for exclusive deals</p>

        <div className="d-flex justify-content-center mt-3">
          <input
            type="email"
            className="form-control newsletter-input me-2"
            placeholder="Enter your email"
          />
          <button className="btn btn-dark px-4">Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
