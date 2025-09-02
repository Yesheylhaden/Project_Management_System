import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to your backend
    console.log('Password reset requested for:', email);
    setSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="forgot-password-title">Forgot Password?</h2>
        <p className="instruction-text">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="e.g Pema123@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="request-link-btn">
              Request Link
            </button>
          </form>
        ) : (
          <div className="success-message">
            <p>We've sent a password reset link to your email address.</p>
          </div>
        )}

        <div className="links-container">
          <a href="/login" className="back-link">Back to Login</a>
          <p className="signup-prompt">
            Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;