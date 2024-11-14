// frontend/src/instructor/components/lesson/Resources.jsx

import React from "react";
import { motion } from "framer-motion";

export default function Resources({ resources = [] }) {
  if (!resources.length) {
    return null; // Or display a message like <p>No resources available.</p>
  }

  return (
    <motion.div
      className="section resources"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Learning Resources</h2>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <h3>{resource.title}</h3>
            <p>Type: {resource.type}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              Access Resource
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
