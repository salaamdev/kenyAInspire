import React from "react";
import styled from "styled-components";

const LabContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const LabContent = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 8px;
`;

function VirtualLab() {
  return (
    <LabContainer>
      <Title>Virtual Lab</Title>
      <LabContent>
        <p>
          Welcome to the Virtual Lab! Here you can perform interactive
          experiments and simulations.
        </p>
        {/* Add more interactive content or embed simulations */}
      </LabContent>
    </LabContainer>
  );
}

export default VirtualLab;
