import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Partners from "../components/Partners";
import FeatureShowcase from "../components/FeatureShowCase";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <FeatureShowcase />
      <FAQ />
      <Partners />
      <CTA />
      <Footer />
    </>
  );
}

export default HomePage;
