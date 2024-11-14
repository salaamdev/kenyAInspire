// src/routes/AppRoutes.jsx

import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import InstructorPrivateRoute from "../instructor/routes/InstructorPrivateRoute"; // Instructor route guard
import DashboardLayout from "../pages/DashboardLayout";

const Home = lazy(() => import("../pages/Home"));
const Courses = lazy(() => import("../pages/Courses"));
const Settings = lazy(() => import("../pages/Settings"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Books = lazy(() => import("../pages/Books"));
const Quiz = lazy(() => import("../pages/Quiz"));
const FailedQuestions = lazy(() => import("../pages/FailedQuestions"));
const InstructorAnalytics = lazy(() =>
  import("../instructor/pages/InstructorAnalytics")
);

// Instructor pages
const InstructorLogin = lazy(() =>
  import("../instructor/pages/InstructorLogin")
);
const InstructorDashboard = lazy(() =>
  import("../instructor/pages/InstructorDashboard")
);
const InstructorAssignments = lazy(() =>
  import("../instructor/pages/InstructorAssignments")
);
const InstructorMaterials = lazy(() =>
  import("../instructor/pages/InstructorMaterials")
);
const InstructorGrades = lazy(() =>
  import("../instructor/pages/InstructorGrades")
);
const InstructorSettings = lazy(() =>
  import("../instructor/pages/InstructorSettings")
);

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Instructor Routes */}
        <Route path="/instructor/login" element={<InstructorLogin />} />
        <Route
          path="/instructor/*"
          element={
            <InstructorPrivateRoute>
              <Routes>
                <Route path="dashboard" element={<InstructorDashboard />} />
                <Route path="assignments" element={<InstructorAssignments />} />
                <Route path="materials" element={<InstructorMaterials />} />
                <Route path="grades" element={<InstructorGrades />} />
                <Route path="settings" element={<InstructorSettings />} />
                <Route
                  path="/instructor/analytics"
                  element={<InstructorAnalytics />}
                />
                {/* Additional instructor routes can be added here */}
              </Routes>
            </InstructorPrivateRoute>
          }
        />

        {/* Student Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="settings" element={<Settings />} />
          <Route path="courses/books/:grade/:subject" element={<Books />} />
          <Route path="courses/quiz/:grade/:subject" element={<Quiz />} />
          <Route path="failed-questions" element={<FailedQuestions />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
