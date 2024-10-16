import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import "./componentStyles/SignUpForm.css";

function SignUpForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  // Watch the password field to validate the confirmation
  const password = watch("password");
  
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  // Password validation function
  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(value) || "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
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
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", { 
              required: true, 
              validate: validatePassword 
            })}
            className="form-input"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        {errors.password && <p className="error-message">{errors.password.message}</p>}
        <div className="password-input-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            {...register("confirmPassword", { 
              required: true, 
              validate: value => value === password || "Passwords do not match" 
            })}
            className="form-input"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={toggleConfirmPasswordVisibility}
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
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
