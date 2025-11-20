import React from "react";
import "./signup.css";

export default function Signup() {
  return (
    <div className="signup-bg">
      <form className="signup-card">
        <div className="signup-title">Sign up</div>
        <select className="signup-input" defaultValue="">
          <option value="" disabled>
            Company Name
          </option>
          <option>Thimphu Tech Park</option>
          <option>Druk Smart</option>
          <option>Itechnologies</option>
          <option>Abit</option>
          <option>NGN</option>
          <option>Selise</option>
        </select>
        <input className="signup-input" type="email" placeholder="Email" />
        <div className="signup-names-row">
          <input
            className="signup-input"
            style={{ margin: 0 }}
            type="text"
            placeholder="First name"
          />
          <input
            className="signup-input"
            style={{ margin: 0 }}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="signup-input"
          type="password"
          placeholder="Password"
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Confirm Password"
        />
        <button className="signup-btn" type="submit">
          Sign up
        </button>
        <div className="signup-remember">
          <div className="div"> <input type="checkbox" /></div>
          <div className="div">
            <h4>Remember me</h4>
          </div>
          
          {/* <label>
            
          </label> */}
        </div>
        <hr style={{ width: "100%", margin: "16px 0" }} />
        <button className="signup-google-btn" type="button">
          Sign up with Google
        </button>
        <div className="signup-login-link">
          Already a member? 
          <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}
