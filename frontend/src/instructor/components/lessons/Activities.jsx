// frontend/src/instructor/components/lesson/Activities.jsx

import React from "react";
import { motion } from "framer-motion";

export default function Activities({ activities = [] }) {
  if (!activities.length) {
    return null; // Or display a message like <p>No activities available.</p>
  }

  return (
    <motion.div
      className="section activities"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Learning Activities</h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            <span className="duration">Duration: {activity.duration}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
