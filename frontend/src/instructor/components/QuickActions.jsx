// frontend/src/instructor/components/QuickActions.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "./componentStyles/QuickActions.css";

function QuickActions() {
  const navigate = useNavigate();

  const handleCreateAssignment = () => {
    navigate("/instructor/assignments/create");
  };

  const handleUploadMaterial = () => {
    navigate("/instructor/materials/upload");
  };

  return (
    <div className="quick-actions">
      <h2>Quick Actions</h2>
      <button onClick={handleCreateAssignment}>Create Assignment</button>
      <button onClick={handleUploadMaterial}>Upload Material</button>
      {/* Add more quick actions as needed */}
    </div>
  );
}

export default QuickActions;
