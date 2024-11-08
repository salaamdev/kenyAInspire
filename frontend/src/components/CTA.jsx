import React from "react";
import { Link } from "react-router-dom";
import "./componentStyles/CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Ready to Transform Your Learning Experience?
        </h2>
        <p className="cta-text">
          Join thousands of students who are excelling with KenyAInspire. Start
          your journey towards a brighter future today!
        </p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-button primary">
            Sign Up Now
          </Link>
          <Link to="/demo" className="cta-button secondary">
            Watch Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
