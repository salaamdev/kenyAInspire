import React from "react";
import "./componentStyles/Partners.css";
import partnerLogo1 from "../assets/partner1.png";
import partnerLogo2 from "../assets/partner2.png";
import partnerLogo3 from "../assets/partner3.svg";

function Partners() {
  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <div className="logos-container">
        <img src={partnerLogo1} alt="Partner 1" className="logo" />
        <img src={partnerLogo2} alt="Partner 2" className="logo" />
        <img src={partnerLogo3} alt="Partner 3" className="logo" />
      </div>
    </section>
  );
}

export default Partners;
