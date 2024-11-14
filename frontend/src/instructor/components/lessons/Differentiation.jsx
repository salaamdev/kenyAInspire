// frontend/src/instructor/components/lesson/DifferentiationStrategies.jsx

import React from "react";
import { motion } from "framer-motion";

export default function DifferentiationStrategies({ strategies = [] }) {
  if (!strategies.length) {
    return null; // Or display a message like <p>No differentiation strategies available.</p>
  }

  return (
    <motion.div
      className="section differentiation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Differentiation Strategies</h2>
      <ul>
        {strategies.map((strategy, index) => (
          <li key={index}>{strategy}</li>
        ))}
      </ul>
    </motion.div>
  );
}
