import React from "react";
import styled from "styled-components";
import personalizedIcon from "../assets/personalized-icon.png";
import offlineIcon from "../assets/offline-icon.png";
import inclusiveIcon from "../assets/inclusive-icon.png";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background-color: ${({ theme }) => theme.colors.background};
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

const ContentGrid = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentCard = styled.div`
  width: 30%;
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 80%;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: ${({ theme }) => theme.spacing(2)} 0;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;

function FeaturedContent() {
  return (
    <Section>
      <Container>
        <Title>Why Choose EduKenya?</Title>
        <ContentGrid>
          <ContentCard>
            <Icon src={personalizedIcon} alt="Personalized Learning" />
            <CardTitle>Personalized Learning</CardTitle>
            <CardText>
              AI algorithms tailor content to your individual learning style and
              progress.
            </CardText>
          </ContentCard>
          <ContentCard>
            <Icon src={offlineIcon} alt="Offline Access" />
            <CardTitle>Offline Access</CardTitle>
            <CardText>
              Learn anytime, anywhere, even without internet connectivity.
            </CardText>
          </ContentCard>
          <ContentCard>
            <Icon src={inclusiveIcon} alt="Inclusive Education" />
            <CardTitle>Inclusive Education</CardTitle>
            <CardText>
              Accessibility features ensure everyone has equal learning
              opportunities.
            </CardText>
          </ContentCard>
        </ContentGrid>
      </Container>
    </Section>
  );
}

export default FeaturedContent;
