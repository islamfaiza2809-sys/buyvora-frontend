function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Footer */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-col brand">
            <div className="logo">
              <h3>BUYVORA</h3>
            </div>
            <p>Your one-stop shop for all categories.</p>

            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
            />

            <div className="social-icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-x-twitter"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="/shop?cat=clothing">Clothing</a></li>
              <li><a href="/shop?cat=beauty">Beauty</a></li>
              <li><a href="/shop?cat=kids">Kids</a></li>
              <li><a href="/shop?cat=accessories">Accessories</a></li>
            </ul>
          </div>

          {/* My Profile */}
          <div className="footer-col">
            <h4>My Profile</h4>
            <ul>
              <li><a href="/account">My Account</a></li>
              <li><a href="/track-order">Track Order</a></li>
              <li><a href="/cart">My Cart</a></li>
              <li><a href="/orders">Order History</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom footer-bottom-center">
          <p>Copyright © 2025 Buyvora. All rights reserved</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
