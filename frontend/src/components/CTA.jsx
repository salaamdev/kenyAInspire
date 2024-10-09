import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Text = styled.p`
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Button = styled(Link)`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

function CTA() {
  return (
    <Section>
      <Title>Ready to Transform Your Learning Experience?</Title>
      <Text>Join thousands of students who are excelling with EduKenya.</Text>
      <Button to="/signup">Sign Up Now</Button>
    </Section>
  );
}

export default CTA;
