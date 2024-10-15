import React from "react";
import "./componentStyles/VirtualLab.css";

function VirtualLab() {
  return (
    <section className="lab-container">
      <h2 className="lab-title">Virtual Lab</h2>
      <div className="lab-content">
        <p>
          Welcome to the Virtual Lab! Here you can perform interactive
          experiments and simulations.
        </p>
        {/* Add more interactive content or embed simulations */}
      </div>
    </section>
  );
}

export default VirtualLab;
