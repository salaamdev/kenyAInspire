import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InstructorLoginForm from "../components/InstructorLoginForm";
import "./pageStyles/LoginPage.css";

export default function InstructorLoginPage() {
    return (
        <div className="page-container">
            <Navbar />
            <main className="main-content">
                <InstructorLoginForm />
            </main>
            <Footer />
        </div>
    );
}
