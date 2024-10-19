import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser, verifyOTP } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import "./componentStyles/SignUpForm.css";

function SignUpForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const password = watch("password");
  
  // State management
  const [otpSent, setOtpSent] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Password visibility state
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Confirm password visibility

  const onSubmit = async (data) => {
    if (!otpSent) {
      try {
        await registerUser({ ...data, action: "request_otp" });
        setOtpSent(true);
        setEmailForOtp(data.email);
      } catch (error) {
        console.error("Registration Error:", error);
      }
    } else {
      // Handle OTP verification
      try {
        await verifyOTP({ email: emailForOtp, otp: data.otp });
        alert("Registration successful!");
        navigate("/login");
      } catch (error) {
        console.error("OTP Verification Error:", error);
        setOtpError("Invalid OTP. Please try again.");
      }
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
    return (
      passwordRegex.test(value) ||
      "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
    );
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up Now</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!otpSent ? (
          <>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="form-input"
            />
            {errors.name && <p className="error-message">Name is required</p>}

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="form-input"
            />
            {errors.email && <p className="error-message">Email is required</p>}

            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: true,
                  validate: validatePassword,
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
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}

            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="form-input"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={toggleConfirmPasswordVisibility}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword.message}</p>
            )}

            <button type="submit" className="form-button">
              Sign Up
            </button>
          </>
        ) : (
          <>
            <p>
              An OTP has been sent to {emailForOtp}. Please enter it below:
            </p>
            <input
              type="text"
              placeholder="Enter OTP"
              {...register("otp", { required: true })}
              className="form-input"
            />
            {errors.otp && <p className="error-message">OTP is required</p>}
            {otpError && <p className="error-message">{otpError}</p>}
            <button type="submit" className="form-button">
              Verify OTP
            </button>
          </>
        )}
      </form>
      <Link to="/login" className="form-link">
        Already have an account? Login
      </Link>
    </div>
  );
}

export default SignUpForm;
