import React from "react";
import styled from "styled-components";
import aboutImage from "../assets/about-image.png"; // Place an image in assets

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 90%;
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

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.6;
`;

const Image = styled.img`
  flex: 1;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-left: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

function AboutUs() {
  return (
    <Section>
      <Container>
        <Content>
          <Title>About EduKenya</Title>
          <Text>
            EduKenya is a revolutionary platform aiming to transform the
            educational landscape in Kenya. By leveraging cutting-edge AI
            technologies, we provide personalized and accessible learning
            experiences to students across the country, ensuring that no one is
            left behind.
          </Text>
        </Content>
        <Image src={aboutImage} alt="About EduKenya" />
      </Container>
    </Section>
  );
}

export default AboutUs;
