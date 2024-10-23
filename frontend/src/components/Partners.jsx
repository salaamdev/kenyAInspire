import React from "react";
import "./componentStyles/Partners.css";
import partnerLogo1 from "../assets/partner1.png";
import partnerLogo2 from "../assets/partner2.png";
import partnerLogo3 from "../assets/partner3.svg";

function Partners() {
  const partners = [
    { name: "Partner 1", logo: partnerLogo1 },
    { name: "Partner 2", logo: partnerLogo2 },
    { name: "Partner 3", logo: partnerLogo3 },
    { name: "Partner 4", logo: partnerLogo1 }, // Replace with actual logo
    { name: "Partner 5", logo: partnerLogo2 }, // Replace with actual logo
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>
        <p className="partners-subtitle">
          We collaborate with leading organizations to bring you the best in
          AI-powered education.
        </p>
        <div className="logos-container">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo-wrapper">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
