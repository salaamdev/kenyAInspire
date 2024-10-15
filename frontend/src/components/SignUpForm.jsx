import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import "./componentStyles/SignUpForm.css";

function SignUpForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true })}
          className="form-input"
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Sign Up
        </button>
      </form>
      <Link to="/login" className="form-link">
        Already have an account? Login
      </Link>
    </div>
  );
}

export default SignUpForm;
