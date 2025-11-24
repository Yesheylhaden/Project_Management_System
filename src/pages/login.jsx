import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false); // new controlled state
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
        // optionally send the remember flag to backend or use it on client
        console.log("Remember me:", remember);
        alert("✅ Login successful!");
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
          {/* Single label wrapping input + text (most reliable) */}
          <label className="remember-container">
            <input
              type="checkbox"
              className="remember-checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              aria-label="Remember me"
            />
            <span className="remember-text">Remember me</span>
          </label>

          <div className="forget-pass">
            <a href="/ForgotPassword">Forgot Password?</a>
          </div>
        </div>

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="signup-text">
          Don’t have an account? <a href="/">Signup</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
