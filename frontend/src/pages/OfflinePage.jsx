import React from "react";
import styled from "styled-components";

const OfflineContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(8)};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

function OfflinePage() {
  return (
    <OfflineContainer>
      <Title>You are Offline</Title>
      <Message>
        Some features may not be available. Please connect to the internet to
        access all content.
      </Message>
    </OfflineContainer>
  );
}

export default OfflinePage;
