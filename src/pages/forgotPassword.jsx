import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your password reset logic here
        console.log('Password reset requested for:', email);
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-box">
                <h2>Forgot Password?</h2>
                <p className="description">
                    Enter your email address and we'll send you a link to reset your password
                </p>
                
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g Pema123@gmail.com"
                            required
                        />
                    </div>
                    
                    <button type="submit" className="request-link-btn">
                        Request Link
                    </button>
                </form>

                <div className="footer-links">
                    <span>Back to <Link to="/login">Login</Link></span>
                    <span>Don't have an account? <Link to="/">Signup</Link></span>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
