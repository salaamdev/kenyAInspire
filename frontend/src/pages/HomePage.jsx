import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeaturedContent from "../components/FeaturedContent";
import AboutUs from "../components/AboutUs";
import FeaturesOverview from "../components/FeaturesOverview";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Partners from "../components/Partners";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedContent />
      {/* <AboutUs /> */}
      <FeaturesOverview />
      <FAQ />
      <Partners />
      <CTA />
      <Footer />
    </>
  );
}

export default HomePage;
