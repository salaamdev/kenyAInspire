import React from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./componentStyles/LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { login } = React.useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login To Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
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
          Login
        </button>
      </form>
      <Link to="/signup" className="form-link">
        Don't have an account? Sign Up
      </Link>
    </div>
  );
}

export default LoginForm;
