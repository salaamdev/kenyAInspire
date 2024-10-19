import React from "react";
import "./componentStyles/FeaturedContent.css";
import personalizedIcon from "../assets/personalized-icon.png";
import offlineIcon from "../assets/offline-icon.png";
import inclusiveIcon from "../assets/inclusive-icon.png";

function FeaturedContent() {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <h2 className="featured-title">Why Choose KenyAInspire?</h2>
        <div className="content-grid">
          <div className="content-card">
            <img
              src={personalizedIcon}
              alt="Personalized Learning"
              className="icon"
            />
            <h3 className="card-title">Personalized Learning</h3>
            <p className="card-text">
              AI algorithms tailor content to your individual learning style and
              progress.
            </p>
          </div>
          <div className="content-card">
            <img src={offlineIcon} alt="Offline Access" className="icon" />
            <h3 className="card-title">Offline Access</h3>
            <p className="card-text">
              Learn anytime, anywhere, even without internet connectivity.
            </p>
          </div>
          <div className="content-card">
            <img
              src={inclusiveIcon}
              alt="Inclusive Education"
              className="icon"
            />
            <h3 className="card-title">Inclusive Education</h3>
            <p className="card-text">
              Accessibility features ensure everyone has equal learning
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedContent;
