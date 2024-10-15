import React from "react";
import { Link } from "react-router-dom";
import "./componentStyles/CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <h2 className="cta-title">
        Ready to Transform Your Learning Experience?
      </h2>
      <p className="cta-text">
        Join thousands of students who are excelling with EduKenya.
      </p>
      <Link to="/signup" className="cta-button">
        Sign Up Now
      </Link>
    </section>
  );
}

export default CTA;
