import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Container from "./Container"; // Import the Container component
import { useNavigate } from "react-router-dom";

const FormContainer = styled(Container)`
  margin: ${({ theme }) => theme.spacing(8)} auto;
  padding: ${({ theme }) => theme.spacing(4)};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 400px; /* Ensure the form doesn't get too wide */
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.primary};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: ${({ theme }) => theme.spacing(2)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const TextLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

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
      // Display error message to user
    }
  };

  return (
    <FormContainer>
      <Title>Login to EduKenya</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <Button type="submit">Login</Button>
      </form>
      <TextLink to="/signup">Don't have an account? Sign Up</TextLink>
    </FormContainer>
  );
}

export default LoginForm;
