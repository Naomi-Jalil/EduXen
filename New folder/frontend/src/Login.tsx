import React from "react";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-header">
          <span className="logo">EduXen</span>
          <button className="register-btn">Register</button>
        </div>
        <h2>Login to your account</h2>
        <div className="social-login">
          <span>Login with</span>
          <button className="google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" />
          </button>
        </div>
        <form className="login-form">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" required />
          <div className="forgot-row">
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>
          <button type="submit" className="login-btn">Log in</button>
        </form>
        <div className="footer-links">
          <span>© Copyright EduXen 2025</span>
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Help</a>
        </div>
      </div>
      <div className="login-right">
        <img src={require('./assets/login-illustration.png')} alt="illustration" className="login-illustration" />
      </div>
    </div>
  );
};

export default Login;
