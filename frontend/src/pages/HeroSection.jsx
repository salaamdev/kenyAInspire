import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero-image.jpg"; // Place your hero image in assets folder

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(8)};
  background-color: ${({ theme }) => theme.colors.lightGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(2)}
      ${({ theme }) => theme.spacing(4)};
  }
`;

const Content = styled.div`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 0;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: ${({ theme }) => theme.spacing(2)} 0;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing(2)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const Image = styled.img`
  flex: 1;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

function HeroSection() {
  return (
    <Hero>
      <Content>
        <Title>Empowering Education through AI</Title>
        <Subtitle>
          Experience personalized, accessible, and inclusive learning designed
          for Kenyan students.
        </Subtitle>
        <Button to="/signup">Get Started</Button>
      </Content>
      <Image src={heroImage} alt="Students learning" />
    </Hero>
  );
}

export default HeroSection;
