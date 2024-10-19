import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./componentStyles/LoginForm.css";
import axios from "axios";

function LoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();
  const { login } = React.useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      setEmail(data.email);
      await axios.post('/send-otp', { email: data.email });
      setIsOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError("email", { message: "Error sending OTP. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const onVerifyOtp = async (otpData) => {
    setLoading(true);
    try {
      const response = await axios.post('/verify-otp', { email, otp: otpData.otp });
      await login({ email, password: otpData.password });
      navigate("/dashboard");
    } catch (error) {
      console.error("OTP Verification Error:", error);
      setError("otp", { message: "Invalid OTP. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login to EduKenya</h2>

      {!isOtpSent ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="form-input"
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
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
          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onVerifyOtp)}>
          <input
            type="text"
            placeholder="Enter OTP"
            {...register("otp", { required: "OTP is required" })}
            className="form-input"
          />
          {errors.otp && <p className="error-message">{errors.otp.message}</p>}
          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP & Login"}
          </button>
        </form>
      )}

      <Link to="/signup" className="form-link">
        Don't have an account? Sign Up
      </Link>
    </div>
  );
}

export default LoginForm;
