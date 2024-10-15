import React from "react";
import featureIcon1 from "../assets/feature1.png";
import featureIcon2 from "../assets/feature2.png";
import featureIcon3 from "../assets/feature3.png";
import "./componentStyles/FeaturesOverview.css";

function FeaturesOverview() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          <div className="feature-card">
            <img src={featureIcon1} alt="Feature 1" className="feature-icon" />
            <h3 className="feature-title">Adaptive Learning Paths</h3>
            <p className="feature-text">
              Our AI adapts to your learning style and pace, providing a
              customized path to success.
            </p>
          </div>
          <div className="feature-card">
            <img src={featureIcon2} alt="Feature 2" className="feature-icon" />
            <h3 className="feature-title">Interactive Virtual Labs</h3>
            <p className="feature-text">
              Engage with hands-on experiments and simulations to deepen your
              understanding.
            </p>
          </div>
          <div className="feature-card">
            <img src={featureIcon3} alt="Feature 3" className="feature-icon" />
            <h3 className="feature-title">Comprehensive Analytics</h3>
            <p className="feature-text">
              Track your progress with detailed analytics and insights to stay
              on top of your learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesOverview;
