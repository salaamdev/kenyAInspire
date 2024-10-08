import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeaturedContent from "../components/FeaturedContent";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedContent />
      <Footer />
    </>
  );
}

export default HomePage;
