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
  const [otpSent, setOtpSent] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const password = watch("password");

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
        // alert("Registration successful!");
        navigate("/login");
      } catch (error) {
        console.error("OTP Verification Error:", error);
        setOtpError("Invalid OTP. Please try again.");
      }
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up Now</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!otpSent ? (
          <>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="form-input"
            />
            {errors.name && <p className="error-text">Name is required</p>}

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="form-input"
            />
            {errors.email && <p className="error-text">Email is required</p>}

            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 8,
                validate: {
                  hasNumber: (value) => /\d/.test(value),
                  hasLetter: (value) => /[a-zA-Z]/.test(value),
                  hasSymbol: (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
                },
              })}
              className="form-input"
            />
            {errors.password && (
              <p className="error-text">
                Password must be at least 8 characters and include at least one
                number, one letter, and one symbol.
              </p>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="form-input"
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword.message}</p>
            )}

            <button type="submit" className="form-button">
              Sign Up
            </button>
          </>
        ) : (
          <>
            <p>An OTP has been sent to {emailForOtp}. Please enter it below:</p>
            <input
              type="text"
              placeholder="Enter OTP"
              {...register("otp", { required: true })}
              className="form-input"
            />
            {errors.otp && <p className="error-text">OTP is required</p>}
            {otpError && <p className="error-text">{otpError}</p>}
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
