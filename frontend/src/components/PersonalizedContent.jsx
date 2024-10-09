import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRecommendations } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

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
  const { token } = React.useContext(AuthContext);
  const [recommendations, setRecommendations] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecommendations(token);
        setRecommendations(data.recommendations);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <ContentContainer>
      <Title>Your Personalized Recommendations</Title>
      <ContentItem>
        <p>{recommendations || "Loading recommendations..."}</p>
      </ContentItem>
    </ContentContainer>
  );
}

export default PersonalizedContent;
