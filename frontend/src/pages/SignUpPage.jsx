import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";
import "./pageStyles/SignUpPage.css";

export default function SignUpPage() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
}
