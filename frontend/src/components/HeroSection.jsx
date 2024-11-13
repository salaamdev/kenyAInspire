import React from "react";
import { Link } from "react-router-dom";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import heroImage from "../assets/hero-image.png";
import "./componentStyles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Empowering Education through AI</h1>
        <p className="hero-subtitle">
          Experience personalized, accessible, and inclusive learning designed
          for Kenyan students.
        </p>
        <div className="hero-cta">
          <Link to="/signup" className="hero-button learner">
            Student Portal
          </Link>
          <button className="hero-button instructor" disabled>
            Instructor Portal
          </button>
        </div>
        {/* <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div> */}
      </div>
      <img
        src={heroImage}
        alt="Students learning with AI technology"
        className="hero-image"
      />
    </section>
  );
}

export default HeroSection;
