import "../styles/main.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

function Contact() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have a question about your order, shipping, or just want to say
          hello? Our team is always happy to hear from you.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <div className="page-container">
        <div className="contact-card-wrapper">

          {/* LEFT FORM CARD */}
          <div className="contact-card">
            <h2 className="contact-card-title">Send Us Message</h2>

            <form className="contact-form">
              <input type="text" placeholder="Name *" required />
              <input type="email" placeholder="Email *" required />
              <textarea placeholder="Comment *" rows="5" required />

              <button type="submit" className="send-btn">
                SEND
              </button>
            </form>
          </div>

          {/* RIGHT INFO CARD */}
          <div className="contact-card">
            <div className="info-block">
              <span className="icon-circle"><FaEnvelope /></span>
              <div>
                <h4>Email</h4>
                <p>contact@info.com</p>
              </div>
            </div>

            <div className="info-block">
              <span className="icon-circle"><FaPhoneAlt /></span>
              <div>
                <h4>Phone</h4>
                <p>0333-6712-934</p>
              </div>
            </div>

            <div className="info-block">
              <span className="icon-circle"><FaMapMarkerAlt /></span>
              <div>
                <h4>Address</h4>
                <p>123 Fifth Avenue, Karachi, NY 10160</p>
              </div>
            </div>

            <div className="info-block">
              <span className="icon-circle"><FaHeart /></span>
              <div>
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <FaInstagram />
                  <FaFacebookF />
                  <FaLinkedinIn />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
