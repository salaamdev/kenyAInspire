import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(8)};
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const HomeLink = styled(Link)`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

function ErrorPage() {
  return (
    <ErrorContainer>
      <Title>404</Title>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <HomeLink to="/">Go Back Home</HomeLink>
    </ErrorContainer>
  );
}

export default ErrorPage;
