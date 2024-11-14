// frontend/src/instructor/components/lesson/Objectives.jsx

import React from "react";
import { motion } from "framer-motion";

export default function Objectives({ objectives = [] }) {
  if (!objectives.length) {
    return null; // Or display a message like <p>No objectives available.</p>
  }

  return (
    <motion.div
      className="section objectives"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Learning Objectives</h2>
      <ul>
        {objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
    </motion.div>
  );
}
