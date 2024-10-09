import React from "react";
import styled from "styled-components";

const ContentContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const ContentItem = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

function PersonalizedContent() {
  const dummyContent = [
    {
      title: "Mathematics - Algebra",
      description: "Strengthen your algebra skills with these exercises.",
    },
    {
      title: "Science - Biology",
      description: "Explore the world of cells and organisms.",
    },
  ];

  return (
    <ContentContainer>
      <Title>Your Personalized Content</Title>
      {dummyContent.map((item, index) => (
        <ContentItem key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </ContentItem>
      ))}
    </ContentContainer>
  );
}

export default PersonalizedContent;
