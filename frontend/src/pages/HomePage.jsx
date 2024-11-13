import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Partners from "../components/Partners";
import FeatureShowcase from "../components/FeatureShowCase";
import { smoothScroll } from "../utils/smoothScroll";
function HomePage() {
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeatureShowcase />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
