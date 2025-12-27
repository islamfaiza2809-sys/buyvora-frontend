import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/main.css";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      /* ✅ SAVE TOKEN */
      localStorage.setItem("token", data.token);

      /* ✅ UPDATE AUTH CONTEXT (IMPORTANT) */
      login(data.user);

      /* ✅ REDIRECT BASED ON ROLE */
      if (data.user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-layout">

        {/* BRAND BLOCK */}
        <div className="auth-brand">
          <h1>Buyvora</h1>
          <p>
            One destination for fashion, lifestyle & everyday essentials.
            Experience quality shopping made simple.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="auth-card">
          <h2>Welcome Back</h2>
          <p className="auth-sub">Login to continue shopping</p>

          {error && <p className="error">{error}</p>}

          <form className="auth-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;

