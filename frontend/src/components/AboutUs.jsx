import React from "react";
import aboutImage from "../assets/about-image.png";
import "./componentStyles/AboutUs.css";

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About EduKenya</h2>
          <p className="about-text">
            EduKenya is a revolutionary platform aiming to transform the
            educational landscape in Kenya. By leveraging cutting-edge AI
            technologies, we provide personalized and accessible learning
            experiences to students across the country, ensuring that no one is
            left behind.
          </p>
        </div>
        <img src={aboutImage} alt="About EduKenya" className="about-image" />
      </div>
    </section>
  );
}

export default AboutUs;
