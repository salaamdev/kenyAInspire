// frontend/src/instructor/routes/InstructorRoutes.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import InstructorPrivateRoute from "./InstructorPrivateRoute";
import InstructorLayout from "../pages/InstructorLayout";
import InstructorDashboard from "../pages/InstructorDashboard";
import InstructorAssignments from "../pages/InstructorAssignments";
import InstructorMaterials from "../pages/InstructorMaterials";
import InstructorGrades from "../pages/InstructorGrades";
import InstructorSettings from "../pages/InstructorSettings";
import AssignmentSubmissions from "../pages/AssignmentSubmissions";
import GradeSubmission from "../pages/GradeSubmission";

function InstructorRoutes() {
  return (
    <Routes>
      <Route
        path="/instructor/*"
        element={
          <InstructorPrivateRoute>
            <InstructorLayout />
          </InstructorPrivateRoute>
        }
      >
        <Route path="dashboard" element={<InstructorDashboard />} />
        <Route path="assignments" element={<InstructorAssignments />} />
        <Route path="materials" element={<InstructorMaterials />} />
        <Route path="grades" element={<InstructorGrades />} />
        <Route path="settings" element={<InstructorSettings />} />
        <Route
          path="assignments/:assignmentId/submissions"
          element={<AssignmentSubmissions />}
        />
      </Route>
      <Route
        path="submissions/:submissionId/grade"
        element={<GradeSubmission />}
      />
    </Routes>
  );
}

export default InstructorRoutes;
