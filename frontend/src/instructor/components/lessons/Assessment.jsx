// frontend/src/instructor/components/lesson/AssessmentMethods.jsx

import React from "react";
import { motion } from "framer-motion";

export default function AssessmentMethods({ methods = [] }) {
  if (!methods.length) {
    return null; // Or display a message like <p>No assessment methods available.</p>
  }

  return (
    <motion.div
      className="section assessment"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Assessment Methods</h2>
      <div className="assessment-grid">
        {methods.map((method, index) => (
          <div key={index} className="assessment-card">
            <h3>{method.title}</h3>
            <p>{method.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
