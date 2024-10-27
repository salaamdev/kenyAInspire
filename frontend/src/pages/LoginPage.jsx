import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import "./pageStyles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}
