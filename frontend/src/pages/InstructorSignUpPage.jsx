import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InstructorSignUpForm from "../components/InstructorSignUpForm";
import "./pageStyles/SignUpPage.css";

export default function InstructorSignUpPage() {
    return (
        <div className="page-container">
            <Navbar />
            <main className="main-content">
                <InstructorSignUpForm />
            </main>
            <Footer />
        </div>
    );
}
