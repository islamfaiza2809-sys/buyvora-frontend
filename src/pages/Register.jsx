import { useState } from "react";
import api from "../api/api";
import "../styles/main.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Account created successfully. Please login.");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-layout">
        
        {/* BRAND SECTION */}
        <div className="auth-brand">
          <h1>Buyvora</h1>
          <p>
            Join Buyvora today and enjoy a seamless shopping experience across
            fashion, lifestyle, and everyday essentials.
          </p>
        </div>

        {/* REGISTER FORM */}
        <div className="auth-card">
          <h2>Create Account</h2>
          <p className="auth-sub">
            Sign up to start shopping smarter with Buyvora
          </p>

          {error && <p className="error">{error}</p>}

          <form className="auth-form" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="auth-btn">
              Create Account
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Register;
