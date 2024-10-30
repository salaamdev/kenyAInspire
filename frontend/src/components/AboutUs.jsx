// about us component
import React from "react";
import aboutImage from "../assets/about-image.png";
import "./componentStyles/AboutUs.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About KenyAInspire</h2>
          <p className="about-text">
            KenyAInspire is a revolutionary platform aiming to transform the
            educational landscape in Kenya. By leveraging cutting-edge AI
            technologies, we provide personalized and accessible learning
            experiences to students across the country, ensuring that no one is
            left behind.
          </p>
          <p className="about-text">
            Our mission is to democratize education and empower every Kenyan
            student with the tools they need to succeed in the 21st century. We
            believe that by combining artificial intelligence with human
            expertise, we can create a learning environment that adapts to each
            student's unique needs and learning style.
          </p>
          <ul className="about-features">
            <li>Personalized learning paths</li>
            <li>Adaptive assessments</li>
            <li>Real-time progress tracking</li>
            <li>Collaborative learning spaces</li>
            <li>Offline access for remote areas</li>
          </ul>
          <p className="about-text">
            Join us in our journey to revolutionize education in Kenya and
            unlock the potential of every student.
          </p>
        </div>
        <div className="about-image-container">
          <img
            src={aboutImage}
            alt="Students using KenyAInspire"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
