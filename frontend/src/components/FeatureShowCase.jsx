import React, { useState } from "react";
import "./componentStyles/FeatureShowCase.css";
import personalizedIcon from "../assets/personalized-icon.png";
import offlineIcon from "../assets/offline-icon.png";
import inclusiveIcon from "../assets/inclusive-icon.png";
import featureIcon1 from "../assets/feature1.png";
import featureIcon2 from "../assets/feature2.png";
import featureIcon3 from "../assets/feature3.png";

const features = [
  {
    icon: personalizedIcon,
    title: "Personalized Learning",
    description:
      "AI algorithms tailor content to your individual learning style and progress.",
  },
  {
    icon: offlineIcon,
    title: "Offline Access",
    description: "Learn anytime, anywhere, even without internet connectivity.",
  },
  {
    icon: inclusiveIcon,
    title: "Inclusive Education",
    description:
      "Accessibility features ensure everyone has equal learning opportunities.",
  },
  {
    icon: featureIcon1,
    title: "Adaptive Learning Paths",
    description:
      "Our AI adapts to your learning style and pace, providing a customized path to success.",
  },
  {
    icon: featureIcon2,
    title: "Interactive Virtual Labs",
    description:
      "Engage with hands-on experiments and simulations to deepen your understanding.",
  },
  {
    icon: featureIcon3,
    title: "Comprehensive Analytics",
    description:
      "Track your progress with detailed analytics and insights to stay on top of your learning.",
  },
];

function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="feature-showcase">
      <div className="feature-container">
        <h2 className="feature-title">Why Choose KenyAInspire?</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${
                index === activeFeature ? "active" : ""
              }`}
              onMouseEnter={() => setActiveFeature(index)}
              onClick={() => setActiveFeature(index)}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <h3 className="feature-subtitle">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;
