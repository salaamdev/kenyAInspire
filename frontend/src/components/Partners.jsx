import React from "react";
import "./componentStyles/Partners.css";
import partnerLogo1 from "../assets/partner1.png";
import partnerLogo2 from "../assets/partner2.png";
import partnerLogo3 from "../assets/partner3.png";

function Partners() {
  const partners = [
    { name: "Partner 3", logo: partnerLogo3, url: "https://www.kaps.co.ke/" },
    { name: "Partner 1", logo: partnerLogo1, url: "https://spu.ac.ke/" },
    {
      name: "Partner 2",
      logo: partnerLogo2,
      url: "https://www.microsoft.com/en-us/",
    },
    // { name: "Partner 4", logo: partnerLogo1, url: "https://spu.ac.ke/" },
    // {
    //   name: "Partner 5",
    //   logo: partnerLogo2,
    //   url: "https://www.microsoft.com/en-us/",
    // }, // Replace with actual logo and URL
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
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
