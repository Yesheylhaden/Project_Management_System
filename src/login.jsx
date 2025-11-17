import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token in localStorage
        localStorage.setItem("token", data.token);
        alert("✅ Login successful!");
        // Optionally redirect to dashboard
        // window.location.href = "/dashboard";
      } else {
        setError(data.message || "Login failed!");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Login Form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-text">{error}</p>}

        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="signup-text">
          Don’t have an account? <a href="#">Signup</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
