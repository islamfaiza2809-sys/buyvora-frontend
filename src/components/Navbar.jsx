import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";

function Navbar() {
  // eslint-disable-next-line
  const [search, setSearch] = useState("");
  // eslint-disable-next-line
  const navigate = useNavigate();

  const closeNavbar = () => {
    const nav = document.getElementById("buyvoraNavbar");
    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container-fluid">

        {/* LOGO */}
        <NavLink
          className="navbar-brand d-flex align-items-center fw-bold"
          to="/"
          onClick={closeNavbar}
        >
          <img src={logo} alt="Buyvora Logo" className="logo-img" />
          <span className="ms-2">BUYVORA</span>
        </NavLink>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#buyvoraNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="buyvoraNavbar">

          {/* MAIN LINKS */}
          <ul className="navbar-nav mx-auto align-items-lg-center mobile-nav">

            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  to={item.path}
                  end
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-nav-link" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* CATEGORIES */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </span>

              <ul className="dropdown-menu dropdown-menu-center shadow">
                {[
                  "Clothing",
                  "Electronics",
                  "Furniture",
                  "Beauty",
                  "Kids",
                  "Accessories",
                  "Foods",
                  "Shoes",
                ].map((cat) => (
                  <li key={cat}>
                    <NavLink
                      className="dropdown-item"
                      to={`/shop?cat=${cat.toLowerCase()}`}
                      onClick={closeNavbar}
                    >
                      {cat}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <ul className="navbar-nav align-items-center">
            <li className="nav-item position-relative me-3">
              <Link
                className="nav-link cart-icon"
                to="/cart"
                onClick={closeNavbar}
              >
                🛒 <span className="cart-badge">0</span>
              </Link>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `btn btn-outline-dark me-2 ${isActive ? "active-btn" : ""}`
                }
                to="/login"
                onClick={closeNavbar}
              >
                Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `btn btn-dark ${isActive ? "active-btn-dark" : ""}`
                }
                to="/register"
                onClick={closeNavbar}
              >
                Register
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
