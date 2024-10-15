import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png";
import "./componentStyles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Empowering Education through AI</h1>
        <p className="hero-subtitle">
          Experience personalized, accessible, and inclusive learning designed
          for Kenyan students.
        </p>
        <Link to="/signup" className="hero-button">
          Get Started
        </Link>
      </div>
      <img
        src={heroImage}
        alt="Students learning"
        className="hero-image"
        style={{ width: "200px" }}
      />
    </section>
  );
}

export default HeroSection;
