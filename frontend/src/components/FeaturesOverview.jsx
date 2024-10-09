import React from "react";
import styled from "styled-components";
import featureIcon1 from "../assets/feature1.png";
import featureIcon2 from "../assets/feature2.png";
import featureIcon3 from "../assets/feature3.png";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureCard = styled.div`
  width: 30%;
  padding: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 80%;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: ${({ theme }) => theme.spacing(2)} 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;

function FeaturesOverview() {
  return (
    <Section>
      <Container>
        <Title>Our Features</Title>
        <FeaturesGrid>
          <FeatureCard>
            <Icon src={featureIcon1} alt="Feature 1" />
            <FeatureTitle>Adaptive Learning Paths</FeatureTitle>
            <Text>
              Our AI adapts to your learning style and pace, providing a
              customized path to success.
            </Text>
          </FeatureCard>
          <FeatureCard>
            <Icon src={featureIcon2} alt="Feature 2" />
            <FeatureTitle>Interactive Virtual Labs</FeatureTitle>
            <Text>
              Engage with hands-on experiments and simulations to deepen your
              understanding.
            </Text>
          </FeatureCard>
          <FeatureCard>
            <Icon src={featureIcon3} alt="Feature 3" />
            <FeatureTitle>Comprehensive Analytics</FeatureTitle>
            <Text>
              Track your progress with detailed analytics and insights to stay
              on top of your learning.
            </Text>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </Section>
  );
}

export default FeaturesOverview;
