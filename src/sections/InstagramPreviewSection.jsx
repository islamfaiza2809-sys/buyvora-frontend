import insta1 from "../assets/images/insta1.png";
import insta2 from "../assets/images/insta2.png";
import insta3 from "../assets/images/insta3.jpg";
import insta4 from "../assets/images/insta4.png";

function InstagramPreviewSection() {
  const pics = [insta1, insta2, insta3, insta4];

  return (
    <section className="instagram-preview-section">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="instagram-title">
          Get 10% Off on Your First Order
        </h2>
        <p className="instagram-subtitle">
          Plus exclusive access to product drops, style tips, and insider deals.
        </p>

        {/* Images */}
        <div className="instagram-images">
          {pics.map((p, i) => (
            <div className="insta-image-box" key={i}>
              <img src={p} alt="Instagram preview" />
            </div>
          ))}
        </div>

        {/* Follow Text */}
        <p className="instagram-follow">
          Follow us <span>@BuyvoraStyle</span>
        </p>
      </div>
    </section>
  );
}

export default InstagramPreviewSection;
