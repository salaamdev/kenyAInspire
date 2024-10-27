import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../pages/DashboardLayout";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Settings from "../pages/Settings";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
// import Subjects from "../pages/Subjects"; // Import Subjects component
import Books from "../pages/Books"; // Import Books component

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Protected Routes */}
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
        {/* <Route path="courses/:courseId" element={<CourseDetail />} /> */}
        <Route path="settings" element={<Settings />} />
        {/* <Route path="subjects" element={<Subjects />} />{" "} */}
        {/* Add Subjects route */}
        <Route path="courses/books/:grade/:subject" element={<Books />} />{" "}
        {/* Add Books route */}
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRoutes;
