import React from "react";
import { Link } from "react-router-dom";
import "./componentStyles/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About KenyAInspire</h4>
          <p>
            KenyAInspire is committed to revolutionizing education in Kenya
            through AI-powered personalized learning experiences.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@kenyainspire.co.ke</p>
          <p>Phone: +254 700 000000</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
