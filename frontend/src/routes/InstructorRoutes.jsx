import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import InstructorDashboardLayout from "../pages/InstructorDashboardLayout";

const Home = lazy(() => import("../pages/Home"));
const InstructorSignUpPage = lazy(() => import("../pages/InstructorSignUpPage"));
const InstructorLoginPage = lazy(() => import("../pages/InstructorLoginPage"));
const InstructorHome = lazy(() => import("../pages/InstructorHome"));
const LessonPlanGenerator = lazy(() => import("../pages/LessonPlanGenerator"));
const InstructorSettings = lazy(() => import("../pages/InstructorSettings"));

const InstructorRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<InstructorHome />} />
                <Route path="/login" element={<InstructorLoginPage />} />
                <Route path="/signup" element={<InstructorSignUpPage />} />
                {/* Instructor Dashboard Routes */}
                <Route
                    path="/instructor"
                    element={
                        <PrivateRoute>
                            <InstructorDashboardLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path="lesson-plan" element={<LessonPlanGenerator />} />
                    <Route path="settings" element={<InstructorSettings />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default InstructorRoutes;
